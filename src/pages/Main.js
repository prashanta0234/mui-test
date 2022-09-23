import { Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import Nav from "../component/Nav";
import News from "../component/News";
import SideBar from "../component/SideBar";

import Index from "./Index";
// import Nav from "../component/Nav";

export default function Main() {
  return (
    <>
      <Nav />
      <Divider />

      <Box sx={{ mt: 3 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={1} sm={2} md={2} sx={{ minHeight: "85vh" }}>
            <SideBar />
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid item xs={2} sm={6.8} md={6.8}>
            <Index />
          </Grid>
          <Grid
            item
            xs={1}
            sm={3}
            md={3}
            sx={{ backgroundColor: "#EEEEEE", minHeight: "89vh" }}
          >
            <Box>
              <Typography
                variant="h4"
                sx={{ fontSize: "20px", fontWeight: "600", color: "#1A1A1A" }}
              >
                News
              </Typography>
              <Box>
                <News />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
