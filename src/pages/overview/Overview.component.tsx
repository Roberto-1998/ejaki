import React, { useContext } from "react";
import { Container, Box, Paper, Button } from "@mui/material";
import InitialTasks from "./components/InitialTasks.component";
import { ImageBanner } from "./components/ImageBanner.component";
import { Logo } from "./components/Logo.component";
import { EditButtons } from "./components/EditButtons.component";
import { Statistics } from "./components/Statistics.component";
import { Catalog } from "./components/Catalog.component";
import { Context } from "../../Context";

const Overview = () => {
  return (
    <Container
      id="overview-content"
      maxWidth={false}
      sx={{
        display: "flex",
        gap: { xs: "0", lg: "20px" },
        flexDirection: { xs: "column", lg: "row" },
        alignItems: { xs: "center", lg: "unset" },
      }}
    >
      <Box maxWidth="320px" paddingY={3} flex="1 0 auto">
        <InitialTasks />
      </Box>
      <Box
        width="100%"
        paddingY={{ xs: 1, lg: 3 }}
        display="flex"
        flexDirection="column"
        gap="10px"
      >
        <form>
          <Paper
            sx={{
              borderRadius: "7px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "20px 0",
              gap: { xs: "30px", lg: "20px" },
            }}
          >
            <ImageBanner />
            <Box
              display="flex"
              justifyContent={{ lg: "space-between" }}
              width="92%"
              flexDirection={{ xs: "column", lg: "row" }}
              gap={{ xs: 2, lg: "unset" }}
            >
              <Logo />
              <EditButtons />
            </Box>
            <Catalog />
          </Paper>
        </form>
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
