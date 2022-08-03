import React, { useContext } from "react";
import { Box, Button, Icon, Skeleton, Typography } from "@mui/material";
import bannerBg from "../../../assets/banner-bg.png";
import gradientBg from "../../../assets/gradient-bg.svg";
import { Context } from "../../../Context";

export const Catalog = () => {
  const contextData = useContext(Context);

  return (
    <Box
      display="flex"
      gap={1}
      width="92%"
      maxWidth="900px"
      alignItems="center"
      flexBasis="66%"
      overflow="auto"
    >
      <Box width="378px" display="flex" flexDirection="column">
        <Box
          width="100%"
          height="186px"
          borderRadius="12px 12px 0 0"
          sx={{
            background: `url(${
              contextData?.catalogImg
                ? URL.createObjectURL(contextData?.catalogImg[0])
                : bannerBg
            })`,
            backgroundSize: "cover",
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
                  Imagen para el catálogo
                </Typography>
                <Icon sx={{ fontSize: "16px", color: "#031A1E90" }}>info</Icon>
              </Box>
              <Typography variant="body2" color="#031A1E90">
                Dimensiones óptimas 376 x 186 píxeles.
              </Typography>
            </Box>
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="raised-button-file-catalog"
              type="file"
              {...contextData?.register("catalogImg")}
            />
            <label htmlFor="raised-button-file-catalog">
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
          display="flex"
          flexDirection="column"
          gap={1}
          bgcolor="#e8e8e8"
          padding={2}
          borderRadius="0 0 12px 12px"
        >
          <Skeleton variant="rectangular" width={130} height={19} />
          <Skeleton variant="rectangular" width={275} height={15} />
          <Skeleton variant="rectangular" width={216} height={15} />
        </Box>
      </Box>

      <Box width="378px" display="flex" flexDirection="column">
        <Box
          width="100%"
          height="186px"
          borderRadius="12px 12px 0 0"
          bgcolor="#E8E8E860"
        />
        <Box
          display="flex"
          flexDirection="column"
          gap={1}
          bgcolor="#e8e8e8"
          padding={2}
          borderRadius="0 0 12px 12px"
        >
          <Skeleton variant="rectangular" width={130} height={19} />
          <Skeleton variant="rectangular" width={275} height={15} />
          <Skeleton variant="rectangular" width={216} height={15} />
        </Box>
      </Box>
      <Box width="378px" display="flex" flexDirection="column">
        <Box
          width="100%"
          height="186px"
          borderRadius="12px 12px 0 0"
          bgcolor="#E8E8E860"
        />
        <Box
          display="flex"
          flexDirection="column"
          gap={1}
          bgcolor="#e8e8e8"
          padding={2}
          borderRadius="0 0 12px 12px"
        >
          <Skeleton variant="rectangular" width={130} height={19} />
          <Skeleton variant="rectangular" width={275} height={15} />
          <Skeleton variant="rectangular" width={216} height={15} />
        </Box>
      </Box>
    </Box>
  );
};
