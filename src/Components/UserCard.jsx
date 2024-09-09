import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const UserCard = ({ sx }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        bgcolor: "#e7e1f3", // light purple background
        borderRadius: "16px", // rounded corners
        p: 2, // padding
        width: "15rem",
        ...sx,
      }}
    >
      <Avatar
        sx={{
          bgcolor: "transparent",
          color: "#5e2ea2",
          mr: 2, // margin right
        }}
      >
        <PersonIcon fontSize="large" />
      </Avatar>
      <Box>
        <Typography
          variant="h6"
          component="div"
          sx={{ color: "#5e2ea2", fontWeight: "bold" }}
        >
          Elizabeth San
        </Typography>
        <Typography variant="body2" sx={{ color: "#5e2ea2" }}>
          Client
        </Typography>
      </Box>
    </Box>
  );
};

export default UserCard;
