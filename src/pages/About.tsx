import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import arrow from "../images/rightArrow.svg";

const About: React.FC = () => {
  return (
    <>
      <Box>
        <Box sx={{ display: "flex" }}>
          <img alt="" src={arrow} />
          <Typography
            color={"primary"}
            sx={{
              fontSize: "12px",
              textTransform: "none",
              ml: "8px",
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
};
export default About;
