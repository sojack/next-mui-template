"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const yellow = "#F5A800";
const red = "#DB1B16";

const theme = createTheme({
  palette: {
    common: {
      yellow: `${yellow}`,
      red: `${red}`,
    },
    primary: {
      main: `${yellow}`,
    },
    secondary: {
      main: `${red}`,
    },
  },
  // palette: {
  //   mode: 'light',
  // },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
  },
});

export default theme;
