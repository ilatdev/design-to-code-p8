import React from "react";
import { Box, Button, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#000",
    color: "#ffffff",
    marginBottom: "50px",
  },
  communityWrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  communityLeft: {
    display: "flex",
    flexDirection: "column",
    marginTop: "70px",
    marginBottom: "50px",
    maxWidth: 460    
  },
  community: {
    fontFamily: "Source Sans Pro",
    fontSize: "16px",
    fontWeight: 300,
    lineHeight: "20px",
    opacity: 0.8,
    marginBottom: "10px",
  },
  communityTitle: {
    fontFamily: "Source Sans Pro",
    fontSize: "32px",
    fontWeight: 700,
    lineHeight: "38px",
    marginBottom: "20px",
  },
  communityText: {
    fontFamily: "Source Sans Pro",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
    marginBottom: "30px",
    opacity: 0.8,
  },
  communityBtn: {
    width: "216px",
    height: "42px",
    background: "#540cfa",
    boxShadow: "0px 1px 2px rgba(32,5,97,0.08)",
    fontFamily: "Source Sans Pro",
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: "20px",
    textTransform: "none",
  },
  reviews: {
    display: "flex",
    minWidth: '50%'
  },
}));

export default function Community() {
  const cls = useStyles();
  return (
    <Box className={cls.root}>
      <Container className={cls.communityWrapper}>
        <Box className={cls.communityLeft}>
          <Box className={cls.community}>Community</Box>
          <Box className={cls.communityTitle}>
            We believe in the power of community
          </Box>
          <Box className={cls.communityText}>
            Our goal is to create a product and service that you’re satisfied
            with and use it every day. This is why we’re constantly working on
            our services to make it better every day and really listen to what
            our users has to say.
          </Box>
          <Button
            variant="contained"
            color="primary"
            className={cls.communityBtn}
          >
            Read more testimonials
          </Button>
        </Box>
        <Box className={cls.reviews}>Twitter reviews</Box>
      </Container>
    </Box>
  );
}
