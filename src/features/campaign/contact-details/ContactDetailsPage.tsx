import { useNavigate } from "react-router-dom";

import {
  Box,
  Stack,
  Typography,
  Button,
  Card,
  TextField,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
} from "@mui/material";

import RefreshIcon from "@mui/icons-material/Refresh";
import UploadIcon from "@mui/icons-material/Upload";
import CloseIcon from "@mui/icons-material/Close";
import { contacts } from "../uploadlist/utils";
import StatCard from "./components/StatCard";

export default function ContactDetailsPage() {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 3, maxWidth: "1200px", mx: "auto" }}>
      {/* Header */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Box>
          <Typography variant="h5" fontWeight={700}>
            Contact Details
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Complete contact database with all 13 fields
          </Typography>
        </Box>

        <IconButton onClick={() => navigate(-1)}>
          <CloseIcon />
        </IconButton>
      </Stack>

      {/* Stats */}
      <Stack direction="row" spacing={2} mb={3}>
        <StatCard label="Active" value={5} color="success.main" />
        <StatCard label="Unsubscribed" value={0} color="error.main" />
        <StatCard label="Bounced" value={0} color="warning.main" />
        <StatCard label="Total" value={5} color="primary.main" />
      </Stack>

      {/* Filters */}
      <Stack direction="row" spacing={2} mb={3}>
        <TextField
          placeholder="Search contacts..."
          size="small"
          sx={{ width: 300 }}
        />
        <Select size="small" defaultValue="All Status">
          <MenuItem value="All Status">All Status</MenuItem>
        </Select>
        <Button startIcon={<RefreshIcon />}>Refresh</Button>
        <Button variant="contained" startIcon={<UploadIcon />}>
          Upload List
        </Button>
      </Stack>

      {/* Contacts Table */}
      <Card sx={{ overflowX: "auto" }}>
        <Table sx={{ minWidth: 800 }}>
          <TableHead>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Job Title</TableCell>
              <TableCell>Company</TableCell>
              <TableCell>Website</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts.map((c) => (
              <TableRow key={c.email}>
                <TableCell>
                  <a href={`mailto:${c.email}`}>{c.email}</a>
                </TableCell>
                <TableCell>{c.firstName}</TableCell>
                <TableCell>{c.lastName}</TableCell>
                <TableCell>{c.job}</TableCell>
                <TableCell>{c.company}</TableCell>
                <TableCell>
                  <a
                    href={`https://${c.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {c.website}
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      {/* Footer Actions */}
      <Stack direction="row" spacing={2} mt={3}>
        <Button variant="outlined">Create Segment</Button>
        <Button variant="contained" color="success">
          Start Campaign
        </Button>
        <Button variant="outlined">Add Contact</Button>
        <Button variant="contained">Export CSV</Button>
      </Stack>
    </Box>
  );
}
