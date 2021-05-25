import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container } from "@material-ui/core";

import easytouse from "../assets/easytousebg.svg";
import customdashboard from "../assets/customdashboard.svg";
import autoday from "../assets/autodayandnight.svg";
import integratedchat from "../assets/integratedchat.svg";
import iphone from "../assets/iphone-x-mockup.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    overflowX: "hidden",
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: "70px",
  },
  leftEasyToUse: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  rightEasyToUse: {
    display: "flex",
    justifyContent: "center",
    flexGrow: 1,
    marginTop: "40px",

    "@media (min-width: 1400px)": {
      justifyContent: "normal",
      paddingTop: "60px",
      paddingLeft: "100px",
      marginTop: "95px",
    },
  },
  easytitle: {
    maxWidth: 460,
    fontFamily: "Source Sans Pro, sans-serif",
    fontSize: "32px",
    fontWeight: 700,
    lineHeight: "38px",
    marginBottom: "20px",

    "@media (min-width: 930px)": {
      fontSize: "46px",
      lineHeight: "50px",
    },
  },
  easytext: {
    maxWidth: 460,
    fontFamily: "Source Sans Pro, sans-serif",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
    marginBottom: "30px",

    "@media (min-width: 930px)": {
      fontSize: "18px",
      lineHeight: "28px",
      marginBottom: "40px",
    },
  },
  featureoption: {
    display: "flex",
    alignItems: "center",
    width: "343px",
    height: "54px",
    padding: "17px",
    marginBottom: "15px",
    opacity: 0.5,
  },
  featureoone: {
    display: "flex",
    alignItems: "center",
    width: "343px",
    height: "54px",
    padding: "17px",
    marginBottom: "15px",
    background: "#ffffff",
    boxShadow: "0px 1px 3px rgba(0,0,0,0.1)",
  },
  featuretext: {
    fontFamily: "Source Sans Pro",
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: "20px",
  },
  featureicon: {
    width: "20px",
    height: "20px",
    marginRight: "17px",
  },
  backgroundRight: {
    display: "none",
    position: "absolute",
    zIndex: -1,
    right: "-9%",
    boxShadow: `0px 8px 20px rgba(0,0,0,0.1)`,

    "@media (min-width: 1400px)": {
      display: "inline",
    },
  },
}));

export default function EasyToUse() {
  const cls = useStyles();
  return (
    <Box className={cls.root}>
      <Box className={cls.backgroundRight}>
        <img src={easytouse} alt="easytousebg" />
      </Box>
      <Container className={cls.wrapper}>
        <Box className={cls.leftEasyToUse}>
          <Box className={cls.easytitle}>
            Easy-to-use interfaces on every platform
          </Box>
          <Box className={cls.easytext}>
            Since most of our features work in a completely automated way, you
            will mainly use our apps to discover new TV shows recommended for
            you and discuss the most interesting episodes with like-minded
            people.
          </Box>
          <Box className={cls.featureoone}>
            <Box className={cls.featureicon}>
              <img src={customdashboard} alt="customdashboard" />
            </Box>
            <Box className={cls.featuretext}>Customized Dashboard</Box>
          </Box>
          <Box className={cls.featureoption}>
            <Box className={cls.featureicon}>
              <img src={autoday} alt="autodayandnight" />
            </Box>
            <Box className={cls.featuretext}>Automatic Day & Night Modes</Box>
          </Box>
          <Box className={cls.featureoption}>
            <Box className={cls.featureicon}>
              <img src={integratedchat} alt="integratedchat" />
            </Box>
            <Box className={cls.featuretext}>Customized Dashboard</Box>
          </Box>
        </Box>
        <Box className={cls.rightEasyToUse}>
          <img src={iphone} alt="iphone-app" />
        </Box>
      </Container>
    </Box>
  );
}
