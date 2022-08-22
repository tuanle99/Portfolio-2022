import React, { useRef } from "react";
import { Box } from "@mui/material";

import { useIsInViewport } from "../util/Helper";

export default function Resume() {
  const ref1 = useRef(null);

  const isInViewport1 = useIsInViewport(ref1);
  // console.log("isInViewport1: ", isInViewport1);
  return (
    <Box
      ref={ref1}
      id="Resume"
      sx={{ height: 300, backgroundColor: "lightblue" }}
    >
      Resume
    </Box>
  );
}
