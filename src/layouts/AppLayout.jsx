import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "../components/header";

export function AppLayout() {
  return (
    <Box className="layout-root">
      <Header />
      <Container
      className="products"
      //   classes={{root: {
      //     maxWidth: "auto"
      //   }}}
      //   sx={{
      //     flexGrow: 1,
      //     py: 4,
      //     // maxWidth: "auto"
      //   }}
      >
        <Outlet />
      </Container>
    </Box>
  );
}
