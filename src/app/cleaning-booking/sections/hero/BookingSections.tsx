"use client";

import { Box, Typography, Button, InputBase } from "@mui/material";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import GridViewIcon from "@mui/icons-material/GridView";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventIcon from "@mui/icons-material/Event";
import CreditCardOffIcon from "@mui/icons-material/CreditCardOff";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";

const services = [
  {
    title: "Pressure Washing",
    text: "Restore surfaces quickly with powerful, deep pressure cleaning.",
    image: "/images/cleaning/pressure.png",
  },
  {
    title: "Lawn care",
    text: "Keep your lawn healthy, green, and perfectly maintained.",
    image: "/images/cleaning/lawn.png",
  },
  {
    title: "Window Cleaning",
    text: "Crystal clear windows with streak-free shine every time.",
    image: "/images/cleaning/window.png",
  },
  {
    title: "Gutter Cleaning",
    text: "Prevent clogging and water damage with clean gutters.",
    image: "/images/cleaning/gutter.png",
  },
];

export default function BookingSections() {
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
          <Box
            sx={{
              background: "#EACCFB",
              borderRadius: "14px",
              overflow: "hidden",
              position: "relative",
              minHeight: {
                xs: "360px",
                md: "320px",
              },
              p: {
                xs: 3,
                md: 4,
              },
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "30px",
                  md: "38px",
                },
                fontWeight: 700,
                lineHeight: 1.15,
                color: "#111",
                maxWidth: "420px",
              }}
            >
              Done right, every time with ABC
            </Typography>

            <Typography
              sx={{
                mt: 4,
                fontSize: "14px",
                color: "#333",
                mb: 2,
              }}
            >
              Choose date and time
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
              }}
            >
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

            <Button
              sx={{
                mt: 3,
                background: "#000",
                color: "#fff",
                borderRadius: "6px",
                width: {
                  xs: "100%",
                  sm: "390px",
                },
                height: "48px",
                textTransform: "none",
                fontSize: "14px",
                fontWeight: 500,
                "&:hover": {
                  background: "#111",
                },
              }}
            >
              Next
            </Button>

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
                  xs: "180px",
                  md: "260px",
                },
                objectFit: "contain",
              }}
            />
          </Box>

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

        <Typography
          sx={{
            mt: {
              xs: 7,
              md: 9,
            },
            mb: 4,
            fontSize: {
              xs: "28px",
              md: "36px",
            },
            fontWeight: 700,
            color: "#111",
          }}
        >
          Our services
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              lg: "repeat(3, 1fr)",
            },
            gap: 3,
          }}
        >
          {services.map((item, index) => (
            <Box
              key={index}
              sx={{
                borderRadius: "12px",
                p: 2.5,
                background: "#F9F9F9",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 2,
                minHeight: "170px",

                ...(index === 3 && {
                  gridColumn: {
                    lg: "2 / 3",
                  },
                }),
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#111",
                    mb: 1,
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "13px",
                    color: "#666",
                    lineHeight: 1.7,
                    mb: 2,
                    maxWidth: "180px",
                  }}
                >
                  {item.text}
                </Typography>

                <Button
                  sx={{
                    border: "1px solid #DDDDDD",
                    background: "#FFFFFF",
                    color: "#000",
                    textTransform: "none",
                    borderRadius: "6px",
                    px: 2.5,
                    py: 0.8,
                    fontSize: "12px",
                    "&:hover": {
                      background: "#111",
                    },
                  }}
                >
                  Book Now
                </Button>
              </Box>

              <Box
                component="img"
                src={item.image}
                alt={item.title}
                sx={{
                  width: {
                    xs: "70px",
                    md: "90px",
                  },
                  objectFit: "contain",
                }}
              />
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            mt: {
              xs: 8,
              md: 10,
            },
            pt: {
              xs: 5,
              md: 7,
            },
            backgroundColor: "#f9f9f9",
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "32px",
                md: "46px",
              },
              fontWeight: 700,
              color: "#111",
              mb: {
                xs: 5,
                md: 7,
              },
            }}
          >
            Your satisfaction,{" "}
            <Box
              component="span"
              sx={{
                color: "#7209B7",
              }}
            >
              guaranteed
            </Box>
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(3,1fr)",
              },
              gap: 5,
            }}
          >
            {[
              {
                title: "Happiness Pledge",
                text: "If you’re not satisfied, we’ll work to make it right.",
                purple: true,
              },
              {
                title: "Vetted Taskers",
                text: "Taskers are always background checked before joining the platform.",
              },
              {
                title: "Dedicated Support",
                text: "Friendly service when you need us - every day of the week.",
              },
            ].map((item, index) => (
              <Box key={index}>
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontWeight: 700,
                    color: "#111",
                    mb: 2,
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "15px",
                    lineHeight: 1.8,
                    color: "#555",
                    mb: 3,
                    maxWidth: "320px",
                  }}
                >
                  {item.text}
                </Typography>

                {item.purple && (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      color: "#7209B7",
                      mb: 5,
                    }}
                  >
                    <ShieldOutlinedIcon />

                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: 600,
                      }}
                    >
                      Happiness Pledge
                    </Typography>
                  </Box>
                )}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
