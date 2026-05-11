"use client";

import { useState } from "react";

import {
  Box,
  Typography,
  Button,
  Avatar,
} from "@mui/material";

import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import YardOutlinedIcon from "@mui/icons-material/YardOutlined";
import GrassOutlinedIcon from "@mui/icons-material/GrassOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import BlurOnOutlinedIcon from "@mui/icons-material/BlurOnOutlined";
import OpacityOutlinedIcon from "@mui/icons-material/OpacityOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";

export default function BookingPage() {
  const [step, setStep] = useState(1);

  const [selectedSurface, setSelectedSurface] =
    useState("Natural Grass");

  const [selectedTask, setSelectedTask] =
    useState("Medium - 3 to 4 hrs.");

  const [selectedDirt, setSelectedDirt] =
    useState("Medium");

  const [selectedAddons, setSelectedAddons] =
    useState<string[]>(["Eco-Chemical Treatment"]);

  const toggleAddon = (addon: string) => {
    if (selectedAddons.includes(addon)) {
      setSelectedAddons(
        selectedAddons.filter((a) => a !== addon)
      );
    } else {
      setSelectedAddons([...selectedAddons, addon]);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        background: "#fff",
      }}
    >
      {/* STEPPER */}
      <Box
        sx={{
          height: "66px",
          borderBottom: "1px solid #ECECEC",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "1280px",

            px: {
              xs: 2,
              md: 4,
            },

            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* LEFT */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            {[
              "Surface & Condition",
              "Add-ons",
              "Schedule",
            ].map((label, index) => {
              const current = index + 1;
              const active = step >= current;

              return (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 20,
                      height: 20,

                      borderRadius: "50%",

                      background: active
                        ? "#7209B7"
                        : "#F2F2F2",

                      color: active
                        ? "#fff"
                        : "#666",

                      fontSize: "11px",
                      fontWeight: 600,

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {current}
                  </Box>

                  <Typography
                    sx={{
                      ml: 1,

                      fontSize: "12px",

                      color: active
                        ? "#7209B7"
                        : "#999",

                      fontWeight: active
                        ? 600
                        : 400,
                    }}
                  >
                    {label}
                  </Typography>
                </Box>
              );
            })}
          </Box>

          <Typography
            sx={{
              fontSize: "11px",
              color: "#555",
            }}
          >
            Step {step} of 3
          </Typography>
        </Box>
      </Box>

      {/* MAIN */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "1280px",

          mx: "auto",

          px: {
            xs: 2,
            md: 6,
          },

          py: {
            xs: 5,
            md: 7,
          },
        }}
      >
        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              lg: "1fr 360px",
            },

            gap: 6,
          }}
        >
          {/* LEFT */}
          <Box>
            <Typography
              sx={{
                fontSize: {
                  xs: "34px",
                  md: "46px",
                },

                fontWeight: 700,

                color: "#111",

                mb: 1,
              }}
            >
              Get Your Pressure Washing Quote
            </Typography>

            <Typography
              sx={{
                fontSize: "14px",

                color: "#666",

                mb: 7,
              }}
            >
              Takes less than 60 seconds. Our eco-friendly
              solutions guarantee a fresh look.
            </Typography>

            {/* STEP 1 */}
            {step === 1 && (
              <>
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: 700,
                    mb: 4,
                  }}
                >
                  1. What needs cleaning?
                </Typography>

                {/* SURFACE CARDS */}
                <Box
                  sx={{
                    display: "flex",
                    gap: 3,
                    flexWrap: "wrap",
                    mb: 8,
                  }}
                >
                  {[
                    {
                      title: "Natural Grass",
                      icon: <SpaOutlinedIcon />,
                    },

                    {
                      title: "Garden Lawn",
                      icon: <YardOutlinedIcon />,
                    },

                    {
                      title: "Artificial Turf",
                      icon: <GrassOutlinedIcon />,
                    },
                  ].map((item, index) => {
                    const active =
                      selectedSurface === item.title;

                    return (
                      <Box
                        key={index}
                        onClick={() =>
                          setSelectedSurface(item.title)
                        }
                        sx={{
                          width: "132px",
                          height: "132px",

                          borderRadius: "14px",

                          border: active
                            ? "2px solid #111"
                            : "1px solid #ECECEC",

                          background: "#fff",

                          display: "flex",
                          flexDirection: "column",

                          alignItems: "center",
                          justifyContent: "center",

                          cursor: "pointer",

                          boxShadow: active
                            ? "0 4px 12px rgba(0,0,0,0.05)"
                            : "none",
                        }}
                      >
                        <Box
                          sx={{
                            width: 44,
                            height: 44,

                            borderRadius: "50%",

                            background: "#F4F1FF",

                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",

                            color: "#555",

                            mb: 2,
                          }}
                        >
                          {item.icon}
                        </Box>

                        <Typography
                          sx={{
                            fontSize: "13px",
                            color: "#222",
                          }}
                        >
                          {item.title}
                        </Typography>
                      </Box>
                    );
                  })}
                </Box>

                {/* TASK + DIRT */}
                <Box
                  sx={{
                    display: "grid",

                    gridTemplateColumns: {
                      xs: "1fr",
                      md: "1fr 1fr",
                    },

                    gap: 6,
                  }}
                >
                  {/* TASK */}
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "32px",
                        fontWeight: 700,
                        mb: 3,
                      }}
                    >
                      1. How big is your task?
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                      }}
                    >
                      {[
                        "Small - 2 hrs.",
                        "Medium - 3 to 4 hrs.",
                        "Large - 4 hrs. +",
                      ].map((item, index) => {
                        const active =
                          selectedTask === item;

                        return (
                          <Button
                            key={index}
                            onClick={() =>
                              setSelectedTask(item)
                            }
                            sx={{
                              width: "220px",
                              height: "42px",

                              borderRadius: "999px",

                              background: active
                                ? "#000"
                                : "#F2F2F2",

                              color: active
                                ? "#fff"
                                : "#444",

                              textTransform: "none",

                              justifyContent:
                                "flex-start",

                              px: 3,

                              fontSize: "13px",

                              "&:hover": {
                                background: active
                                  ? "#111"
                                  : "#EAEAEA",
                              },
                            }}
                          >
                            {item}
                          </Button>
                        );
                      })}
                    </Box>
                  </Box>

                  {/* DIRT */}
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "32px",
                        fontWeight: 700,
                        mb: 3,
                      }}
                    >
                      Dirt Level
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        gap: 2,
                      }}
                    >
                      {[
                        {
                          label: "Light",
                          icon: <AppsOutlinedIcon />,
                        },

                        {
                          label: "Medium",
                          icon: <BlurOnOutlinedIcon />,
                        },

                        {
                          label: "Heavy",
                          icon: <OpacityOutlinedIcon />,
                        },
                      ].map((item, index) => {
                        const active =
                          selectedDirt === item.label;

                        return (
                          <Box
                            key={index}
                            onClick={() =>
                              setSelectedDirt(
                                item.label
                              )
                            }
                            sx={{
                              width: "110px",
                              height: "82px",

                              borderRadius: "10px",

                              border: active
                                ? "2px solid #111"
                                : "1px solid #DDD",

                              display: "flex",
                              flexDirection:
                                "column",

                              alignItems: "center",
                              justifyContent:
                                "center",

                              cursor: "pointer",
                            }}
                          >
                            <Box
                              sx={{
                                mb: 1,
                                color: "#555",
                              }}
                            >
                              {item.icon}
                            </Box>

                            <Typography
                              sx={{
                                fontSize: "12px",
                                color: "#333",
                              }}
                            >
                              {item.label}
                            </Typography>
                          </Box>
                        );
                      })}
                    </Box>
                  </Box>
                </Box>

                {/* NEXT */}
                <Button
                  onClick={() => setStep(2)}
                  sx={{
                    mt: 7,

                    width: "220px",
                    height: "48px",

                    borderRadius: "8px",

                    background: "#7209B7",

                    color: "#fff",

                    textTransform: "none",

                    "&:hover": {
                      background: "#5B00A6",
                    },
                  }}
                >
                  Next Step
                </Button>
              </>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <>
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: 700,
                    mb: 4,
                  }}
                >
                  2. Customize Your Service
                </Typography>

                <Box
                  sx={{
                    display: "grid",

                    gridTemplateColumns: {
                      xs: "1fr",
                      md: "1fr 1fr",
                    },

                    gap: 3,
                  }}
                >
                  {[
                    ["Oil Stain Removal", "+$45"],

                    ["Eco-Chemical Treatment", "+$29"],

                    ["Mold & Moss Prevention", "+$35"],

                    ["Surface Sealing", "+$89"],
                  ].map((item, index) => {
                    const active =
                      selectedAddons.includes(
                        item[0]
                      );

                    return (
                      <Box
                        key={index}
                        onClick={() =>
                          toggleAddon(item[0])
                        }
                        sx={{
                          height: "62px",

                          borderRadius: "10px",

                          border: active
                            ? "2px solid #111"
                            : "1px solid #DDD",

                          display: "flex",
                          alignItems: "center",
                          justifyContent:
                            "space-between",

                          px: 2,

                          cursor: "pointer",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "14px",
                          }}
                        >
                          {item[0]}
                        </Typography>

                        <Typography
                          sx={{
                            color: "#16A34A",
                            fontWeight: 600,
                          }}
                        >
                          {item[1]}
                        </Typography>
                      </Box>
                    );
                  })}
                </Box>

                <Button
                  onClick={() => setStep(3)}
                  sx={{
                    mt: 7,

                    width: "220px",
                    height: "48px",

                    borderRadius: "8px",

                    background: "#7209B7",

                    color: "#fff",

                    textTransform: "none",
                  }}
                >
                  Continue
                </Button>
              </>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <>
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: 700,
                    mb: 4,
                  }}
                >
                  3. When should we come?
                </Typography>

                <Typography
                  sx={{
                    fontSize: "16px",
                    color: "#555",
                    mb: 5,
                  }}
                >
                  Select your preferred date and
                  available time slot.
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    gap: 3,
                    flexWrap: "wrap",
                  }}
                >
                  {[
                    "09:00 AM - 12:00 PM",
                    "12:00 PM - 03:00 PM",
                    "03:00 PM - 06:00 PM",
                  ].map((item, index) => (
                    <Button
                      key={index}
                      sx={{
                        height: "48px",

                        borderRadius: "8px",

                        background:
                          index === 2
                            ? "#000"
                            : "#F2F2F2",

                        color:
                          index === 2
                            ? "#fff"
                            : "#333",

                        textTransform: "none",

                        px: 4,
                      }}
                    >
                      {item}
                    </Button>
                  ))}
                </Box>
              </>
            )}
          </Box>

          {/* RIGHT SIDE */}
          <Box>
            {/* ESTIMATE CARD */}
            <Box
              sx={{
                border: "1px solid #ECECEC",

                borderRadius: "14px",

                p: 3,

                position: "sticky",
                top: 100,
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  mb: 4,
                }}
              >
                Your Estimate
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "13px",
                  }}
                >
                  • {selectedSurface}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "13px",
                  }}
                >
                  • {selectedTask}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "13px",
                  }}
                >
                  • {selectedDirt} Dirt Level
                </Typography>

                {selectedAddons.map(
                  (item, index) => (
                    <Typography
                      key={index}
                      sx={{
                        fontSize: "13px",
                      }}
                    >
                      • {item}
                    </Typography>
                  )
                )}
              </Box>

              <Box
                sx={{
                  mt: 4,

                  background: "#F5F5F5",

                  borderRadius: "10px",

                  p: 2.5,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "10px",

                    color: "#777",

                    mb: 1,
                  }}
                >
                  ESTIMATED TOTAL
                </Typography>

                <Typography
                  sx={{
                    fontSize: "24px",

                    fontWeight: 700,

                    color: "#111",
                  }}
                >
                  $199 - $299
                </Typography>
              </Box>

              <Button
                sx={{
                  mt: 3,

                  width: "100%",
                  height: "48px",

                  borderRadius: "8px",

                  background: "#7209B7",

                  color: "#fff",

                  textTransform: "none",
                }}
              >
                Confirm Booking
              </Button>

              <Box
                sx={{
                  mt: 4,

                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                {[
                  {
                    icon: <VerifiedOutlinedIcon />,
                    text: "No hidden charges, ever",
                  },

                  {
                    icon: <CreditCardOutlinedIcon />,
                    text: "Pay after service is done",
                  },

                  {
                    icon: <ShieldOutlinedIcon />,
                    text: "Verified professionals",
                  },
                ].map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                    }}
                  >
                    <Box
                      sx={{
                        color: "#7209B7",
                      }}
                    >
                      {item.icon}
                    </Box>

                    <Typography
                      sx={{
                        fontSize: "12px",
                        color: "#555",
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* REVIEW */}
            <Box
              sx={{
                mt: 3,

                border: "1px solid #ECECEC",

                borderRadius: "12px",

                p: 2,

                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Avatar
                src="/images/booking/user.jpg"
                sx={{
                  width: 42,
                  height: 42,
                }}
              />

              <Box>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#FFB400",

                    mb: 0.5,
                  }}
                >
                  ★★★★★
                </Typography>

                <Typography
                  sx={{
                    fontSize: "11px",

                    color: "#555",

                    lineHeight: 1.6,
                  }}
                >
                  “Absolutely brilliant job on my
                  driveway. Looks brand new!”
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}