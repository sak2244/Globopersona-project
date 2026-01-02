import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => (
  <Box sx={{ display: "flex", bgcolor: "#F9FAFB", minHeight: "100vh" }}>
    <Sidebar />
    <Box sx={{ flex: 1 }}>
      <Topbar />
      <Box sx={{ p: 4 }}>
        <Outlet />
      </Box>
    </Box>
  </Box>
);

export default DashboardLayout;
