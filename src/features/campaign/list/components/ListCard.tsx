import { Box, Card, Chip, IconButton, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router";

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";

interface ListCardProps {
  name: string;
  contacts: number;
}

export default function ListCard({ name, contacts }: ListCardProps) {
  const navigate = useNavigate();

  const handleView = () => {
    navigate("/contact-details-page");
  };

  return (
    <Card
      sx={{
        p: 2,
        borderRadius: 3,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top Gradient Line */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background:
            "linear-gradient(90deg, #3B82F6 0%, #A855F7 50%, #EC4899 100%)",
        }}
      />

      {/* Header */}
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" spacing={1}>
          <Chip
            label="active"
            size="small"
            sx={{ bgcolor: "#DCFCE7", color: "#166534" }}
          />
          <Chip
            label="poor"
            size="small"
            sx={{ bgcolor: "#FEE2E2", color: "#991B1B" }}
          />
        </Stack>
      </Stack>

      {/* Title */}
      <Typography mt={2} fontWeight={700} fontSize={16}>
        {name}
      </Typography>

      <Typography variant="body2" color="text.secondary">
        No description provided
      </Typography>

      {/* Stats */}
      <Stack direction="row" spacing={2} mt={3}>
        <Box
          sx={{
            flex: 1,
            bgcolor: "#EEF2FF",
            borderRadius: 2,
            p: 2,
            textAlign: "center",
          }}
        >
          <Typography fontWeight={700} fontSize={22} color="#1E3A8A">
            {contacts}
          </Typography>
          <Typography variant="body2" color="#2563EB">
            Valid Contacts
          </Typography>
        </Box>

        <Box
          sx={{
            flex: 1,
            bgcolor: "#ECFDF5",
            borderRadius: 2,
            p: 2,
            textAlign: "center",
          }}
        >
          <Typography fontWeight={700} fontSize={22} color="#065F46">
            0%
          </Typography>
          <Typography variant="body2" color="#059669">
            Open Rate
          </Typography>
        </Box>
      </Stack>

      {/* Valid */}
      <Box
        sx={{
          mt: 2,
          p: 1.5,
          borderRadius: 2,
          border: "1px solid #E5E7EB",
          textAlign: "center",
        }}
      >
        <Typography fontWeight={600} color="#16A34A">
          {contacts}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Valid
        </Typography>
      </Box>

      {/* Footer */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mt={2}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          <AccessTimeOutlinedIcon fontSize="small" color="action" />
          <Typography variant="caption" color="text.secondary">
            0m ago
          </Typography>

          <InsertDriveFileOutlinedIcon fontSize="small" sx={{ ml: 1 }} />
          <Typography variant="caption" color="text.secondary">
            test.csv
          </Typography>
        </Stack>

        <Stack direction="row" spacing={1}>
          <IconButton size="small" onClick={handleView}>
            <VisibilityOutlinedIcon />
          </IconButton>

          <IconButton size="small">
            <DownloadOutlinedIcon />
          </IconButton>

          <IconButton size="small">
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Card>
  );
}
