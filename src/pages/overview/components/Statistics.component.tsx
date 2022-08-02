import React from "react";
import { Box, Icon, Typography } from "@mui/material";

export const Statistics = () => {
  const statistics = [
    { name: "Estadística 1", value: 123, isPositive: true },
    { name: "Estadística 2", value: 42, isPositive: true },
    { name: "Estadística 3", value: 9, isPositive: true },
    { name: "Estadística 4", value: 412, isPositive: false },
  ];
  return (
    <Box display="flex" width="100%" justifyContent="space-between" px={5}>
      {statistics.map((data, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 0.5,
            alignItems: "center",
          }}
        >
          <Typography variant="body2">{data.name}</Typography>
          <Typography variant="h4" fontWeight="bold">
            {data.value}
          </Typography>
          <Typography
            variant="body2"
            display="flex"
            alignItems="center"
            color={`${data.isPositive ? "#009558" : "#DB6307"}`}
          >
            <Icon>{data.isPositive ? "arrow_drop_up" : "arrow_drop_down"}</Icon>
            {`Valor ${data.isPositive ? "positivo" : "negativo"}`}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};
