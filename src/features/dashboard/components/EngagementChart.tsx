import { Card, Typography, Box } from "@mui/material";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Week 1", value: 20 },
  { name: "Week 2", value: 45 },
  { name: "Week 3", value: 38 },
  { name: "Week 4", value: 60 },
];

const EngagementChart: React.FC = () => (
  <Card sx={{ height: "100%", p: 2 }}>
    <Box display="flex" justifyContent="space-between" mb={2}>
      <Box>
        <Typography fontWeight={700}>Engagement Over Time</Typography>
        <Typography fontSize={13} color="text.secondary">
          Comparing Open rates vs Click rates
        </Typography>
      </Box>
      <Typography
        fontSize={13}
        color="primary.main"
        sx={{ cursor: "pointer", fontWeight: 500 }}
      >
        View Report →
      </Typography>
    </Box>

    <ResponsiveContainer width="100%" height={260}>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          vertical={false}
          stroke="#E5E7EB"
        />
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: "#6B7280" }}
        />
        <defs>
          <linearGradient id="engagementGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4F46E5" stopOpacity={0.3} />
            <stop offset="100%" stopColor="#4F46E5" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="value"
          stroke="#4F46E5"
          strokeWidth={3}
          fill="url(#engagementGradient)"
          dot={{ r: 5, stroke: "#4F46E5", strokeWidth: 2, fill: "#fff" }}
        />
      </AreaChart>
    </ResponsiveContainer>
  </Card>
);

export default EngagementChart;
