import React from "react";
import { Box } from "@mui/system";
import bannerBg from "../../../assets/banner-bg.png";
import gradientBg from "../../../assets/gradient-bg.svg";
import { Button, Icon, Link, Typography } from "@mui/material";

export const ImageBanner = () => {
  return (
    <Box width="92%" height="285px" display="flex" flexDirection="column">
      <Box
        borderRadius="12px 12px 0 0"
        height="90%"
        sx={{ background: `url(${bannerBg})` }}
      >
        <Box
          display="flex"
          flexDirection="column"
          width="100%"
          height="100%"
          justifyContent="center"
          alignItems="center"
          gap={3}
          paddingTop={3}
          sx={{ background: `url(${gradientBg})` }}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Box display="flex" alignItems="center" gap={1}>
              <Typography variant="body1" fontWeight="bold">
                Imagen de banner
              </Typography>
              <Icon sx={{ fontSize: "16px", color: "#031A1E90" }}>info</Icon>
            </Box>
            <Typography variant="body2" color="#031A1E90">
              Dimensiones óptimas 1440 x 300 píxeles.
            </Typography>
          </Box>
          <Button
            sx={{
              color: "white",
              bgcolor: "#031A1E90",
              ":hover": {
                bgcolor: "#031A1E",
              },
            }}
          >
            <Icon>upload</Icon>SUBIR IMAGEN
          </Button>
        </Box>
      </Box>
      <Box
        borderRadius="0 0 12px 12px"
        bgcolor="#000"
        width="100%"
        height="10%"
        display="flex"
        justifyContent="space-between"
        color="white"
        paddingX={2}
        boxSizing="border-box"
      >
        <Link href="" display="flex" alignItems="center" gap={1}>
          <Icon sx={{ fontSize: "14px", color: "white" }}>share_outlined</Icon>
          <Typography
            fontSize="12px"
            sx={{ textDecoration: "underline", color: "white" }}
          >
            Añadir redes sociales
          </Typography>
        </Link>
        <Link href="" display="flex" alignItems="center" gap={1}>
          <Icon sx={{ fontSize: "14px", color: "white" }}>
            palette_outlined
          </Icon>
          <Typography
            fontSize="12px"
            sx={{ textDecoration: "underline", color: "white" }}
          >
            Editar tema
          </Typography>
        </Link>
        <Link href="" display="flex" alignItems="center" gap={1}>
          <Icon sx={{ fontSize: "14px", color: "white" }}>
            recent_actors_outlined
          </Icon>
          <Typography
            fontSize="12px"
            sx={{ textDecoration: "underline", color: "white" }}
          >
            Añadir datos de contacto
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};
