import React from "react";
import { Box, Button, Container, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  getStarted: {
    fontFamily: "Source Sans Pro",
    fontSize: "16px",
    fontWeight: 300,
    lineHeight: "20px",
    opacity: 0.8,
    marginBottom: "10px",
    textAlign: "center",

    "@media (min-width: 930px)": {
      fontSize: "18px",
      fontWeight: 300,
      lineHeight: "23px",
    },
  },
  getStartedTitle: {
    maxWidth: 611,
    fontFamily: "Source Sans Pro",
    fontSize: "35px",
    fontWeight: 900,
    lineHeight: "40px",
    marginBottom: "20px",
    textAlign: "center",

    "@media (min-width: 930px)": {
      fontSize: "60px",
      fontWeight: 900,
      lineHeight: "63px",
      marginBottom: "25px",
    },
  },
  getStartedText: {
    maxWidth: "612px",
    fontFamily: "Source Sans Pro",
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "27px",
    opacity: 0.8,
    marginBottom: "30px",
    textAlign: "center",

    "@media (min-width: 930px)": {
      fontSize: "21px",
      fontWeight: 400,
      lineHeight: "32px",
      marginBottom: "50px",
    },
  },
  emailgroup: {
    display: "flex",
    marginBottom: "100px",
    alignItems: "center",
    justifyContent: "center",

    "@media (min-width: 930px)": {
      marginBottom: "120px",
    },
  },
  emailinput: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "53px",
    width: "200px",
    background: "#ffffff",
    border: "solid 0.5px rgba(0,0,0,0.05)",
    boxShadow: "0px 6px 12px rgba(0,0,0,0.05)",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    "& input": {
      margin: 0,
      padding: "5px 0px 0px 10px",
    },
    "& span": {
      paddingLeft: 10,
      fontFamily: "Source Sans Pro",
      fontSize: "12px",
      fontWeight: 700,
      lineHeight: "15px",
      color: "#540cfa",
    },

    "@media (min-width: 930px)": {
      width: "310px",
    },
  },
  emailbutton: {
    "& button": {
      display: "flex",
      alignItems: "center",
      width: "143px",
      height: "53px",
      background: "#540cfa",
      boxShadow: "none",
      borderRadius: 0,
      color: "#ffff",
      textTransform: "none",
      margin: 0,
      justifyContent: "center",
      cursor: "pointer",
      "&:hover": {
        background: "#6d33f5",
      },
      "&:active": {
        background: "#540cfa",
      },
      "&:focus": {
        background: "#540cfa",
      },
    },
    "& span": {
      fontFamily: "Source Sans Pro",
      fontSize: "16px",
      lineHeight: "20px",
      fontWeight: 700,
    },
  },
  socialCopyRight: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  socialIcons: {
    display: "flex",
    marginBottom: "30px",

    "& img": {
      height: "25px",
      width: "auto",
      marginRight: "30px",
      opacity: 0.3,
    },
  },
  copyRight: {
    fontFamily: "Source Sans Pro",
    fontSize: "11px",
    fontWeight: 400,
    lineHeight: "14px",
    opacity: 0.3,
    marginBottom: "2em",

    "@media (min-width: 930px)": {
      fontSize: "12px",
      fontWeight: 600,
      lineHeight: "15px",
    },
  },
}));

export default function GetStarted() {
  const cls = useStyles();
  return (
    <Container className={cls.root}>
      <Box className={cls.getStarted}>Get Started</Box>
      <Box className={cls.getStartedTitle}>
        Start tracking your TV shows for free{" "}
      </Box>
      <Box className={cls.getStartedText}>
        In order to start tracking your TV shows, all you have to do is enter
        your email address. Everything else will be taken care of by us.All you
        have to do is sit back, relax and enjoy your TV shows.
      </Box>
      <Box className={cls.emailgroup}>
        <Box className={cls.emailinput}>
          <span>Email</span>
          <TextField
            variant="standard"
            placeholder="your@email.com"
            InputProps={{
              disableUnderline: true,
            }}
          />
        </Box>
        <Box className={cls.emailbutton}>
          <Button>Start tracking</Button>
        </Box>
      </Box>
      <Box className={cls.socialCopyRight}>
        <Box className={cls.socialIcons}>
          <img src={twitter} alt="twitter"></img>
          <img src={facebook} alt="facebook"></img>
          <img src={youtube} alt="youtube"></img>
        </Box>
        <Box className={cls.copyRight}>
          Copyright 2018 All rights reserved — Designed by Daniel Korpai
        </Box>
      </Box>
    </Container>
  );
}
