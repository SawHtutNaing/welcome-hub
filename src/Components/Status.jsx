import { Typography } from "@mui/material";
import React from "react";

const colorsCode = {
  confirm: "rgba(255, 232, 112, 0.5)",
  awaiting: "#C082FF80",
  accepted: "#7EFF8380",
  rejected: "#FF7B7B80",
};
const Status = ({ text }) => {
  return (
    <Typography
      sx={{
        color: "#2D3C8C",
        fontSize: "1rem",
        backgroundColor: colorsCode[text],
        textAlign: "center",
        width: "107px",
        height: "28px",
        borderRadius: "5px",
        fontWeight: "700",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: "1rem",
      }}
    >
      {text}
    </Typography>
  );
};

export default Status;
