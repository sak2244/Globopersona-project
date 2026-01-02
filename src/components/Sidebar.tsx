import React from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EmailIcon from "@mui/icons-material/Email";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => {
  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
    { text: "Campaigns", icon: <EmailIcon />, path: "/campaigns" },
  ];

  return (
    <Box
      sx={{
        width: 240,
        height: "100vh",
        bgcolor: "#fff",
        borderRight: "1px solid #eee",
        p: 2,
      }}
    >
      <Typography fontWeight={700} mb={3}>
        Marketing Inc.
      </Typography>
      <Typography fontSize={12} color="text.secondary" mb={1}>
        MAIN MENU
      </Typography>

      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.text}
            component={NavLink}
            to={item.path}
            sx={{
              "&.active": {
                bgcolor: "#EEF2FF",
                borderRadius: 2,
                color: "#4F46E5",
              },
            }}
          >
            <ListItemIcon sx={{ color: "inherit" }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
