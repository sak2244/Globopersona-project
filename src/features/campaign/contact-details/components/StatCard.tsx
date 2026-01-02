import { Card, Chip, Typography } from "@mui/material";

const StatCard = ({ label, value, color }: any) => (
  <Card sx={{ flex: 1, p: 2, textAlign: "center" }}>
    <Typography variant="body2" color="text.secondary">
      {label}
    </Typography>
    <Typography variant="h5" fontWeight={700} mt={0.5}>
      {value}
    </Typography>
    <Chip
      label={label.toUpperCase()}
      size="small"
      sx={{ mt: 1, bgcolor: color, color: "#fff" }}
    />
  </Card>
);

export default StatCard;
