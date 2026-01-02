// EmailListsDashboard.tsx (MUI v7 – Grid2 compatible)

import {
  Box,
  Stack,
  Typography,
  Button,
  Grid,
  Card,
  TextField,
  Select,
  MenuItem,
  IconButton,
} from "@mui/material";

import RefreshIcon from "@mui/icons-material/Refresh";
import UploadIcon from "@mui/icons-material/Upload";
import FilterListIcon from "@mui/icons-material/FilterList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewListIcon from "@mui/icons-material/ViewList";
import { useNavigate } from "react-router";
import StatCard from "./components/StatCard";
import ListCard from "./components/ListCard";
import { stats } from "./utils";

// ---------------- Page ----------------
export default function EmailListsDashboard() {
  const navigate = useNavigate();
  const handleUploadList = () => {
    navigate("/upload-email-list");
  };
  return (
    <Box>
      {/* Header */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Box>
          <Typography variant="h5" fontWeight={700}>
            Email Lists
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Welcome back, Sakshi! Manage your audience segments.
          </Typography>
        </Box>

        <Stack direction="row" spacing={1}>
          <Button startIcon={<RefreshIcon />}>Refresh</Button>
          <Button
            variant="contained"
            startIcon={<UploadIcon />}
            onClick={handleUploadList}
          >
            Upload List
          </Button>
        </Stack>
      </Stack>

      {/* Stats */}
      <Grid container spacing={2} mb={3}>
        {stats.map((item) => {
          return (
            <Grid size={{ xs: 12, md: 2 }} key={item.title}>
              <StatCard
                title={item.title}
                value={item.value}
                subtitle={item.subtitle}
                color={item.color}
              />
            </Grid>
          );
        })}
      </Grid>

      {/* Filters Bar (matches screenshot) */}
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        {/* Search */}
        <TextField
          placeholder="Search lists by name, tags..."
          size="small"
          sx={{ width: 320 }}
        />

        {/* Right Controls */}
        <Stack direction="row" spacing={1.5} alignItems="center">
          <Select size="small" value="All Status">
            <MenuItem value="All Status">All Status</MenuItem>
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Inactive">Inactive</MenuItem>
          </Select>

          <Button
            size="small"
            variant="outlined"
            startIcon={<FilterListIcon />}
          >
            Filters
          </Button>

          {/* View Toggle */}
          <Stack
            direction="row"
            sx={{
              border: "1px solid #e5e7eb",
              borderRadius: 1,
              overflow: "hidden",
            }}
          >
            <IconButton size="small" color="primary">
              <ViewModuleIcon />
            </IconButton>
            <IconButton size="small">
              <ViewListIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Card>

      {/* Email List Cards */}
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 4 }}>
          <ListCard name="final test" contacts={5} />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <ListCard name="madhu" contacts={24} />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <ListCard name="test vercel" contacts={24} />
        </Grid>
      </Grid>
    </Box>
  );
}
