import React from "react";
import { Box, Button, Icon, IconButton, Typography } from "@mui/material";

export const EditButtons = () => {
  return (
    <Box display="flex" gap={1} height="36px" pt={2} sx={{flex:"1 0 auto"}}>
      <Button
        variant="contained"
        sx={{
          gap: 1,
          bgcolor: "#16a1ff",
          ":hover": {
            bgcolor: "#16a1dd",
          },
        }}
      >
        <Icon sx={{ fontSize: "20px" }}>edit_outlined</Icon>
        <Typography variant="button">Editar Tienda</Typography>
      </Button>
      <Button
        variant="contained"
        sx={{
          gap: 1,
          bgcolor: "#16a1ff",
          ":hover": {
            bgcolor: "#16a1dd",
          },
        }}
      >
        <Icon sx={{ fontSize: "20px" }}>storefront_outlined</Icon>
        <Typography variant="button">Ir a la Tienda</Typography>
      </Button>
      <IconButton
        sx={{
          borderRadius: "5px",
          boxShadow: "0px 0px 2px 0px rgba(0,0,0,0.75)",
        }}
      >
        <Icon sx={{ fontSize: "20px", color: "gray" }}>more_vert</Icon>
      </IconButton>
    </Box>
  );
};
