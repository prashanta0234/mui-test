import { Autocomplete, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Graph } from "../component/Graph";
import arrow from "../images/rightArrow.svg";
import "./graph.css";

const GraphPage: React.FC = () => {
  const Currency: string[] = ["usd", "rs", "tk", "ue"];
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <img alt="" src={arrow} />
        <Typography
          color="primary"
          sx={{
            fontSize: "12px",
            textTransform: "none",
            ml: "8px",
          }}
        >
          Reserve
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mr: "64px",
          mt: "19.5px",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" sx={{ fontSize: "20px", fontWeight: 600 }}>
          Foreign Exchange Reserve (Monthly)
        </Typography>

        <Autocomplete
          id="country-select-demo"
          defaultValue="usd"
          color="primary"
          sx={{
            width: "100px",

            ".MuiOutlinedInput-root": {
              borderColor: "primary.main",

              borderWidth: 10,
              height: "50px",
            },
          }}
          options={Currency}
          autoHighlight
          getOptionLabel={(option) => option}
          renderOption={(props, option) => (
            <Box
              component="li"
              color="primary"
              sx={{ height: "36px" }}
              {...props}
            >
              {option}
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              sx={{ color: "#7B61FF" }}
              {...params}
              inputProps={{
                ...params.inputProps,
                autoComplete: "new-password", // disable autocomplete and autofill
              }}
            />
          )}
        />
      </Box>
      <Box sx={{ mr: "60px" }}>
        <Graph />
      </Box>
    </>
  );
};

export default GraphPage;
