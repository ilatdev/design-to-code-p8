import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Box,
  Button,
  Container,
  Link,
  Toolbar,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "0px 1px 5px rgba(0,0,0,0.1)",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
  },
  brand: {
    fontFamily: "Source Sans Pro, sans-serif",
    fontSize: 18,
    fontWeight: 600,
  },
  links: {
    fontFamily: `Source Sans Pro, sans-serif`,
    fontSize: 14,
    lineHeight: "18px",

    "& a:not(:last-child)": {
      marginRight: "60px",
    },
    "@media (max-width: 768px)": {
      display: "none",
    },
  },
  start: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "& > *": {
      fontFamily: `Source Sans Pro, sans-serif`,
      fontSize: 14,
      fontWeight: 700,
      textAlign: "center",
    },
    "& button": {
      marginLeft: "30px",
      textTransform: "none",
      fontWeight: 600,
      backgroundColor: "#540cfa",
      color: "#ffff",
    },
  },
}));

export default function ButtonAppBar() {
  const cls = useStyles();

  return (
    <AppBar color="transparent" position="static" className={cls.root}>
      <Container>
        <Toolbar className={cls.nav} disableGutters>
          <Box className={cls.brand}>
            <span>Show</span>
            <span style={{ color: "#540cfa" }}>Trackr</span>
          </Box>
          <Box className={cls.links}>
            <Link href="#" color="inherit">
              Features
            </Link>
            <Link href="#" color="inherit">
              Community
            </Link>
            <Link href="#" color="inherit">
              Support
            </Link>
          </Box>
          <Box className={cls.start}>
            <Link href="#" color="inherit" className={cls.login}>
              Log in
            </Link>
            <Button variant="contained" color="primary">
              Get started
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
