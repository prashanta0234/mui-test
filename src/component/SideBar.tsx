import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";

import dashbord from "../images/dashboard.svg";
import aboutI from "../images/aboutI.svg";
import "./style/Sidebar.css";

import logout from "../images/logout.svg";
import { Link } from "react-router-dom";

const SideBar: React.FC = () => {
  const [state, setState] = useState<string>("dashbord");
  const handleOnlick: Function = (name: string) => {
    setState(name);
  };

  return (
    <>
      <List sx={{ position: "relative", minHeight: "85vh" }}>
        {/* reserve button */}
        <Link to="/reserve">
          <ListItem
            color="primary"
            sx={{
              width: "100%",

              position: "relative",
              height: "44px",
            }}
          >
            {/* className={state === "dashbord" && "active"}
              sentenceCase */}
            <ListItemButton
              onClick={() => handleOnlick("dashbord")}
              className={state === "dashbord" && "active"}
            >
              <ListItemIcon style={{ minWidth: "30px" }}>
                <img alt="" src={dashbord} />
              </ListItemIcon>
              <ListItemText
                primary="RESERVE"
                primaryTypographyProps={{ fontSize: 12, fontWeight: "medium" }}
              />

              <Box
                className={state !== "dashbord" && "box"}
                sx={{
                  width: "2px",
                  height: "16px",
                  backgroundColor: "primary.main",
                  borderRadius: "1000px",
                  position: "absolute",
                  right: "0px",
                }}
              />
            </ListItemButton>
          </ListItem>
        </Link>
        {/* About button */}
        <Link to="/about">
          <ListItem
            color="primary"
            sx={{
              width: "100%",

              position: "relative",
              height: "44px",
            }}
          >
            <ListItemButton
              onClick={() => handleOnlick("about")}
              className={state === "about" && "active"}
            >
              <ListItemIcon style={{ minWidth: "30px" }}>
                <img alt="" src={aboutI} />
              </ListItemIcon>
              <ListItemText
                primary="ABOUT US"
                primaryTypographyProps={{ fontSize: 12, fontWeight: "medium" }}
              />

              <Box
                className={state !== "about" && "box"}
                sx={{
                  width: "2px",
                  height: "16px",
                  backgroundColor: "primary.main",
                  borderRadius: "1000px",
                  position: "absolute",
                  right: "0px",
                }}
              />
            </ListItemButton>
          </ListItem>
        </Link>

        {/* logout */}

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
          <ListItemButton>
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
};
export default SideBar;
