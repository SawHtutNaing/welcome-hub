import React, { useState } from "react";

import {
  Button,
  Paper,
  Checkbox,
  Box,
  FormHelperText,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemIcon,
  listItemIconClasses,
  ListItemText,
  styled,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Drawer,
  Toolbar,
  AppBar,
  Container,
  OutlinedInput,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import collection from "./assets/icons/collection.svg";

import H1Heading from "./Components/H1Heading";
import Notification from "./Components/Notification";
import Matching from "./Components/Matching";
import CaregiverDetails from "./Components/CaregiverDetails";
import SearchResult from "./Components/SearchResult";
import H2Heading from "./Components/H2Heading";
import Status from "./Components/Status";

const drawerWidth = 300;

const SchedularMatchList = ({ showDetails }) => {
  const caregivers = [
    {
      id: 1,
      date: "Today",
      time: "14:54",
      clientAgancy: "CareWell Agency",
      caregiverAgancy: "Your Agency",
      clientName: "Elizabeth",
      caregiverName: "Anna Smith",
      status: "confirm",
    },
    {
      id: 1,
      date: "Today",
      time: "14:54",
      clientName: "Elizabeth",
      caregiverName: "Anna Smith",
      status: "awaiting",
    },
    {
      id: 1,
      date: "Today",
      time: "14:54",
      clientName: "Elizabeth",
      caregiverName: "Anna Smith",
      status: "accepted",
    },
    {
      id: 1,
      date: "Today",
      time: "14:54",
      clientName: "Elizabeth",
      caregiverName: "Anna Smith",
      status: "rejected",
    },
  ];

  const [activePage, setActivePage] = useState("Matches");
  const [selectedCaregiver, setSelectedCaregiver] = useState(null); // Track selected caregiver for details
  const [status, setStatus] = React.useState("");
  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const handlePageChange = (page) => {
    setActivePage(page);
    setSelectedCaregiver(null); // Reset selected caregiver when switching pages
  };

  const showCaregiverDetails = (caregiver) => {
    setSelectedCaregiver(caregiver); // Set the selected caregiver and switch to details view
  };
  const CustomOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#545F71", // Default border color
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#545F71", // Hover border color
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#545F71", // Focused border color
    },
  }));

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
            <>
              <Box>
                <H2Heading
                  text="Matches"
                  sx={{
                    color: "#2D3C8C",
                    textAlign: "start",
                  }}
                ></H2Heading>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "2rem",
                    alignItems: "end",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        color: "#545F71",
                        fontWeight: "400",
                        lineHeight: "1.5",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      Search match by caregiver’s name
                    </Typography>
                    <CustomOutlinedInput
                      id="outlined-adornment-weight"
                      sx={{
                        borderColor: "#545F71",
                        marginTop: "0.5rem",
                      }}
                      startAdornment={
                        <InputAdornment position="start">
                          <span style={{ color: "rgba(84, 95, 113, 0.5)" }}>
                            Name
                          </span>{" "}
                          {/* Apply color styling here */}
                        </InputAdornment>
                      }
                      endAdornment={
                        <InputAdornment position="end">
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
                              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                            />
                          </svg>
                        </InputAdornment>
                      }
                      aria-describedby="outlined-weight-helper-text"
                    />
                  </Box>

                  <Box
                    sx={{
                      width: "50%",
                      display: "flex",
                      justifyContent: "end",
                      alignItems: "end",
                    }}
                  >
                    <FormControl
                      sx={{
                        width: "50%",
                      }}
                      variant="outlined"
                    >
                      <InputLabel id="status-select-label">
                        Filter by status
                      </InputLabel>
                      <Select
                        labelId="status-select-label"
                        value={status}
                        onChange={handleChange}
                        label="Filter by status"
                      >
                        <MenuItem value="all">All</MenuItem>
                        <MenuItem value="confirm">confirm</MenuItem>
                        <MenuItem value="awaiting">awaiting</MenuItem>
                        <MenuItem value="accepted">accepted</MenuItem>
                        <MenuItem value="rejected">rejected</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Box>
              </Box>

              <TableContainer
                component={Paper}
                sx={{
                  marginTop: "2rem",
                }}
              >
                <Table sx={{ minWidth: 650 }}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell>Client’s Name</TableCell>
                      <TableCell>Caregiver's Name</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Details</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {caregivers.map((caregiver) => (
                      <TableRow key={caregiver.id}>
                        <TableCell>
                          {caregiver.date} <br />
                          <span style={{ fontSize: "0.8em", color: "#999" }}>
                            {caregiver.time}
                          </span>
                        </TableCell>
                        <TableCell>
                          {caregiver.clientName} <br />
                          <span style={{ fontSize: "0.8em", color: "#999" }}>
                            {caregiver.clientAgancy}
                          </span>
                        </TableCell>
                        <TableCell>
                          {caregiver.caregiverName}
                          <span style={{ fontSize: "0.8em", color: "#999" }}>
                            {caregiver.caregiverAgancy}
                          </span>
                        </TableCell>

                        <TableCell>
                          <Status text={caregiver.status}></Status>
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="contained"
                            sx={{ backgroundColor: "#90386B" }}
                            endIcon={<ArrowForwardIcon />}
                            onClick={() => setSelectedCaregiver(caregiver)} // Pass caregiver details to parent
                          >
                            See Details
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
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

export default SchedularMatchList;
