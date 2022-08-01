import React from "react";
import { Container, Box } from "@mui/material";
import InitialTasks from "./components/InitialTasks.component";

const Overview = () => {
  return (
    <Container id="overview-content" maxWidth={false} sx={{ display: "flex" }}>
      <Box width="320px" paddingY={3}>
        <InitialTasks />
      </Box>
      <Box></Box>
    </Container>
  );
};

export default Overview;
