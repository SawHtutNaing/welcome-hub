import React from "react";
import H2Heading from "./H2Heading";
import MostFont from "./MostFont";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import OutlinedInput from "@mui/material/OutlinedInput";

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
} from "@mui/material";
import { BeakerIcon } from "@heroicons/react/24/solid";

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

const OrderedList = styled(List)({
  counterReset: "listCounter", // Initialize the counter
  listStyleType: "none", // Remove default bullets
  paddingLeft: "1.5rem", // Adjust padding for number spacing
});
const OrderedListItem = styled(ListItem)({
  counterIncrement: "listCounter", // Increment the counter for each ListItem
  "&::before": {
    content: "counter(listCounter) '.'", // Display the counter
    fontWeight: "400",
    marginRight: "1rem",
    color: "#545F71",
  },
});
const SearchResult = () => {
  const caregivers = [
    {
      patientName: "Eleanor Doe",
      clientName: "Eleanor Doe",
      contact: "+1 860-111-22-33",
    },
    {
      patientName: "Eleanor Doe",
      clientName: "Eleanor Doe",
      contact: "+1 860-111-22-33",
    },
  ];

  return (
    <>
      <H2Heading
        text={"Create request"}
        sx={{ color: "#2D3C8C", textAlign: "start" }}
      />
      <Box
        sx={{
          marginTop: "1.5rem",
          fontSize: "1rem",
        }}
      >
        <MostFont
          text={"Create a caregiver search request for your client."}
          sx={{
            fontWeight: "400",
            fontSize: "1rem",
          }}
        />
        <MostFont
          text="Only you can see patient’s contacts data. External agencies will only see the data contained in the request."
          sx={{
            fontWeight: "400",
            marginTop: "1.5rem",
            fontSize: "1rem",
          }}
        />
        <MostFont
          text="How to do it ?"
          sx={{
            fontWeight: "400",
            marginTop: "1.5rem",
            fontSize: "1rem",
          }}
        />
        <OrderedList>
          <OrderedListItem
            sx={{
              display: "flex",

              alignItems: "center",
              marginTop: "0px",
            }}
          >
            <ListItemText
              sx={{
                color: "#545F71",

                fontWeight: "400",

                fontSize: "1rem",
                marginTop: "0px",
                marginBottom: "0px",
              }}
              primary="Search for the patient for whom you want to create a request."
            />
          </OrderedListItem>
          <OrderedListItem
            sx={{
              display: "flex",

              alignItems: "center",
              marginTop: "0px",
            }}
          >
            <ListItemText
              sx={{
                color: "#545F71",

                fontWeight: "400",

                fontSize: "1rem",
                marginTop: "0px",
                marginBottom: "0px",
              }}
              primary="Press “Create request” next to patient’s name."
            />
          </OrderedListItem>
          <OrderedListItem
            sx={{
              display: "flex",

              alignItems: "center",
            }}
          >
            <ListItemText
              sx={{
                color: "#545F71",

                fontWeight: "400",
                marginBottom: "0px",

                fontSize: "1rem",
                marginTop: "0px",
              }}
              primary="Below your patient the request will be created - this is what external agencies can see. "
            />
          </OrderedListItem>
        </OrderedList>

        <FormControl sx={{ m: 1 }} variant="outlined">
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "400",
            }}
            color="#545F71"
          >
            Search client or patient{" "}
          </Typography>
          <CustomOutlinedInput
            id="outlined-adornment-weight"
            sx={{
              borderColor: "#545F71",
            }}
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
          <FormHelperText id="outlined-weight-helper-text"></FormHelperText>
        </FormControl>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead sx={{}}>
              <TableRow>
                <TableCell>Patient’s Name</TableCell>
                <TableCell>Client’s Name</TableCell>
                <TableCell>Contact</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {caregivers.map((caregiver, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <span
                      style={{
                        fontSize: "1rem",
                        color: "#545F71",
                        fontWeight: "bold",
                      }}
                    >
                      {caregiver.patientName}
                    </span>
                  </TableCell>
                  <TableCell>
                    {caregiver.name} <br />
                    <span
                      style={{
                        fontSize: "1rem",
                        color: "#545F71",
                        fontWeight: "bold",
                      }}
                    >
                      {caregiver.clientName}
                    </span>
                  </TableCell>
                  <TableCell>{caregiver.contact}</TableCell>

                  <TableCell>
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: "#90386B" }}
                      startIcon={
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
                            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                      }
                      onClick={() => showDetails(caregiver)} // Pass caregiver details to parent
                    >
                      Create Request
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default SearchResult;
