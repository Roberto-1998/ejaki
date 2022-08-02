import React from "react";
import { Container, Box, Paper } from "@mui/material";
import InitialTasks from "./components/InitialTasks.component";
import { ImageBanner } from "./components/ImageBanner.component";
import { Logo } from "./components/Logo.component";
import { EditButtons } from "./components/EditButtons.component";
import { Statistics } from "./components/Statistics.component";

const Overview = () => {
  return (
    <Container
      id="overview-content"
      maxWidth={false}
      sx={{ display: "flex", gap: " 20px" }}
    >
      <Box width="320px" paddingY={3} flex="1 0 auto">
        <InitialTasks />
      </Box>
      <Box
        width="100%"
        paddingY={3}
        display="flex"
        flexDirection="column"
        gap="10px"
      >
        <Paper
          sx={{
            borderRadius: "7px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "20px",
            gap: "20px",
          }}
        >
          <ImageBanner />
          <Box display="flex" justifyContent="space-between" width="92%">
            <Logo />
            <EditButtons />
          </Box>
          *catalogo
        </Paper>
        <Paper
          sx={{
            borderRadius: "7px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingY: "20px",
          }}
        >
          <Statistics />
        </Paper>
      </Box>
    </Container>
  );
};

export default Overview;
