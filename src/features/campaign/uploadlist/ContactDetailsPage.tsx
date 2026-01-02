import React from "react";
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
  Chip,
} from "@mui/material";

import RefreshIcon from "@mui/icons-material/Refresh";
import UploadIcon from "@mui/icons-material/Upload";
import CloseIcon from "@mui/icons-material/Close";

/* ---------- Dummy Data ---------- */
const contacts = [
  {
    email: "michael.leadflux@outlook.com",
    firstName: "Michael",
    lastName: "King",
    job: "CFO",
    company: "Schlouch Incorporated",
    website: "schlouch.com",
  },
  {
    email: "sarah.leadflux@outlook.com",
    firstName: "Sarah",
    lastName: "Hallquist",
    job: "Chief Executive Officer",
    company: "HPM, Inc.",
    website: "hpmcontracting.com",
  },
  {
    email: "christopher.leadflux@outlook.com",
    firstName: "Christopher",
    lastName: "Gerry",
    job: "Chief Financial Officer",
    company: "R. P. Marzilli & Company",
    website: "rpmarzilli.com",
  },
  {
    email: "ashley.leadflux@outlook.com",
    firstName: "Ashley",
    lastName: "Powers",
    job: "Chief Financial Officer",
    company: "Douglass Colony Group",
    website: "douglasscolony.com",
  },
  {
    email: "emily.leadflux@outlook.com",
    firstName: "Emily",
    lastName: "Hasegawa",
    job: "Principal, Chief Designer",
    company: "ELS Architecture and Design",
    website: "elsarch.com",
  },
];

/* ---------- Stat Card ---------- */
const StatCard = ({ label, value, color }: any) => (
  <Card sx={{ flex: 1, p: 2, textAlign: "center" }}>
    <Typography variant="body2" color="text.secondary">
      {label}
    </Typography>
    <Typography variant="h5" fontWeight={700} mt={0.5}>
      {value}
    </Typography>
    <Chip
      label={label.toUpperCase()}
      size="small"
      sx={{ mt: 1, bgcolor: color, color: "#fff" }}
    />
  </Card>
);

/* ---------- Page ---------- */
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
        <StatCard label="Active" value={5} color="#22c55e" />
        <StatCard label="Unsubscribed" value={0} color="#ef4444" />
        <StatCard label="Bounced" value={0} color="#facc15" />
        <StatCard label="Total" value={5} color="#6366f1" />
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
