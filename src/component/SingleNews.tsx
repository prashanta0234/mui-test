import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const SingleNews: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          width: "92%",
          height: "86px",
          backgroundColor: "white",
          my: "8px",
          borderRadius: "8px",
          position: "relative",
        }}
      >
        <Box
          sx={{
            p: "12px",
            height: "80%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography
            color=" secondary"
            variant="h5"
            sx={{
              fontSize: "13px",
              fontWeight: "600",
              lineHeight: "17.6px",
            }}
          >
            Fed's preferred inflation measure rose 4.7% in May, around
            multi-decade highs
          </Typography>
          <Typography
            sx={{ color: "#767676", fontSize: "12px", fontWeight: "400" }}
          >
            Jan 22, 2022
          </Typography>
        </Box>

        <Box
          sx={{
            width: "2px",
            height: "19px",
            backgroundColor: "primary.main",
            borderRadius: "1000px",
            position: "absolute",
            left: "0px",
            top: `calc(50% - 19px/2 - 0.5px)`,
          }}
        />
      </Box>
    </>
  );
};
export default SingleNews;
