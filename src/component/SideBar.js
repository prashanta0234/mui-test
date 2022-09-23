import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

import deshbord from "../images/dashboard.svg";
import aboutI from "../images/aboutI.svg";
import "./style/Sidebar.css";

import logout from "../images/logout.svg";
import { BrowserRouter, Link } from "react-router-dom";

export default function SideBar() {
  const [state, setState] = useState("deshbord");
  const handleOnlick = (name) => {
    setState(name);
  };

  return (
    <>
      <Box sx={{ mx: 1, position: "relative", minHeight: "85vh" }}>
        <Link to="/reserve">
          <Button
            onClick={() => handleOnlick("deshbord")}
            sx={{
              color: "#7B61FF",
              width: "100%",
              justifyContent: "flex-start",
              position: "relative",
              height: "44px",
              my: "6px",
            }}
            className={state === "deshbord" && "active"}
            sentenceCase
          >
            <img alt="" src={deshbord} height="20px" />
            <Typography
              sx={{ fontSize: "12px", textTransform: "none", ml: "8px" }}
            >
              Reserve
            </Typography>

            <Box
              className={state !== "deshbord" && "box"}
              sx={{
                width: "2px",
                height: "16px",
                background: "#7B61FF",
                borderRadius: "1000px",
                position: "absolute",
                right: "0px",
              }}
              placement="right"
            />
          </Button>
        </Link>
        {/* About button */}
        <Link to="/about">
          <Button
            onClick={() => handleOnlick("about")}
            className={state === "about" && "active"}
            sx={{
              color: "#7B61FF",
              width: "100%",
              justifyContent: "flex-start",
              position: "relative",
              height: "44px",
              my: "6px",
            }}
            sentenceCase
          >
            <img alt="" src={aboutI} height="20px" />
            <Typography
              sx={{ fontSize: "12px", textTransform: "none", ml: "8px" }}
            >
              About Us
            </Typography>

            <Box
              className={state !== "about" && "box"}
              sx={{
                width: "2px",
                height: "16px",
                background: "#7B61FF",
                borderRadius: "1000px",
                position: "absolute",
                right: "0px",
              }}
              placement="right"
            />
          </Button>
        </Link>
        {/* logout */}
        <Button
          sx={{
            color: "black",
            width: "100%",
            justifyContent: "flex-start",
            position: "absolute",

            bottom: "16px",
            left: "5px",
            height: "44px",
            my: "6px",
          }}
          sentenceCase
        >
          <img alt="" src={logout} height="20px" />
          <Typography
            sx={{ fontSize: "12px", textTransform: "none", ml: "8px" }}
          >
            Logout
          </Typography>
        </Button>
      </Box>
    </>
  );
}
