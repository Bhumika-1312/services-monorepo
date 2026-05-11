"use client";

import { useState } from "react";
import { Box, Typography, InputBase, Button } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";

const services = [
  {
    id: "pressure",
    title: "Pressure Washing",
    icon: "/images/cleaning/pressure.png",
    image: "/images/booking/pressure-big.jpg",
    bg: "#DFF1FB",
    points: [
      "Deep cleans surfaces using high-powered professional equipment",
      "Restores surfaces to a like-new, fresh appearance",
    ],
    stat: "2000 +",
  },
  {
    id: "lawn",
    title: "Lawn care",
    icon: "/images/cleaning/lawn.png",
    image: "/images/booking/lawn-big.jpg",
    bg: "#F2EFCF",
    points: [
      "Expert care for lush, evenly maintained green spaces",
      "Keeps your lawn neat, green, and visually appealing",
    ],
    stat: "100 +",
  },
  {
    id: "window",
    title: "Window Cleaning",
    icon: "/images/cleaning/window.png",
    image: "/images/booking/window-big.jpg",
    bg: "#E5F4D8",
    points: [
      "Removes dust, stains, and streaks for crystal-clear glass",
      "Enhances brightness and clarity throughout your home",
    ],
    stat: "5000 +",
  },
  {
    id: "gutter",
    title: "Gutter Cleaning",
    icon: "/images/cleaning/gutter.png",
    image: "/images/booking/gutter-big.jpg",
    bg: "#EFD8F6",
    points: [
      "Thorough cleaning to avoid costly water damage",
      "Keeps gutters clear and functioning efficiently year-round",
    ],
    stat: "100 +",
  },
];

export default function HeroSection() {
  const [selected, setSelected] = useState(services[0]);

  return (
    <Box
      sx={{
        width: "100%",
        background: "#fff",
        position: "relative",
        overflow: "hidden",
        pt: {
          xs: "70px",
          md: "90px",
        },
        pb: {
          xs: "60px",
          md: "100px",
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: -80,
          right: -80,
          width: {
            xs: 180,
            md: 240,
          },
          height: {
            xs: 180,
            md: 240,
          },
          borderRadius: "50%",
          background: "#7209B7",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: 30,
          right: -40,
          width: {
            xs: 130,
            md: 180,
          },
          height: {
            xs: 130,
            md: 180,
          },
          borderRadius: "45%",
          background: "#EDE7A7",
          opacity: 0.9,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          left: {
            xs: -130,
            md: -120,
          },
          top: "20%",
          width: {
            xs: 220,
            md: 240,
          },
          height: {
            xs: 220,
            md: 240,
          },
          background: "#7209B7",
          borderRadius: "50%",
        }}
      />

      <Box
        sx={{
          maxWidth: "1280px",
          mx: "auto",
          px: {
            xs: 2,
            sm: 3,
            md: 4,
          },
          position: "relative",
          zIndex: 2,
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: 700,
            color: "#7209B7",
            lineHeight: 1.15,
            fontSize: {
              xs: "34px",
              sm: "48px",
              md: "62px",
            },
            maxWidth: "820px",
            mx: "auto",
          }}
        >
          Book trusted help for professional cleaning tasks
        </Typography>

        <Box
          sx={{
            width: "100%",
            maxWidth: "540px",
            mx: "auto",
            mt: 5,
            height: {
              xs: "52px",
              md: "56px",
            },
            border: "1px solid #D8D8D8",
            borderRadius: "999px",
            overflow: "hidden",
            display: "flex",
            background: "#fff",
          }}
        >
          <InputBase
            placeholder="What do you need help with?"
            sx={{
              flex: 1,
              px: 3,
              fontSize: "14px",
            }}
          />

          <Box
            sx={{
              width: "72px",
              background: "#7209B7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <SearchIcon
              sx={{
                color: "#fff",
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            maxWidth: "760px",
            mx: "auto",
            mt: 6,
            borderBottom: "1px solid #E6E6E6",
            pb: 3,
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr 1fr",
              sm: "repeat(4,1fr)",
            },
            gap: {
              xs: 3,
              md: 4,
            },
          }}
        >
          {services.map((item) => (
            <Box
              key={item.id}
              onClick={() => setSelected(item)}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1,
                cursor: "pointer",
              }}
            >
              <Box
                component="img"
                src={item.icon}
                alt={item.title}
                sx={{
                  width: {
                    xs: 42,
                    md: 52,
                  },
                  height: {
                    xs: 42,
                    md: 52,
                  },
                  objectFit: "contain",
                }}
              />

              <Typography
                sx={{
                  fontSize: {
                    xs: "12px",
                    md: "13px",
                  },
                  color: selected.id === item.id ? "#000" : "#888",
                  fontWeight: selected.id === item.id ? 600 : 400,
                  borderBottom:
                    selected.id === item.id ? "2px solid #000" : "none",
                  pb: 0.5,
                }}
              >
                {item.title}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            mt: {
              xs: 5,
              md: 7,
            },
            background: selected.bg,
            borderRadius: {
              xs: "22px",
              md: "26px",
            },
            p: {
              xs: 2,
              sm: 3,
              md: 5,
            },
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              minHeight: {
                xs: "auto",
                lg: "520px",
              },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={selected.image}
              alt={selected.title}
              sx={{
                width: {
                  xs: "100%",
                  lg: "86%",
                },
                ml: {
                  xs: 0,
                  lg: "120px",
                },
                height: {
                  xs: "260px",
                  sm: "360px",
                  md: "460px",
                },
                objectFit: "cover",
                borderRadius: "12px",
                display: "block",
              }}
            />

            <Box
              sx={{
                position: {
                  xs: "relative",
                  lg: "absolute",
                },
                left: {
                  lg: "18px",
                },
                top: {
                  lg: "50%",
                },
                transform: {
                  lg: "translateY(-50%)",
                },
                mt: {
                  xs: "-30px",
                  lg: 0,
                },
                width: {
                  xs: "100%",
                  sm: "380px",
                  md: "420px",
                  lg: "448px",
                },

                height: {
                  xs: "auto",
                  lg: "330px",
                },
                background: "#fff",
                borderRadius: "8px",
                p: {
                  xs: 3,
                  md: "34px",
                },
                boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                zIndex: 3,
              }}
            >
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: 600,
                  mb: 3,
                  color: "#111",
                }}
              >
                {selected.title}
              </Typography>

              {selected.points.map((point, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    alignItems: "flex-start",
                    mb: 2.5,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "13px",
                      color: "#777",
                      mt: "2px",
                    }}
                  >
                    ✓
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: {
                        xs: "13px",
                        md: "14px",
                      },
                      color: "#555",
                      lineHeight: 1.7,
                    }}
                  >
                    {point}
                  </Typography>
                </Box>
              ))}

              <Box
                sx={{
                  mt: 3,
                  height: "42px",
                  borderRadius: "4px",
                  background: "#F4F4F4",
                  display: "flex",
                  alignItems: "center",
                  px: 1.5,
                }}
              >
                <LocationOnOutlinedIcon
                  sx={{
                    fontSize: 15,
                    color: "#888",
                    mr: 1,
                  }}
                />

                <InputBase
                  placeholder="Service location"
                  sx={{
                    flex: 1,
                    fontSize: "12px",
                    color: "#444",
                  }}
                />

                <NearMeOutlinedIcon
                  sx={{
                    fontSize: 15,
                    color: "#111",
                  }}
                />
              </Box>

              <Button
                sx={{
                  mt: 2.5,
                  background: "#000",
                  color: "#fff",
                  textTransform: "none",
                  borderRadius: "4px",
                  px: 2.5,
                  py: 0.9,
                  minWidth: "92px",
                  fontSize: "12px",
                  fontWeight: 500,
                  "&:hover": {
                    background: "#111",
                  },
                }}
              >
                Get price
              </Button>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            mt: {
              xs: 6,
              md: 8,
            },

            width: "100%",

            maxWidth: "1180px",

            mx: "auto",

            display: "grid",

            gridTemplateColumns: {
              xs: "1fr 1fr",
              sm: "repeat(2,1fr)",
              md: "repeat(4,1fr)",
            },

            gap: {
              xs: 4,
              sm: 5,
              md: 8,
              lg: 10,
            },

            alignItems: "flex-start",
          }}
        >
          {services.map((item) => (
            <Box key={item.id}>
              <Typography
                sx={{
                  fontSize: {
                    xs: "16px",
                    sm: "18px",
                    md: "20px",
                  },

                  fontWeight: 500,

                  color: "#1E1E1E",

                  lineHeight: 1.4,

                  mb: 1.2,
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: {
                    xs: "32px",
                    sm: "38px",
                    md: "46px",
                  },

                  fontWeight: 700,

                  lineHeight: 1,

                  color: "#7209B7",

                  letterSpacing: "-1px",
                }}
              >
                {item.stat}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
