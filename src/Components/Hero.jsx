import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Container, TextField } from "@material-ui/core";
import StoresBanner from "../assets/stores.svg";
import IphoneSVG from "../assets/iphone-x-mockup.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: "90px",

    "@media (min-width: 768px)": {
      flexDirection: "row",
    },
  },
  heroleft: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    flexGrow: 1,

    "@media (max-width: 768px)": {
      alignItems: "center",
    },
  },
  heroright: {
    display: "flex",
    justifyContent: "center",
    flexGrow: 2,
    marginTop: "80px",
  },
  herolefttitle: {
    maxWidth: "343px",
    fontFamily: "Source Sans Pro",
    fontWeight: 900,
    fontSize: "42px",
    lineHeight: "48px",
    marginBottom: "20px",
    marginTop: "50px",

    "@media (min-width: 930px)": {
      maxWidth: "570px",
      fontSize: "70px",
      lineHeight: "72px",
    },
  },
  herolefttext: {
    width: "346px",
    fontFamily: "Source Sans Pro",
    fontSize: "18px",
    fontWeight: 300,
    lineHeight: "27px",
    marginBottom: "30px",

    "@media (min-width: 930px)": {
      width: "471px",
      fontSize: "21px",
      fontWeight: 300,
      lineHeight: "32px",
    },
  },
  emailgroup: {
    display: "inline-flex",
    marginBottom: "40px",
    alignItems: "center",

    "@media (min-width: 930px)": {
      marginBottom: "100px",
    },
  },
  emailinput: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "53px",
    width: "210px",
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
      width: "141px",
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
  imgstores: {
    maxWidth: "343px",
    height: "auto",
    marginBottom: "43px",

    "@media (min-width: 930px)": {
      maxWidth: "421px",
    },
  },
  iphonemock: {
    "@media (min-width: 1000px)": {
      width: "330px",
      height: "auto",
    },
  },
}));

export default function Hero() {
  const cls = useStyles();
  return (
    <Container className={cls.root}>
      <Box className={cls.heroleft}>
        <Box className={cls.herolefttitle}>Track your shows automatically</Box>
        <Box className={cls.herolefttext}>
          With ShowTrackr you can track your favorite TV shows automatically, so
          you never loose track of your TV shows ever again.🍿
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
        <Box>
          <img
            src={StoresBanner}
            alt="stores-banner"
            className={cls.imgstores}
          />
        </Box>
      </Box>
      <Box className={cls.heroright}>
        <Box>
          <img src={IphoneSVG} alt="iphone-app" className={cls.iphonemock} />
        </Box>
      </Box>
    </Container>
  );
}
