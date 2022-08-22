import React, { useEffect, useRef, useState, useMemo } from "react";
import { Box } from "@mui/material";

export default function Resume() {
  const ref1 = useRef(null);

  const isInViewport1 = useIsInViewport(ref1);
  console.log("isInViewport1: ", isInViewport1);
  return (
    <Box
      ref={ref1}
      id="Home"
      sx={{ height: 300, backgroundColor: "lightblue" }}
    >
      Resume
    </Box>
  );
}

function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      ),
    []
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}
