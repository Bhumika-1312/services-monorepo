"use client";

import { useState } from "react";

import {
  Box,
  Typography,
  Button,
  InputBase,
} from "@mui/material";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import GridViewIcon from "@mui/icons-material/GridView";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventIcon from "@mui/icons-material/Event";
import CreditCardOffIcon from "@mui/icons-material/CreditCardOff";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const services = [
  {
    title: "Pressure Washing",
    image: "/images/cleaning/pressure.png",
  },
  {
    title: "Lawn care",
    image: "/images/cleaning/lawn.png",
  },
  {
    title: "Window Cleaning",
    image: "/images/cleaning/window.png",
  },
  {
    title: "Gutter Cleaning",
    image: "/images/cleaning/gutter.png",
  },
];

export default function BookingSections() {
  const [showStepTwo, setShowStepTwo] = useState(false);

  return (
    <Box
      sx={{
        width: "100%",
        background: "#fff",
        py: "60px",
      }}
    >
      <Box
        sx={{
          maxWidth: "1280px",
          mx: "auto",
          px: {
            xs: 2,
            sm: 3,
            md: 4,
          },
        }}
      >
        {/* TITLE */}
        <Typography
          sx={{
            fontSize: {
              xs: "28px",
              md: "36px",
            },
            fontWeight: 700,
            color: "#111",
            mb: 4,
          }}
        >
          Plan for later
        </Typography>

        {/* MAIN SECTION */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              lg: "1.6fr 0.8fr",
            },
            gap: 4,
            alignItems: "stretch",
          }}
        >
          {/* LEFT CARD */}
          <Box
            sx={{
              background: "#EACCFB",
              borderRadius: "14px",
              overflow: "hidden",
              position: "relative",

              minHeight: {
                xs: "540px",
                md: "350px",
              },

              p: {
                xs: 3,
                md: 4,
              },
            }}
          >
            {/* TITLE */}
            <Typography
              sx={{
                fontSize: {
                  xs: "28px",
                  md: "42px",
                },

                fontWeight: 700,

                lineHeight: 1.15,

                color: "#111",

                maxWidth: "420px",

                position: "relative",
                zIndex: 2,
              }}
            >
              Done right, every time with ABC
            </Typography>

            {/* STEP 1 */}
            {!showStepTwo && (
              <Box
                sx={{
                  mt: 4,

                  display: "flex",
                  flexDirection: "column",

                  gap: 3,

                  position: "relative",
                  zIndex: 2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "#333",
                  }}
                >
                  Choose date and time
                </Typography>

                {/* DATE + TIME */}
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    flexWrap: "wrap",
                  }}
                >
                  {/* DATE */}
                  <Box
                    sx={{
                      height: "46px",

                      width: {
                        xs: "100%",
                        sm: "180px",
                      },

                      borderRadius: "6px",

                      background: "#fff",

                      display: "flex",
                      alignItems: "center",

                      px: 2,
                    }}
                  >
                    <CalendarMonthIcon
                      sx={{
                        fontSize: 18,
                        color: "#555",
                        mr: 1,
                      }}
                    />

                    <InputBase
                      placeholder="Date"
                      sx={{
                        fontSize: "13px",
                        width: "100%",
                      }}
                    />
                  </Box>

                  {/* TIME */}
                  <Box
                    sx={{
                      height: "46px",

                      width: {
                        xs: "100%",
                        sm: "180px",
                      },

                      borderRadius: "6px",

                      background: "#fff",

                      display: "flex",
                      alignItems: "center",

                      px: 2,
                    }}
                  >
                    <AccessTimeFilledIcon
                      sx={{
                        fontSize: 18,
                        color: "#555",
                        mr: 1,
                      }}
                    />

                    <InputBase
                      placeholder="Time"
                      sx={{
                        fontSize: "13px",
                        width: "100%",
                      }}
                    />
                  </Box>
                </Box>

                {/* NEXT BUTTON */}
                <Button
                  onClick={() => setShowStepTwo(true)}
                  sx={{
                    width: {
                      xs: "100%",
                      sm: "390px",
                    },

                    height: "46px",

                    borderRadius: "6px",

                    background: "#000",

                    color: "#fff",

                    textTransform: "none",

                    fontSize: "13px",

                    "&:hover": {
                      background: "#111",
                    },
                  }}
                >
                  Next
                </Button>
              </Box>
            )}

            {/* STEP 2 */}
            {showStepTwo && (
              <Box
                sx={{
                  mt: 4,

                  display: "flex",
                  flexDirection: "column",

                  gap: 3,

                  position: "relative",
                  zIndex: 2,
                }}
              >
                {/* SERVICES */}
                <Box
                  sx={{
                    display: "grid",

                    gridTemplateColumns: {
                      xs: "repeat(2,1fr)",
                      sm: "repeat(4,1fr)",
                    },

                    gap: 2,

                    maxWidth: "520px",
                  }}
                >
                  {services.map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        background: "#fff",

                        borderRadius: "8px",

                        height: "92px",

                        display: "flex",
                        flexDirection: "column",

                        alignItems: "center",
                        justifyContent: "center",

                        border:
                          index === 0
                            ? "2px solid #111"
                            : "1px solid #ECECEC",

                        cursor: "pointer",
                      }}
                    >
                      <Box
                        component="img"
                        src={item.image}
                        alt={item.title}
                        sx={{
                          width: "46px",
                          height: "46px",

                          objectFit: "contain",

                          mb: 1,
                        }}
                      />

                      <Typography
                        sx={{
                          fontSize: "10px",

                          color: "#222",

                          textAlign: "center",

                          px: 1,
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                {/* LOCATION */}
                <Box
                  sx={{
                    width: {
                      xs: "100%",
                      md: "420px",
                    },

                    height: "48px",

                    borderRadius: "6px",

                    background: "#fff",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",

                    px: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <LocationOnOutlinedIcon
                      sx={{
                        fontSize: 18,
                        color: "#555",
                      }}
                    />

                    <InputBase
                      placeholder="Service location"
                      sx={{
                        fontSize: "13px",
                      }}
                    />
                  </Box>

                  <KeyboardArrowDownIcon
                    sx={{
                      fontSize: 18,
                      color: "#111",
                    }}
                  />
                </Box>

                {/* GET PRICE */}
                <Button
                  component="a"
                  href="/cleaning-booking/booking"
                  sx={{
                    width: "120px",

                    height: "42px",

                    borderRadius: "6px",

                    background: "#000",

                    color: "#fff",

                    textTransform: "none",

                    fontSize: "13px",

                    "&:hover": {
                      background: "#111",
                    },
                  }}
                >
                  Get price
                </Button>
              </Box>
            )}

            {/* WATCH IMAGE */}
            <Box
              component="img"
              src="/images/booking/watch.png"
              alt="watch"
              sx={{
                position: "absolute",

                right: {
                  xs: -20,
                  md: 0,
                },

                bottom: 0,

                width: {
                  xs: "190px",
                  md: "290px",
                },

                objectFit: "contain",

                zIndex: 1,
              }}
            />
          </Box>

          {/* RIGHT PROCESS */}
          <Box
            sx={{
              border: "1px solid #E5E5E5",

              borderRadius: "14px",

              p: {
                xs: 3,
                md: 4,
              },

              background: "#fff",
            }}
          >
            <Typography
              sx={{
                fontSize: "24px",

                fontWeight: 700,

                color: "#111",

                mb: 4,
              }}
            >
              4 step process
            </Typography>

            {[
              {
                icon: <GridViewIcon />,
                text: "Select from our range of professional cleaning services online",
              },

              {
                icon: <LocationOnIcon />,
                text: "Select your location manually or automatically",
              },

              {
                icon: <EventIcon />,
                text: "Select a schedule that works for you. We offer same-day availability",
              },

              {
                icon: <CreditCardOffIcon />,
                text: "Cancel at no charge up to 60 minutes in advance.",
              },
            ].map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  gap: 2,
                  mb: 3,
                  alignItems: "flex-start",
                }}
              >
                <Box
                  sx={{
                    color: "#111",
                    mt: "2px",
                  }}
                >
                  {item.icon}
                </Box>

                <Typography
                  sx={{
                    fontSize: "14px",
                    lineHeight: 1.7,
                    color: "#444",
                  }}
                >
                  {item.text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}