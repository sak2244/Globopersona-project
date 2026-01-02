import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Paper,
  Grid,
  Button,
  LinearProgress,
} from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import PreviewIcon from "@mui/icons-material/Visibility";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router";
import MapFieldsPage from "./MapFieldsPage";

interface CsvPreview {
  columns: string[];
  rows: string[][];
}

const UploadEmailListPage = () => {
  const [listName, setListName] = useState("");
  const [description, setDescription] = useState("");
  const [csvPreview, setCsvPreview] = useState<CsvPreview | null>(null);
  const [step, setStep] = useState(1);

  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const text = reader.result as string;
      const lines = text.split("\n").slice(0, 5);
      const columns = lines[0].split(",");
      const rows = lines.slice(1).map((line) => line.split(","));
      setCsvPreview({ columns, rows });
    };
    reader.readAsText(file);
  };

  const handleBack = () => {
    if (step === 1) navigate("/campaigns");
    else setStep(1);
  };

  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", p: 2 }}>
      {/* Back */}
      <Button
        startIcon={<ArrowBackIcon />}
        sx={{ textTransform: "none", mb: 1 }}
        onClick={handleBack}
      >
        {step === 1 ? "Email Lists" : "Upload CSV"}
      </Button>

      {/* Title */}
      <Typography variant="h4" gutterBottom>
        {step === 1 ? "Upload Email List" : "Map Fields"}
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        {step === 1
          ? "Import contacts from a CSV file"
          : "Match columns from your CSV to contact properties"}
      </Typography>

      {/* Progress */}
      <Box sx={{ my: 2 }}>
        <LinearProgress variant="determinate" value={step * 50} />
        <Typography variant="body2" sx={{ mt: 0.5 }}>
          Step {step} of 2
        </Typography>
      </Box>

      {/* STEP 1 */}
      {step === 1 && (
        <>
          <Grid container spacing={2}>
            {/* Left Column */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Paper sx={{ p: 2, mb: 2 }}>
                <Typography fontWeight={600}>List Information</Typography>
                <Typography variant="body2" color="text.secondary" mb={1}>
                  Basic details about your email list
                </Typography>

                <TextField
                  fullWidth
                  label="List Name"
                  margin="normal"
                  value={listName}
                  onChange={(e) => setListName(e.target.value)}
                />

                <TextField
                  fullWidth
                  label="Description (Optional)"
                  margin="normal"
                  multiline
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Paper>

              {/* Upload */}
              <Paper
                sx={{
                  p: 4,
                  textAlign: "center",
                  border: "2px dashed #D0D5DD",
                  cursor: "pointer",
                }}
                onClick={() => document.getElementById("csv-input")?.click()}
              >
                <UploadFileIcon sx={{ fontSize: 40, mb: 1 }} />
                <Typography>Click to upload or drag and drop</Typography>
                <Typography variant="body2" color="text.secondary">
                  CSV file only
                </Typography>
                <input
                  hidden
                  id="csv-input"
                  type="file"
                  accept=".csv"
                  onChange={handleFileChange}
                />
              </Paper>
            </Grid>

            {/* Right Column */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Paper sx={{ p: 2 }}>
                <Box display="flex" alignItems="center" mb={2}>
                  <PreviewIcon sx={{ mr: 1 }} />
                  <Typography fontWeight={600}>Preview</Typography>
                </Box>

                {csvPreview ? (
                  <Box sx={{ maxHeight: 300, overflow: "auto" }}>
                    <table
                      style={{
                        width: "100%",
                        borderCollapse: "collapse",
                      }}
                    >
                      <thead>
                        <tr>
                          {csvPreview.columns.map((c, i) => (
                            <th
                              key={i}
                              style={{
                                textAlign: "left",
                                borderBottom: "1px solid #ddd",
                                padding: 6,
                              }}
                            >
                              {c}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {csvPreview.rows.map((r, i) => (
                          <tr key={i}>
                            {r.map((cell, j) => (
                              <td
                                key={j}
                                style={{
                                  padding: 6,
                                  borderBottom: "1px solid #eee",
                                }}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                ) : (
                  <Typography color="text.secondary" textAlign="center" mt={4}>
                    No data yet
                  </Typography>
                )}
              </Paper>
            </Grid>
          </Grid>

          {/* Buttons */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mt: 3,
            }}
          >
            <Button onClick={handleBack}>Cancel</Button>
            <Button
              variant="contained"
              sx={{ ml: 2 }}
              disabled={!listName}
              onClick={() => setStep(2)}
            >
              Continue
            </Button>
          </Box>
        </>
      )}

      {/* STEP 2 */}
      {step === 2 && <MapFieldsPage />}
    </Box>
  );
};

export default UploadEmailListPage;
