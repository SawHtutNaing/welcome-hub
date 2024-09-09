import React, { useState } from "react";
import {
  Box,
  AppBar,
  Drawer,
  Toolbar,
  List,
  ListItem,
  Typography,
  Container,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import collection from "./assets/icons/collection.svg";

import H1Heading from "./Components/H1Heading";
import Notification from "./Components/Notification";
import Matching from "./Components/Matching";
import CaregiverDetails from "./Components/CaregiverDetails";
import SearchResult from "./Components/SearchResult";

const drawerWidth = 300;

const CreateRequest = () => {
  const [activePage, setActivePage] = useState("Matches");
  const [selectedCaregiver, setSelectedCaregiver] = useState(null); // Track selected caregiver for details

  const handlePageChange = (page) => {
    setActivePage(page);
    setSelectedCaregiver(null); // Reset selected caregiver when switching pages
  };

  const showCaregiverDetails = (caregiver) => {
    setSelectedCaregiver(caregiver); // Set the selected caregiver and switch to details view
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "linear-gradient(180deg, #90386B 0%, #2A3C8D 100%)",
            color: "#FFF",
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            zIndex: "4000",
          },
        }}
      >
        <Toolbar />
        <List sx={{ flexGrow: 1 }}>
          <ListItem>
            <H1Heading text={"Wellcome Hub"} sx={{ color: "#4A1249" }} />
          </ListItem>

          {/* Sidebar Items */}
          <ListItem
            sx={{
              margin: "auto",
              borderRadius: "8px",
              padding: "1rem",
              width: "80%",
              backgroundColor:
                activePage === "Matches" ? "rgba(250, 250, 250, 0.2)" : "",
            }}
            button
            onClick={() => handlePageChange("Matches")}
          >
            <Box
              sx={{ display: "flex", alignItems: "center", columnGap: "1rem" }}
            >
              <img src={collection} alt="" />
              <Typography sx={{ fontSize: "1rem" }}>Matches</Typography>
            </Box>
            <ArrowForwardIcon />
          </ListItem>

          {/* Additional Items */}
          <ListItem
            sx={{
              margin: "auto",
              borderRadius: "8px",
              padding: "1rem",
              width: "80%",
              backgroundColor:
                activePage === "Notifications"
                  ? "rgba(250, 250, 250, 0.2)"
                  : "",
            }}
            button
            onClick={() => handlePageChange("Notifications")}
          >
            <Box
              sx={{ display: "flex", alignItems: "center", columnGap: "1rem" }}
            >
              <img src={collection} alt="" />
              <Typography sx={{ fontSize: "1rem" }}>Notifications</Typography>
            </Box>
            <ArrowForwardIcon />
          </ListItem>
        </List>

        <Box sx={{ flexGrow: 1 }} />

        {/* Settings and Logout */}
        <List sx={{ pb: "2rem" }}>
          <ListItem
            sx={{
              margin: "auto",
              borderRadius: "8px",
              padding: "1rem",
              width: "80%",
            }}
          >
            <Typography sx={{ fontSize: "0.9rem" }}>Settings</Typography>
            <ArrowForwardIcon />
          </ListItem>
          <ListItem
            sx={{
              margin: "auto",
              borderRadius: "8px",
              padding: "1rem",
              width: "80%",
            }}
          >
            <Typography sx={{ fontSize: "0.9rem" }}>Logout</Typography>
            <ArrowForwardIcon />
          </ListItem>
        </List>
      </Drawer>

      {/* Main content */}
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 5 }}
      >
        <AppBar
          position="fixed"
          sx={{
            zIndex: 1201,
            bgcolor: "white",
            boxShadow: "none",
            color: "#000",
          }}
        >
          <Toolbar>
            <Box
              sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                />
              </svg>
            </Box>

            <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "end" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                />
              </svg>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </Box>
          </Toolbar>
        </AppBar>

        <Container sx={{ mt: 10 }} maxWidth disableGutters>
          {/* Conditionally render content based on the active page */}
          {activePage === "Matches" && !selectedCaregiver && (
            <SearchResult></SearchResult>
          )}
          {activePage === "Matches" && selectedCaregiver && (
            <CaregiverDetails
              caregiver={selectedCaregiver}
              goBack={() => setSelectedCaregiver(null)}
            />
          )}
          {activePage === "Notifications" && <Notification />}
        </Container>
      </Box>
    </Box>
  );
};

export default CreateRequest;
