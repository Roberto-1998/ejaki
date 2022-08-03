import React, { useContext } from "react";
import { Box } from "@mui/system";
import bannerBg from "../../../assets/banner-bg.png";
import gradientBg from "../../../assets/gradient-bg.svg";
import { Button, Icon, Link, Typography } from "@mui/material";
import { Context } from "../../../Context";

export const ImageBanner = () => {
  const contextData = useContext(Context);
  const links = [
    {
      href: "",
      icon: "share_outlined",
      text: "Añadir redes sociales",
    },
    {
      href: "",
      icon: "palette_outlined",
      text: "Editar tema",
    },
    {
      href: "",
      icon: "recent_actors_outlined",
      text: "Añadir datos de contacto",
    },
  ];

  return (
    <Box width="92%" height="285px" display="flex" flexDirection="column">
      <Box
        borderRadius="12px 12px 0 0"
        height="90%"
        sx={{
          background: `url(${
            contextData?.bannerImg
              ? URL.createObjectURL(contextData?.bannerImg[0])
              : bannerBg
          })`,
        }}
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
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="raised-button-file-banner"
            type="file"
            {...contextData?.register("bannerImg")}
          />
          <label htmlFor="raised-button-file-banner">
            <Button
              component="span"
              sx={{
                color: "white",
                bgcolor: "#031A1E90",
                ":hover": {
                  bgcolor: "#031A1E",
                },
              }}
            >
              <Icon>upload</Icon> Subir Imagen
            </Button>
          </label>
        </Box>
      </Box>
      <Box
        borderRadius="0 0 12px 12px"
        bgcolor="#000"
        width="100%"
        height={{ xs: "15%", lg: "10%" }}
        display="flex"
        justifyContent="space-between"
        color="white"
        paddingX={2}
        boxSizing="border-box"
      >
        {links.map((el, index) => (
          <Link
            key={index}
            href={el.href}
            display="flex"
            alignItems="center"
            gap={1}
          >
            <Icon sx={{ fontSize:{xs:"18px", lg:"14px"} , color: "white" }}>{el.icon}</Icon>
            <Typography
              fontSize="12px"
              sx={{
                textDecoration: "underline",
                color: "white",
                display: { xs: "none", lg: "flex" },
              }}
            >
              {el.text}
            </Typography>
          </Link>
        ))}
      </Box>
    </Box>
  );
};
