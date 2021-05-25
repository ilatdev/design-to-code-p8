import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: "relative",
    overflow: "hidden",
  },
  bgrightblue: {
    position: "absolute",
    width: "300px",
    height: "300px",
    top: "550px",
    left: "65%",
    zIndex: -1,
    opacity: 0.9,
    transform: "rotate(45deg)",
    background: "linear-gradient(-45deg, #1C0FD7, #9C09DB) ",
    boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
    borderRadius: "2em",

    "@media (min-width: 768px)": {
      width: "600px",
      height: "600px",
      top: "-200px",
      left: "80%",
    },
  },
  bgrightorange: {
    position: "absolute",
    width: "300px",
    height: "300px",
    top: "550px",
    left: "63%",
    zIndex: -1,
    opacity: 0.9,
    background: "linear-gradient(-45deg, #FC3832, #F2C314)",
    boxShadow: "0px 4px 8px rgba(0,0,0,0.15)",
    transform: "rotate(65deg)",
    borderRadius: "2em",

    "@media (min-width: 768px)": {
      width: "600px",
      height: "600px",
      top: "-200px",
      left: "80%",
    },
  },
  bgleftblue: {
    position: "absolute",
    width: "150px",
    height: "150px",
    top: "1010px",
    left: "-100px",
    opacity: 0.9,
    zIndex: -1,
    background: `linear-gradient(135deg, #32FBFC, #3214F2)`,
    boxShadow: `0px 4px 8px rgba(0,0,0,0.1)`,
    transform: `rotate(45deg)`,
    borderRadius: "2rem",

    "@media (min-width: 768px)": {
      width: "300px",
      height: "300px",
      top: "60vh",
      left: "-250px",
    },
  },
}));

export default function BackgroundSvg({ children }) {
  const cls = useStyles();
  return (
    <Box className={cls.wrapper}>
      <Box className={cls.bgrightorange} />
      <Box className={cls.bgrightblue} />
      <Box className={cls.bgleftblue} />
      {children}
    </Box>
  );
}
