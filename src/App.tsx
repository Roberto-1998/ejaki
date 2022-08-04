import React from "react";
import Layout from "./pages/layout";
import GeneralInformationForm from "./pages/GeneralInformationForm";
import {
  Box,
  AppBar,
  Container,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  Button,
} from "@mui/material";
import Description from "./pages/description";
import Overview from "./pages/overview/Overview.component";
import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { display: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              ejaki
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { display: "flex", justifyContent: "flex-end" },
              }}
            >
              <Link to="/general-information">
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  General Information
                </Button>
              </Link>

              <Link to="/overview">
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  Overview
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Routes>
        <Route
          path="/"
          element={
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100vh"
            >
              <Typography variant="h1">Bienvenido!</Typography>
            </Box>
          }
        />
        <Route path="/overview" element={<Overview />} />
        <Route
          path="/general-information"
          element={
            <Box className="flex w-full flex-wrap md:w-[938.96px] md:h-[583.23px] md:m-[111px_auto_73.77px_auto]  shadow-[0_5px_10px_#18244E26]">
              <Layout />
              <Box className="flex flex-col">
                <GeneralInformationForm />
                {/*<Description />*/}
              </Box>
            </Box>
          }
        />
      </Routes>
    </>
  );
};

export default App;
