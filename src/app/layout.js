import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
// note from the mui udemy course:
// import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from "@mui/material/CssBaseline";
import { Container, Box } from "@mui/material";
import theme from "@/theme";
import Header from "../components/Header";
import Copyright from "../components/Copyright";

export default function RootLayout(props) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Header />
            <Container maxWidth="lg">
              <Box
                sx={{
                  my: 4,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: "100vh",
                }}
              >
                {props.children}
              </Box>
            </Container>
            <Copyright />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
