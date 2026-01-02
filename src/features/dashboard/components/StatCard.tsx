import { Card, Typography, Box, Stack } from "@mui/material";
import type React from "react";

interface Props {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  isPositive?: boolean;
}

const StatCard = ({ title, value, change, icon, isPositive = true }: Props) => {
  return (
    <Card
      sx={{
        boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
        transition: "all 0.2s ease",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: "0 12px 32px rgba(0,0,0,0.08)",
        },
      }}
    >
      {/* Top Section */}
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography
            fontSize={12}
            fontWeight={600}
            letterSpacing={0.5}
            color="text.secondary"
            textTransform="uppercase"
          >
            {title}
          </Typography>

          <Typography fontSize={28} fontWeight={700} mt={0.5}>
            {value}
          </Typography>
        </Box>

        {/* Icon */}
        <Box
          sx={{
            width: 44,
            height: 44,
            bgcolor: "#EEF2FF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "& svg": {
              fontSize: 22,
              color: "#4F46E5",
            },
          }}
        >
          {icon}
        </Box>
      </Stack>

      {/* Bottom Section */}
      <Stack direction="row" spacing={1} mt={2} alignItems="center">
        <Box
          sx={{
            bgcolor: isPositive ? "#DCFCE7" : "#FEE2E2",
            color: isPositive ? "#16A34A" : "#DC2626",
            px: 1.5,
            py: 0.4,

            fontSize: 12,
            fontWeight: 600,
          }}
        >
          {change}
        </Box>

        <Typography fontSize={12} color="text.secondary">
          vs last period
        </Typography>
      </Stack>
    </Card>
  );
};

export default StatCard;
