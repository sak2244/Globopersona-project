import {
  Card,
  CardContent,
  Typography,
  Box,
  LinearProgress,
} from "@mui/material";

const devices = [
  { name: "Mobile", value: 65, color: "#7c4dff" },
  { name: "Desktop", value: 25, color: "#9c27b0" },
  { name: "Tablet", value: 10, color: "#ff9800" },
];

const DeviceCard: React.FC = () => (
  <Card sx={{ height: "100%" }}>
    <CardContent
      sx={{ display: "flex", flexDirection: "column", height: "100%" }}
    >
      <Box mb={2}>
        <Typography fontWeight={700}>Device Breakdown</Typography>
        <Typography fontSize={13} color="text.secondary">
          Platform distribution
        </Typography>
      </Box>

      <Box flexGrow={1}>
        {devices.map((device) => (
          <Box key={device.name} mb={2}>
            <Box display="flex" justifyContent="space-between" mb={0.5}>
              <Typography fontSize={14}>{device.name}</Typography>
              <Typography fontSize={14} fontWeight={600}>
                {device.value}%
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={device.value}
              sx={{
                height: 8,
                borderRadius: 4,
                backgroundColor: "#E5E7EB",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: device.color,
                  borderRadius: 4,
                },
              }}
            />
          </Box>
        ))}
      </Box>
    </CardContent>
  </Card>
);

export default DeviceCard;
