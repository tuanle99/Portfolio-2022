import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { Typography } from "@mui/material";

export default function Footer() {
  return (
    <Typography
      sx={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      Copyright {<CopyrightIcon sx={{ fontSize: 20 }} />} 2022 Tuan Le. All
      Rights Reserved.
    </Typography>
  );
}
