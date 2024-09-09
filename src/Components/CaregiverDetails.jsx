import React, { useState } from "react";

import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Paper,
  Tabs,
  Tab,
  Typography,
  List,
  Modal,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import H2Heading from "./H2Heading";
import UserCard from "./UserCard";
import link from "../assets/icons/link.svg";
import { Person, Style } from "@mui/icons-material";
import MostFont from "./MostFont";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { PencilIcon } from "@heroicons/react/24/outline";

const CaregiverDetails = ({}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  function getPencilIcon() {
    return (
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
          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
        />
      </svg>
    );
  }

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "35rem",
    bgcolor: "background.paper",
    borderRadius: "12px",
    boxShadow: 24,
    p: 4,
  };
  return (
    <Box>
      {/* <Button startIcon={<ArrowBackIcon />} onClick={goBack} sx={{ mb: 3 }}>
                Back to Matching Results
            </Button> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{}}>
          <H2Heading
            text={"Matches/Match Details"}
            sx={{
              color: "#2D3C8C",
            }}
          ></H2Heading>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            position: "relative",
            columnGap: "1rem",
          }}
        >
          <UserCard />
          <div className="link">
            <img src={link} alt="" />
          </div>
          <UserCard />
        </Box>
      </Box>

      <Box
        sx={{
          marginTop: "1rem",
        }}
      >
        <MostFont
          text={
            "Your caregiver Jenny meets client's requirements 85% of the time."
          }
        />
      </Box>

      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        sx={{ mt: 3 }}
        indicatorColor="primary"
      >
        <Tab
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            columnGap: "1rem",
            fontWeight: "600",
          }}
          icon={<Person sx={{ color: activeTab === 0 ? "#90386B" : "grey" }} />}
          label="Client’s requirements"
        />
        <Tab
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            columnGap: "1rem",
            fontWeight: "600",
          }}
          icon={
            <svg
              width="26"
              height="25"
              viewBox="0 0 26 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.2292 7.8877C21.2292 10.0968 19.4384 11.8877 17.2292 11.8877C15.0201 11.8877 13.2292 10.0968 13.2292 7.8877C13.2292 5.67856 15.0201 3.8877 17.2292 3.8877C19.4384 3.8877 21.2292 5.67856 21.2292 7.8877Z"
                stroke={activeTab === 1 ? "#90386B" : "grey"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.2292 14.8877C13.3633 14.8877 10.2292 18.0217 10.2292 21.8877H24.2292C24.2292 18.0217 21.0952 14.8877 17.2292 14.8877Z"
                stroke={activeTab === 1 ? "#90386B" : "grey"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.46368 15.0968C1.71788 14.5812 1.22925 13.7201 1.22925 12.7448C1.22925 11.1669 2.50843 9.8877 4.08639 9.8877C5.16212 9.8877 6.09899 10.4822 6.58639 11.3606C7.07379 10.4822 8.01067 9.8877 9.08639 9.8877C10.6643 9.8877 11.9435 11.1669 11.9435 12.7448C11.9435 13.72 11.455 14.581 10.7094 15.0966L6.58681 19.8877L2.46368 15.0968Z"
                fill={activeTab === 1 ? "#90386B" : "grey"}
                stroke={activeTab === 1 ? "#90386B" : "grey"}
                strokeWidth="2"
              />
            </svg>
          }
          label="Caregiver’s details"
        />
      </Tabs>
      {activeTab === 0 ? (
        <TableContainer
          component={Paper}
          sx={{
            mt: 6,
            paddingLeft: "2rem",
            paddingRight: "2rem",
          }}
        >
          <MostFont
            text={"About patient: "}
            sx={{
              color: "#545F71",
            }}
          />
          <MostFont
            text={"Woman, 85 years old "}
            sx={{
              color: "#545F71",
            }}
          />
          <MostFont
            sx={{
              color: "#545F71",
              fontWeight: "400",
              marginTop: "1rem",
            }}
            text={
              "Eleanor is a kind and gentle elderly lady who enjoys spending her days in a peaceful and supportive environment. She appreciates good conversation, loves reading, and enjoys light outdoor activities like walking in the park. Eleanor requires assistance with daily tasks due to her limited mobility, but she remains cheerful and engaging, making her a delightful person to care for."
            }
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              borderTop: "1px solid rgba(84, 95, 113, 0.3)",
              borderBottom: "1px solid rgba(84, 95, 113, 0.3) ",
              marginTop: "1.5rem",
              paddingY: "1rem",
            }}
          >
            <Box>
              <MostFont
                sx={{
                  color: "#545F71",
                  fontWeight: "700",
                }}
                text={"Start Date: "}
              />
              <MostFont
                sx={{
                  color: "#545F71",
                  fontWeight: "700",
                }}
                text={"Prognosis: "}
              />
              <MostFont
                sx={{
                  color: "#545F71",
                  fontWeight: "700",
                }}
                text={"Care Goal::"}
              />
              <MostFont
                sx={{
                  color: "#545F71",
                  fontWeight: "700",
                }}
                text={"Proposed Schedule:"}
              />
              <MostFont
                sx={{
                  color: "#545F71",
                  fontWeight: "700",
                }}
                text={"Care Coorination Notes:"}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "end",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#2D3C8C",
                  mb: 3,
                  fontWeight: "600",
                  paddingY: "0.5rem",
                  borderRadius: "6px",
                }}
                startIcon={getPencilIcon()}
                // onClick={() => showDetails(caregiver)} // Pass caregiver details to parent
              >
                Suggest change
              </Button>
            </Box>
          </Box>

          <Box
            sx={{
              mt: 3,

              borderRadius: "8px",
            }}
          >
            {/* Care Help List */}
            <Box sx={{ maxWidth: "60%" }}>
              <Typography
                variant="h6"
                sx={{ mb: 1, color: "#545F71", fontWeight: "bold" }}
              >
                She needs help with:
              </Typography>
              <List sx={{ color: "#545F71" }}>
                <MostFont
                  text={
                    "Assisting with daily activities (personal hygiene, dressing, eating)."
                  }
                />

                <MostFont
                  text={"Preparing meals according to dietary guidelines."}
                  t
                />

                <MostFont
                  text={"Administering medication according to schedule."}
                  t
                />

                <MostFont
                  text={
                    "Accompanying on walks and during rehabilitation exercises."
                  }
                />

                <MostFont
                  text={
                    "Organizing leisure activities (reading, games, conversations)."
                  }
                  t
                />

                <MostFont
                  text={"Maintaining cleanliness in her environment."}
                />
              </List>
            </Box>

            {/* Action Buttons */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "end",
              }}
            >
              <Button
                variant="outlined"
                sx={{
                  mb: 3,
                  fontWeight: "600",
                  paddingY: "0.5rem",
                  borderRadius: "6px",
                  border: "2px solid ",
                }}
              >
                Reject Match...
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#90386B",
                  mb: 3,
                  fontWeight: "600",
                  paddingY: "0.5rem",
                  borderRadius: "6px",
                }}
              >
                Confirm Availability...
              </Button>
            </Box>
          </Box>
        </TableContainer>
      ) : (
        <TableContainer
          component={Paper}
          sx={{
            mt: 6,
            paddingLeft: "2rem",
            paddingRight: "2rem",
          }}
        >
          <MostFont
            text={"About Caregiver:"}
            sx={{
              color: "#545F71",
            }}
          />
          <MostFont
            text={"Woman, 25 years old "}
            sx={{
              color: "#545F71",
            }}
          />
          <MostFont
            sx={{
              color: "#545F71",
              fontWeight: "400",
              marginTop: "1rem",
            }}
            text={
              "Eleanor is a kind and gentle elderly lady who enjoys spending her days in a peaceful and supportive environment. She appreciates good conversation, loves reading, and enjoys light outdoor activities like walking in the park. Eleanor requires assistance with daily tasks due to her limited mobility, but she remains cheerful and engaging, making her a delightful person to care for."
            }
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              borderTop: "1px solid rgba(84, 95, 113, 0.3)",
              borderBottom: "1px solid rgba(84, 95, 113, 0.3) ",
              marginTop: "1.5rem",
              paddingY: "1rem",
            }}
          >
            <Box>
              <MostFont
                sx={{
                  color: "#545F71",
                  fontWeight: "700",
                }}
                text={"Start Date: "}
              />
              <MostFont
                sx={{
                  color: "#545F71",
                  fontWeight: "700",
                }}
                text={"Prognosis: "}
              />
              <MostFont
                sx={{
                  color: "#545F71",
                  fontWeight: "700",
                }}
                text={"Care Goal::"}
              />
              <MostFont
                sx={{
                  color: "#545F71",
                  fontWeight: "700",
                }}
                text={"Proposed Schedule:"}
              />
              <MostFont
                sx={{
                  color: "#545F71",
                  fontWeight: "700",
                }}
                text={"Care Coorination Notes:"}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "end",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#2D3C8C",
                  mb: 3,
                  fontWeight: "600",
                  paddingY: "0.5rem",
                  borderRadius: "6px",
                }}
                startIcon={getPencilIcon()}
                // onClick={() => showDetails(caregiver)} // Pass caregiver details to parent
              >
                Suggest change
              </Button>
            </Box>
          </Box>

          <Box
            sx={{
              mt: 3,

              borderRadius: "8px",
            }}
          >
            {/* Care Help List */}
            <Box sx={{ maxWidth: "60%" }}>
              <Typography
                variant="h6"
                sx={{ mb: 1, color: "#545F71", fontWeight: "bold" }}
              >
                She needs help with:
              </Typography>
              <List sx={{ color: "#545F71" }}>
                <MostFont
                  text={
                    "Assisting with daily activities (personal hygiene, dressing, eating)."
                  }
                />

                <MostFont
                  text={"Preparing meals according to dietary guidelines."}
                  t
                />

                <MostFont
                  text={"Administering medication according to schedule."}
                  t
                />

                <MostFont
                  text={
                    "Accompanying on walks and during rehabilitation exercises."
                  }
                />

                <MostFont
                  text={
                    "Organizing leisure activities (reading, games, conversations)."
                  }
                  t
                />

                <MostFont
                  text={"Maintaining cleanliness in her environment."}
                />
              </List>
            </Box>

            {/* Action Buttons */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "end",
              }}
            >
              <Button
                variant="outlined"
                sx={{
                  mb: 3,
                  fontWeight: "600",
                  paddingY: "0.5rem",
                  borderRadius: "6px",
                  border: "2px solid ",
                }}
              >
                Reject Match...
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#90386B",
                  mb: 3,
                  fontWeight: "600",
                  paddingY: "0.5rem",
                  borderRadius: "6px",
                }}
                onClick={handleOpen}
              >
                Confirm Availability...
              </Button>
            </Box>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <H2Heading
                  text="Confirm Availability"
                  sx={{
                    color: "#2D3C8C",
                  }}
                />
                <MostFont
                  text="Is your caregiver available for this offer? "
                  sx={{
                    textAlign: "center",
                  }}
                />
                <MostFont
                  text=" 20h per week | from 8:00AM to 12:00 PM"
                  sx={{
                    textAlign: "center",
                    color: "#545F71",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#545F71"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>

                  <MostFont
                    text=" 5km away from your Caregiver’s localisation "
                    sx={{
                      textAlign: "center",
                      color: "#5F6368",
                      fontWeight: "400",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    position: "relative",
                    columnGap: "1rem",
                    marginTop: "2rem",
                  }}
                >
                  <UserCard sx={{}} />
                  <div className="link">
                    <img src={link} alt="" />
                  </div>
                  <UserCard />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "end",
                    marginTop: "3rem",
                  }}
                >
                  <Button
                    onClick={handleClose}
                    variant="outlined"
                    className=" !text-primary !border-primary !border-2
              !text-button-m !font-semibold  !text-sm px-4  !py-1  !me-2 !mb-2  !rounded-button"
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Typography>Go Back</Typography>
                    </Box>
                  </Button>
                  <Button
                    onClick={handleClose}
                    variant="contained"
                    className=" !text-white !border-primary !border-2
                    !text-button-m !font-semibold  !text-sm px-4  !py-2  !me-2 !mb-2  !rounded-button"
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Typography>Confirm Availability</Typography>
                    </Box>
                  </Button>
                </Box>
              </Box>
            </Modal>
          </Box>
        </TableContainer>
      )}
    </Box>
  );
};

export default CaregiverDetails;
