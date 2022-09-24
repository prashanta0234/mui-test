import React, { useState } from "react";
import {
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

import dashbord from "../images/dashboard.svg";
import aboutI from "../images/aboutI.svg";
import "./style/Sidebar.css";

import logout from "../images/logout.svg";
import { Link } from "react-router-dom";

export default function SideBar() {
  const [state, setState] = useState("dashbord");
  const handleOnlick = (name) => {
    setState(name);
  };

  return (
    <>
      <List sx={{ position: "relative", minHeight: "85vh" }}>
        {/* reserve button */}
        <Link to="/reserve">
          <ListItem
            sx={{
              color: "#7B61FF",
              width: "100%",

              position: "relative",
              height: "44px",
            }}
          >
            <ListItemButton
              onClick={() => handleOnlick("dashbord")}
              className={state === "dashbord" && "active"}
              sentenceCase
            >
              <ListItemIcon style={{ minWidth: "30px" }}>
                <img alt="" src={dashbord} />
              </ListItemIcon>
              <ListItemText
                primary=" Reserve"
                primaryTypographyProps={{ fontSize: 12, fontWeight: "medium" }}
              />

              <Box
                className={state !== "dashbord" && "box"}
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
            </ListItemButton>
          </ListItem>
        </Link>
        {/* About button */}
        <Link to="/about">
          <ListItem
            sx={{
              color: "#7B61FF",
              width: "100%",

              position: "relative",
              height: "44px",
            }}
          >
            <ListItemButton
              onClick={() => handleOnlick("about")}
              className={state === "about" && "active"}
              sentenceCase
            >
              <ListItemIcon style={{ minWidth: "30px" }}>
                <img alt="" src={aboutI} />
              </ListItemIcon>
              <ListItemText
                primary="About Us"
                primaryTypographyProps={{ fontSize: 12, fontWeight: "medium" }}
              />

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
              />
            </ListItemButton>
          </ListItem>
        </Link>

        {/* logout */}
        {/* <Button
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
        </Button> */}

        <ListItem
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
        >
          <ListItemButton sentenceCase>
            <ListItemIcon style={{ minWidth: "30px" }}>
              <img alt="" src={logout} height="20px" />
            </ListItemIcon>
            <ListItemText
              primary="Logout"
              primaryTypographyProps={{ fontSize: 12, fontWeight: "medium" }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
}
