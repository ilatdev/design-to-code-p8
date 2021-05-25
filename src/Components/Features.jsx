import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Link } from "@material-ui/core";

import PlayIcon from "../assets/playicon.svg";
import MlearningIcon from "../assets/mlearning.svg";
import NotificationIcon from "../assets/notificationicon.svg";

const useStyles = makeStyles((theme) => ({
  featuresroot: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "30px",

    "@media (min-width: 930px)": {
      alignItems: "center",
      textAlign: "center",
    },
  },
  features: {
    opacity: 0.8,
    fontFamily: "Source Sans Pro",
    fontSize: "16px",
    fontWeight: 300,
    lineHeight: "20px",
    marginBottom: "10px",

    "@media (min-width: 930px)": {
      fontSize: "18px",
      fontWeight: 300,
      lineHeight: "23px",
    },
  },
  featurestitle: {
    fontFamily: "Source Sans Pro",
    fontSize: "35px",
    fontWeight: 900,
    lineHeight: "40px",
    marginBottom: "20px",

    "@media (min-width: 930px)": {
      maxWidth: 610,
      fontSize: "60px",
      fontWeight: 900,
      lineHeight: "63px",
    },
  },
  featurestext: {
    marginBottom: "50px",
    opacity: 0.8,
    fontFamily: "Source Sans Pro",
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "27px",

    "@media (min-width: 930px)": {
      maxWidth: 611,
      fontSize: "21px",
      fontWeight: 400,
      lineHeight: "32px",
    },
  },
  cardwrapper: {
    display: "flex",
    flexDirection: "column",

    "@media (min-width: 930px)": {
      flexDirection: "row",
    },
  },
  fcard: {
    marginBottom: "50px",

    "@media (min-width: 930px)": {
      maxWidth: 300,
      margin: 50,
    },
  },
  fcardicon: {
    marginBottom: "14px",
  },
  fcardtitle: {
    marginBottom: "8px",
    fontFamily: "Source Sans Pro",
    fontSize: "18px",
    fontWeight: 700,
    lineHeight: "23px",
  },
  fcardtext: {
    marginBottom: "10px",
    fontFamily: "Source Sans Pro",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
    opacity: 0.7,
  },
  fcardlink: {
    display: "flex",
    alignItems: "center",
    color: "#540cfa",
    fontFamily: "Source Sans Pro",
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: "24px",
    textAlign: "center",

    "@media (min-width: 930px)": {
      justifyContent: "center",
    },
  },
  linkicon: {
    marginLeft: "5px",
    backgroundColor: "#FFFF",
    width: "7px",
    height: "7px",
    borderRight: "2px solid #540cfa",
    borderBottom: "2px solid #540cfa",
    transform: "rotate(-45.00004deg)",
  },
}));

export default function Features() {
  const cls = useStyles();
  return (
    <Container className={cls.featuresroot}>
      <Box className={cls.features}>Features</Box>
      <Box className={cls.featurestitle}>
        Built and customized for your habits
      </Box>
      <Box className={cls.featurestext}>
        ShowTrackr’s built-in machine learning and context-aware features
        guarantee that all the notifications and recommendations are always
        delivered to you in the perfect moment.
      </Box>
      <Box className={cls.cardwrapper}>
        <Box className={cls.fcard}>
          <Box className={cls.fcardicon}>
            <img src={PlayIcon} alt="playicon" />
          </Box>
          <Box className={cls.fcardtitle}>Automated tracking</Box>
          <Box className={cls.fcardtext}>
            Track your favorite shows automatically without switching between
            apps.
          </Box>
          <Box component={Link} href="#" className={cls.fcardlink}>
            <Box>Learn more</Box>
            <Box className={cls.linkicon} />
          </Box>
        </Box>
        <Box className={cls.fcard}>
          <Box className={cls.fcardicon}>
            <img src={MlearningIcon} alt="machinelearningicon" />
          </Box>
          <Box className={cls.fcardtitle}>Machine learning</Box>
          <Box className={cls.fcardtext}>
            Get recommendations like never before, which are truly customized
            for your taste.
          </Box>
          <Box component={Link} href="#" className={cls.fcardlink}>
            Learn more
            <Box className={cls.linkicon} />
          </Box>
        </Box>
        <Box className={cls.fcard}>
          <Box className={cls.fcardicon}>
            <img src={NotificationIcon} alt="notificationicon" />
          </Box>
          <Box className={cls.fcardtitle}>Smart notifications</Box>
          <Box className={cls.fcardtext}>
            Receive smart notifications exactly at the right moments when you
            need them.
          </Box>
          <Box component={Link} href="#" className={cls.fcardlink}>
            Learn more
            <Box className={cls.linkicon} />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
