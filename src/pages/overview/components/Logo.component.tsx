import { useState } from "react";
import { Box, Button, Icon, Link, Typography } from "@mui/material";
import bannerBg from "../../../assets/banner-bg.png";

export const Logo = () => {
  const [clampText, setClampText] = useState(true);
  return (
    <Box display="flex" gap="10px">
      <Box
        width="80px"
        height="80px"
        display="flex"
        alignItems="flex-end"
        borderRadius="7px"
        sx={{
          background: `url(${bannerBg})`,
          backgroundPositionY: "230px",
          backgroundPositionX: "150px",
        }}
      >
        <input
          accept="image/*"
          style={{ display: "none" }}
          id="raised-button-file-logo"
          type="file"
        />
        <label htmlFor="raised-button-file-logo">
          <Button
            component="span"
            sx={{
              color: "white",
            bgcolor: "#031A1E90",
            ":hover": {
              bgcolor: "#031A1E",
            },
            height: "32px",
            borderRadius: "0 0 7px 7px",
            }}
          >
            <Icon>upload</Icon> Subir
          </Button>
        </label>
      </Box>
      <Box display="flex" flexDirection="column" py={1} gap={1}>
        <Box>
          <Typography variant="h6" fontWeight="bold">
            Bazar Qva
          </Typography>
          <Link
            href=""
            sx={{ fontSize: "12px", textDecoration: "none", color: "16a1ff" }}
          >
            bazarqva.ejaki.cu
          </Link>
        </Box>
        <Box position="relative" width="80%">
          <Typography
            variant="body2"
            color="#031a1e90"
            sx={{
              overflow: clampText ? "hidden" : "",
              textOverflow: clampText ? "ellipsis" : "",
              display: clampText ? "-webkit-box" : "",
              WebkitLineClamp: clampText ? "2" : "",
              WebkitBoxOrient: clampText ? "vertical" : "",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod ter incididunt ut labore et dol ipsum dolor sit amet,
            consectetur...
          </Typography>
          <Link
            onClick={() => setClampText((prev) => !prev)}
            sx={{
              position: "absolute",
              bottom: "-13px",
              right: "0px",
              color: "#000",
              fontSize: "12px",
              padding: "0",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              textDecorationColor: "#000",
            }}
          >
            {clampText ? "Mostrar más" : "Mostrar menos"}
            <Icon sx={{ fontSize: "15px" }}>keyboard_arrow_down</Icon>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
