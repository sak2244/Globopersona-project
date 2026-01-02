import * as React from "react";
import {
  Box,
  Card,
  Typography,
  Stack,
  Chip,
  Grid,
  Button,
  Avatar,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import BusinessIcon from "@mui/icons-material/Business";
import LanguageIcon from "@mui/icons-material/Language";
import WorkIcon from "@mui/icons-material/Work";
import HomeIcon from "@mui/icons-material/Home";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PublicIcon from "@mui/icons-material/Public";
import PhoneIcon from "@mui/icons-material/Phone";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import CategoryIcon from "@mui/icons-material/Category";
import BoltIcon from "@mui/icons-material/Bolt";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
interface MappingRowProps {
  csv: string;
  sample: string;
  dest: string;
  icon: React.ReactNode;
  required?: boolean;
  active?: boolean;
  onClick?: () => void;
}

const MappingRow: React.FC<MappingRowProps> = ({
  csv,
  sample,
  dest,
  icon,
  required = false,
  active = false,
  onClick,
}) => (
  <Card
    onClick={onClick}
    sx={{
      p: 2,
      borderRadius: 2,
      cursor: "pointer",
      transition: "0.2s",
      border: active
        ? "2px solid #2563EB"
        : required
        ? "1px solid #22c55e"
        : "1px solid #E5E7EB",
      bgcolor: active ? "#EFF6FF" : required ? "#F0FDF4" : "#FFFFFF",
      "&:hover": { bgcolor: "#F8FAFC" },
    }}
  >
    {" "}
    <Grid container spacing={2} alignItems="center">
      {" "}
      <Grid size={{ xs: 4 }}>
        {" "}
        <Typography variant="caption" color="text.secondary">
          {" "}
          CSV COLUMN{" "}
        </Typography>{" "}
        <Typography fontWeight={600}>{csv}</Typography>{" "}
        <Typography variant="caption" color="text.secondary">
          {" "}
          {sample}{" "}
        </Typography>{" "}
      </Grid>{" "}
      <Grid size={{ xs: 1 }} textAlign="center">
        {" "}
        <ArrowForwardIcon color="disabled" />{" "}
      </Grid>{" "}
      <Grid size={{ xs: 5 }}>
        {" "}
        <Stack direction="row" spacing={1} alignItems="center">
          {" "}
          {icon} <Typography>{dest}</Typography>{" "}
          {required && <Chip label="REQUIRED" size="small" color="error" />}{" "}
        </Stack>{" "}
      </Grid>{" "}
      <Grid size={{ xs: 2 }} textAlign="right">
        {" "}
        <CheckCircleIcon color="success" />{" "}
      </Grid>{" "}
    </Grid>{" "}
  </Card>
);

const rows = [
  {
    csv: "Email Address",
    sample: "Emily.Leadflux@outlook.com",
    dest: "Email",
    icon: <EmailIcon fontSize="small" />,
    required: true,
  },
  {
    csv: "First Name",
    sample: "Emily",
    dest: "First Name",
    icon: <PersonIcon fontSize="small" />,
  },
  {
    csv: "Last Name",
    sample: "Hasegawa",
    dest: "Last Name",
    icon: <PersonIcon fontSize="small" />,
  },
  {
    csv: "Title",
    sample: "Principal, Chief Design Officer",
    dest: "Contact Title",
    icon: <WorkIcon fontSize="small" />,
  },
  {
    csv: "Company Name",
    sample: "ELS Architecture",
    dest: "Company Name",
    icon: <BusinessIcon fontSize="small" />,
  },
  {
    csv: "Website",
    sample: "elsarch.com",
    dest: "Website URL",
    icon: <LanguageIcon fontSize="small" />,
  },
  {
    csv: "Address",
    sample: "123 Market Street",
    dest: "Street Address",
    icon: <HomeIcon fontSize="small" />,
  },
  {
    csv: "City",
    sample: "San Francisco",
    dest: "City",
    icon: <LocationCityIcon fontSize="small" />,
  },
  {
    csv: "State",
    sample: "California",
    dest: "State",
    icon: <PublicIcon fontSize="small" />,
  },
  {
    csv: "Country",
    sample: "United States",
    dest: "Country",
    icon: <PublicIcon fontSize="small" />,
  },
  {
    csv: "Zip Code",
    sample: "94105",
    dest: "Postal Code",
    icon: <LocalPostOfficeIcon fontSize="small" />,
  },
  {
    csv: "Phone",
    sample: "+1 415 234 5678",
    dest: "Phone Number",
    icon: <PhoneIcon fontSize="small" />,
  },
  {
    csv: "Industry",
    sample: "Architecture",
    dest: "Industry",
    icon: <CategoryIcon fontSize="small" />,
  },
];

export default function StepTwo() {
  const navigate = useNavigate();
  const [activeRow, setActiveRow] = React.useState<number | null>(0);
  const [page, setPage] = React.useState(1);

  return (
    <Grid container spacing={3}>
      {" "}
      {/* LEFT */}{" "}
      <Grid size={{ xs: 12, md: 8 }}>
        {" "}
        <Card sx={{ p: 2, borderRadius: 2 }}>
          {" "}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            {" "}
            <Typography fontWeight={700}>Column Mappings</Typography>{" "}
            <Chip label="Auto-Mapped" color="success" size="small" />{" "}
          </Stack>{" "}
          <Stack spacing={2}>
            {" "}
            {rows.map((row, i) => (
              <MappingRow
                key={i}
                {...row}
                active={activeRow === i}
                onClick={() => setActiveRow(i)}
              />
            ))}{" "}
          </Stack>{" "}
        </Card>{" "}
      </Grid>{" "}
      {/* RIGHT */}{" "}
      <Grid size={{ xs: 12, md: 4 }}>
        {" "}
        <Stack spacing={2}>
          {" "}
          <Card sx={{ p: 3, borderRadius: 2 }}>
            {" "}
            <Typography fontWeight={600} mb={2}>
              {" "}
              Mapping Status{" "}
            </Typography>{" "}
            <Stack direction="row" spacing={2} alignItems="center" mb={2}>
              {" "}
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  border: "5px solid #22c55e",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {" "}
                <Typography fontWeight={700} color="success.main">
                  {" "}
                  100%{" "}
                </Typography>{" "}
              </Box>{" "}
              <Typography>
                {" "}
                Mapped <b>13 / 13</b>{" "}
              </Typography>{" "}
            </Stack>{" "}
            <Button
              fullWidth
              variant="contained"
              startIcon={<BoltIcon />}
              sx={{ borderRadius: 2 }}
              onClick={() => navigate("/campaigns")}
            >
              {" "}
              Create Email List{" "}
            </Button>{" "}
          </Card>{" "}
          {/* Live Preview */}{" "}
          <Card sx={{ p: 2, borderRadius: 2 }}>
            {" "}
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              mb={2}
            >
              {" "}
              <Typography fontWeight={600}>Live Preview</Typography>{" "}
              <Stack direction="row" alignItems="center" spacing={1}>
                {" "}
                <IconButton
                  size="small"
                  onClick={() => setPage(Math.max(1, page - 1))}
                >
                  {" "}
                  <NavigateBeforeIcon />{" "}
                </IconButton>{" "}
                <Typography variant="caption">{page} / 5</Typography>{" "}
                <IconButton
                  size="small"
                  onClick={() => setPage(Math.min(5, page + 1))}
                >
                  {" "}
                  <NavigateNextIcon />{" "}
                </IconButton>{" "}
              </Stack>{" "}
            </Stack>{" "}
            <Stack direction="row" spacing={2} mb={2}>
              {" "}
              <Avatar sx={{ bgcolor: "#6366F1" }}>EH</Avatar>{" "}
              <Box>
                {" "}
                <Typography fontWeight={600}>Emily Hasegawa</Typography>{" "}
                <Typography variant="caption" color="text.secondary">
                  {" "}
                  Principal, Chief Design Officer{" "}
                </Typography>{" "}
              </Box>{" "}
            </Stack>{" "}
            <Card variant="outlined" sx={{ p: 1.5 }}>
              {" "}
              <Typography variant="caption" color="text.secondary">
                {" "}
                EMAIL ADDRESS{" "}
              </Typography>{" "}
              <Stack direction="row" spacing={1} mt={0.5}>
                {" "}
                <EmailIcon fontSize="small" />{" "}
                <Typography variant="body2">
                  {" "}
                  Emily.Leadflux@outlook.com{" "}
                </Typography>{" "}
              </Stack>{" "}
            </Card>{" "}
          </Card>{" "}
        </Stack>{" "}
      </Grid>{" "}
    </Grid>
  );
}
