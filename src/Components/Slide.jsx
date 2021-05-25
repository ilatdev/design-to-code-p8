import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

import blackmirror from "../assets/blackmirror.jpg";
import strangerthings from "../assets/strangerthings.jpg";
import westworld from "../assets/westworld.jpg";
import houseofcards from "../assets/houseofcards.jpg";
import gameofthrones from "../assets/gameofthrones.jpg";
import flash from "../assets/flash.jpg";
import howtogetawaymurder from "../assets/howtogetawaymurder.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "nowrap",
    marginBottom: 80,
    overflow: "hidden",

    "& img": {
      maxWidth: 220,
      minWidth: 176,
      borderRadius: 10,
      boxShadow: "0px 6px 12px rgba(0,0,0,0.2)",
    },

    "@media (min-width: 930px)": {
      marginBottom: 110,
    },

    "& img:not(:last-child)": {
      marginRight: 16,

      "@media (min-width: 930px)": {
        marginRight: 30,
      },
    },
  },
}));

export default function Slide() {
  const cls = useStyles();
  return (
    <Box className={cls.root}>
      <img src={blackmirror} alt="blackmirror" />
      <img src={strangerthings} alt="strangerthings" />
      <img src={westworld} alt="westworld" />
      <img src={houseofcards} alt="houseofcards" />
      <img src={gameofthrones} alt="gameofthrones" />
      <img src={flash} alt="flash" />
      <img src={howtogetawaymurder} alt="howtogetawaymurder" />
    </Box>
  );
}
