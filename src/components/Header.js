"use client";
import React from "react";
import { AppBar, Toolbar, Tabs, Tab } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import styles from "./Header.module.css";
import Button from "@mui/material/Button";
import Link from "next/link";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

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
  // console.log("VALUE: " + value);

  const handleChange = (event, nvalue) => {
    setValue(nvalue);
    console.log("newValue" + " " + nvalue);
    console.log("value" + " " + value);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
  }, []);

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
                value={0}
                component={Link}
                className={styles.tabs}
                label="Home"
                href="/"
              />
              <Tab
                value={1}
                component={Link}
                className={styles.tabs}
                label="About"
                href="/about"
              />
              <Tab
                value={2}
                component={Link}
                className={styles.tabs}
                onClick={handleClick}
                label="Services"
                href="/service"
              />
              <Tab
                value={3}
                component={Link}
                className={styles.tabs}
                label="Contact"
                href="/contact"
              />
            </Tabs>
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              href="/about"
            >
              About
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
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
