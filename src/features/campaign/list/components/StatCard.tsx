import { Card, Chip, Typography } from "@mui/material";

const StatCard = ({ title, value, subtitle, color }: any) => (
  <Card sx={{ p: 2 }}>
    <Typography variant="body2" color="text.secondary">
      {title}
    </Typography>
    <Typography variant="h5" fontWeight={700} mt={0.5}>
      {value}
    </Typography>
    <Chip
      label={subtitle}
      size="small"
      sx={{ mt: 1, bgcolor: color, color: "#fff" }}
    />
  </Card>
);

export default StatCard;
