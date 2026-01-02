import { useState } from "react";
import { Box, Typography, Button, LinearProgress } from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router";
import StepTwo from "./components/StepTwo";
import StepOne from "./components/StepOne";

const UploadEmailListPage = () => {
  const [step, setStep] = useState(1);

  const navigate = useNavigate();

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

      {step === 1 && <StepOne setStep={setStep} step={step} />}

      {/* STEP 2 */}
      {step === 2 && <StepTwo />}
    </Box>
  );
};

export default UploadEmailListPage;
