"use client";
import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
// import { createStyled } from "@mui/system";
// import { styled } from '@mui/system';

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

// const useStyles = createStyled((theme) => ({
//   toolbarMargin: {
//     ...theme.mixins.toolbar,
//   },
// }));

function Header() {
  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Toolbar>LL</Toolbar>
        </AppBar>
      </ElevationScroll>
      <div
        sx={{
          display: "block",
          height: 200,
          border: 10,
        }}
      >
        asd
      </div>
    </>
  );
}

export default Header;
