import { Box, Grid, Typography } from "@mui/material";
import StatCard from "./components/StatCard";
import DeviceCard from "./components/DeviceCard";
import EngagementChart from "./components/EngagementChart";

import SendIcon from "@mui/icons-material/Send";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MouseIcon from "@mui/icons-material/Mouse";
import PersonOffIcon from "@mui/icons-material/PersonOff";

const Dashboard = () => {
  return (
    <Box>
      {/* Overview */}
      <Typography fontSize={24} fontWeight={700}>
        Overview
      </Typography>
      <Typography fontSize={14} color="text.secondary" mb={3}>
        Welcome back! Here's your campaign performance at a glance.
      </Typography>

      {/* Stats */}
      <Grid container spacing={2} mb={3}>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <StatCard
            title="TOTAL SENT"
            value="12,450"
            change="+5.0%"
            icon={<SendIcon />}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <StatCard
            title="OPEN RATE"
            value="24.2%"
            change="+1.2%"
            icon={<MailOutlineIcon />}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <StatCard
            title="CLICK RATE"
            value="3.1%"
            change="0.0%"
            icon={<MouseIcon />}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <StatCard
            title="UNSUBSCRIBES"
            value="142"
            change="-2.3%"
            isPositive={false}
            icon={<PersonOffIcon />}
          />
        </Grid>
      </Grid>

      {/* Chart + Device */}
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6, md: 8 }}>
          <EngagementChart />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <DeviceCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
