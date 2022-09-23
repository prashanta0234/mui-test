import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import arrow from "../images/rightArrow.svg";

export default function About() {
  return (
    <>
      <Box>
        <Box sx={{ display: "flex" }}>
          <img alt="" src={arrow} />
          <Typography
            sx={{
              fontSize: "12px",
              textTransform: "none",
              ml: "8px",
              color: "#7B61FF",
            }}
          >
            About Us
          </Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Typography>Out Intro Coming Soon ! Stay With Us!</Typography>
        </Box>
      </Box>
    </>
  );
}
