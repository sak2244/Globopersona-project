import {
  Box,
  InputBase,
  Button,
  Avatar,
  IconButton,
  Badge,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AddIcon from "@mui/icons-material/Add";

const Topbar = () => (
  <Box
    sx={{
      height: 64,
      px: 3,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      bgcolor: "#fff",
      borderBottom: "1px solid #EEF2F7",
    }}
  >
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        bgcolor: "#F5F7FA",
        px: 2,
        py: 1,
        borderRadius: 3,
        width: 340,
      }}
    >
      <SearchIcon fontSize="small" sx={{ color: "#9CA3AF" }} />
      <InputBase
        placeholder="Search campaigns, audience…"
        sx={{ ml: 1, fontSize: 14, width: "100%" }}
      />
    </Box>

    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        sx={{
          bgcolor: "#4F46E5",
          borderRadius: 3,
          textTransform: "none",
          fontSize: 14,
          fontWeight: 600,
          px: 2.5,
          height: 40,
        }}
      >
        Create
      </Button>

      <IconButton>
        <Badge badgeContent={3} color="error">
          <NotificationsNoneIcon />
        </Badge>
      </IconButton>

      <Avatar sx={{ width: 36, height: 36 }} />
    </Box>
  </Box>
);

export default Topbar;
