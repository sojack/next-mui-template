"use client";
import React from "react";
import { AppBar, Toolbar, Tabs, Tab } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import styles from "./Header.module.css";
import Button from "@mui/material/Button";
import Link from "next/link";

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

function Header() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log("set value");
  };

  React.useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
      console.log("effect 0");
    } else if (window.location.pathname === "/about" && value !== 1) {
      setValue(1);
      console.log("effect 1");
    } else if (window.location.pathname === "/service" && value !== 2) {
      setValue(2);
      console.log("effect 2");
    } else if (window.location.pathname === "/contact" && value !== 3) {
      setValue(3);
      console.log("effect 3");
    }
  }, [value]);

  return (
    <>
      <ElevationScroll>
        <AppBar color="primary" sx={{ alignItems: "center" }}>
          <Toolbar
            className={styles.toolbar}
            sx={{ width: "100%", maxWidth: 1200 }}
          >
            <div>
              {`<`}Logo{`>`}
            </div>
            <Tabs
              value={value}
              onChange={handleChange}
              className={styles.tab}
              indicatorColor="secondary"
              aria-label="basic tabs example"
            >
              <Tab
                component={Link}
                className={styles.tabs}
                label="Home"
                href="/"
              />
              <Tab
                component={Link}
                className={styles.tabs}
                label="About"
                href="/about"
              />
              <Tab
                component={Link}
                className={styles.tabs}
                label="Services"
                href="/service"
              />
              <Tab
                component={Link}
                className={styles.tabs}
                label="Contact"
                href="/contact"
              />
            </Tabs>
            <Button variant="contained" color="secondary">
              map
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div
        style={{
          minHeight: 65,
        }}
      />
    </>
  );
}

export default Header;
