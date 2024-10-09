import React, { useState } from 'react';
import { Box, AppBar, Drawer, Toolbar, List, ListItem, Typography, Container, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import H1Heading from './H1Heading';
import collection from '../assets/icons/collection.svg';
import H2Heading from './H2Heading';
import Notification from './Notification';
import Matching from './Matching';
import CaregiverDetails from './CaregiverDetails';
import { ChevronRight } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';

const drawerWidth = 300;

const DashboardLayout = () => {
  const navigate = useNavigate();

  const handleBack=()=>{
    if (window.history.length > 2) {
      navigate(-1); // Go back to the previous route
    } else {
      navigate('/'); // Fallback to a specific route, like the homepage
    }
  }
  const [activePage, setActivePage] = useState('Matches');
  const [selectedCaregiver, setSelectedCaregiver] = useState(null); // Track selected caregiver for details

  const handlePageChange = (page) => {
    setActivePage(page);
    setSelectedCaregiver(null); // Reset selected caregiver when switching pages
  };

  const showCaregiverDetails = (caregiver) => {
    setSelectedCaregiver(caregiver); // Set the selected caregiver and switch to details view
  };

  return (
    <Box sx={{ display: 'flex'  , justifyContent:'center'}}>
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

          <ListItem
            sx={{
              margin: "auto",
              borderRadius: "8px",
              padding: "1rem",
              width: "80%",
              backgroundColor:
                activePage === "Dashboard" ? "rgba(250, 250, 250, 0.2)" : "",
              display: "flex",
              justifyContent: "space-between",
            }}
            button
            onClick={() => handlePageChange("Dashboard")}
          >
            <Box
              sx={{ display: "flex", alignItems: "center", columnGap: "1rem" }}
            >
              <img src={collection} alt="" />

              <Typography sx={{ fontSize: "1rem" }}>Dashboard</Typography>
            </Box>
            <ChevronRight />
          </ListItem>

          <ListItem
            sx={{
              margin: "auto",
              borderRadius: "8px",
              padding: "1rem",
              width: "80%",
              backgroundColor:
                activePage === "Matches" ? "rgba(250, 250, 250, 0.2)" : "",
              justifyContent: "space-between",
              display: "flex",
            }}
            button
            onClick={() => handlePageChange("Matches")}
          >
            <Box
              sx={{ display: "flex", alignItems: "center", columnGap: "1rem" }}
            >
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
                  d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                />
              </svg>

              <Typography sx={{ fontSize: "1rem" }}>Matches</Typography>
            </Box>
            <ChevronRight />
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
              justifyContent: "space-between",
              display: "flex",
            }}
            button
            onClick={() => handlePageChange("Notifications")}
          >
            <Box
              sx={{ display: "flex", alignItems: "center", columnGap: "1rem" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6"
              >
                <path d="M5.85 3.5a.75.75 0 0 0-1.117-1 9.719 9.719 0 0 0-2.348 4.876.75.75 0 0 0 1.479.248A8.219 8.219 0 0 1 5.85 3.5ZM19.267 2.5a.75.75 0 1 0-1.118 1 8.22 8.22 0 0 1 1.987 4.124.75.75 0 0 0 1.48-.248A9.72 9.72 0 0 0 19.266 2.5Z" />
                <path
                  fill-rule="evenodd"
                  d="M12 2.25A6.75 6.75 0 0 0 5.25 9v.75a8.217 8.217 0 0 1-2.119 5.52.75.75 0 0 0 .298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 1 0 7.48 0 24.583 24.583 0 0 0 4.83-1.244.75.75 0 0 0 .298-1.205 8.217 8.217 0 0 1-2.118-5.52V9A6.75 6.75 0 0 0 12 2.25ZM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 0 0 4.496 0l.002.1a2.25 2.25 0 1 1-4.5 0Z"
                  clip-rule="evenodd"
                />
              </svg>

              <Typography sx={{ fontSize: "1rem" }}>Notifications</Typography>
            </Box>
            <ChevronRight />
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
              display: "flex",
              justifyContent: "space-between",
            }}
            button
            onClick={() => handlePageChange("Notifications")}
          >
            <Box
              sx={{ display: "flex", alignItems: "center", columnGap: "1rem" }}
            >
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
                  d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>

              <Typography sx={{ fontSize: "1rem" }}>Settings</Typography>
            </Box>
            <ChevronRight />
          </ListItem>
          <ListItem
            sx={{
              margin: "auto",
              borderRadius: "8px",
              padding: "1rem",
              width: "80%",
              display: "flex",
              justifyContent: "space-between",
            }}
            button
            onClick={() => handlePageChange("Notifications")}
          >
            <Box
              sx={{ display: "flex", alignItems: "center", columnGap: "1rem" }}
            >
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
                  d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                />
              </svg>

              <Typography sx={{ fontSize: "1rem" }}>Logout</Typography>
            </Box>
            <ChevronRight />
          </ListItem>
        </List>
      </Drawer>

      {/* Main content */}
      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 5 }}>
        <AppBar position="fixed" sx={{ zIndex: 1201, bgcolor: 'white', boxShadow: 'none', color: '#000' }}>
          <Toolbar>
            <Box sx={{ flexGrow: 1
  ,
  display:'flex',
  justifyContent:'center'

             }} >
          <Button onClick={handleBack}> 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
</svg>
          </Button>

            </Box>
            
            <Box sx={{ flexGrow: 1
  ,
  display:'flex',
  justifyContent:'end'

             }} >
                 
              
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
</svg>   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>



            </Box>
            
          </Toolbar>
        </AppBar>

        <Container sx={{ mt: 10 }} maxWidth disableGutters>
          {/* Conditionally render content based on the active page */}
          {activePage === 'Matches' && !selectedCaregiver && (
            <Matching showDetails={showCaregiverDetails} />
          )}
          {activePage === 'Matches' && selectedCaregiver && (
            <CaregiverDetails caregiver={selectedCaregiver} goBack={() => setSelectedCaregiver(null)} />
          )}
          {activePage === 'Notifications' && <Notification />}
        </Container>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
