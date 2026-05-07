"use client";

import Link from "next/link";

import {
  Box,
  Typography,
  Button,
} from "@mui/material";

import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import EnergySavingsLeafOutlinedIcon from "@mui/icons-material/EnergySavingsLeafOutlined";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

export default function JourneySection() {
  return (
    <Box
      sx={{
        width: "100%",
        background: "#fff",

        py: {
          xs: "70px",
          md: "110px",
        },

        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* JOURNEY GREY SECTION */}
      <Box
        sx={{
          background: "#F7F7F7",

          borderRadius: "24px",

          p: {
            xs: 3,
            md: 5,
          },

          mb: {
            xs: 8,
            md: 10,
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "1280px",

            mx: "auto",

            px: {
              xs: 2,
              sm: 3,
              md: 5,
              lg: 6,
            },

            position: "relative",
            zIndex: 2,
          }}
        >
          {/* TITLE */}
          <Box
            sx={{
              textAlign: "center",

              mb: {
                xs: 6,
                md: 8,
              },
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "34px",
                  md: "44px",
                },

                fontWeight: 700,

                color: "#222",

                mb: 1.5,
              }}
            >
              The Journey
            </Typography>

            <Typography
              sx={{
                color: "#666",

                fontSize: {
                  xs: "14px",
                  md: "15px",
                },
              }}
            >
              From humble beginnings to your local home care experts.
            </Typography>
          </Box>

          {/* MAIN GRID */}
          <Box
            sx={{
              display: "grid",

              gridTemplateColumns: {
                xs: "1fr",
                lg: "760px 320px",
              },

              gap: 3,

              alignItems: "start",
            }}
          >
            {/* LEFT SIDE */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              {/* TOP IMAGE CARD */}
              <Box
                sx={{
                  position: "relative",

                  width: "100%",

                  height: {
                    xs: "300px",
                    md: "300px",
                  },

                  borderRadius: "14px",

                  overflow: "hidden",

                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                <Box
                  component="img"
                  src="/images/booking/journey-lawn.jpg"
                  alt="Journey"

                  sx={{
                    position: "absolute",
                    inset: 0,

                    width: "100%",
                    height: "100%",

                    objectFit: "cover",
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,

                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.05))",
                  }}
                />

                <Box
                  sx={{
                    position: "relative",

                    zIndex: 2,

                    p: {
                      xs: 3,
                      md: 4,
                    },

                    maxWidth: "520px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#D6FF73",

                      fontSize: "13px",

                      fontWeight: 600,

                      mb: 1.5,
                    }}
                  >
                    2010: The Spark
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: {
                        xs: "32px",
                        md: "42px",
                      },

                      fontWeight: 700,

                      color: "#fff",

                      lineHeight: 1.15,

                      mb: 2,
                    }}
                  >
                    From a single lawnmower...
                  </Typography>

                  <Typography
                    sx={{
                      color: "#F3F3F3",

                      lineHeight: 1.9,

                      fontSize: "15px",
                    }}
                  >
                    ABC started as a one-man operation
                    with nothing but a push-mower and
                    a passion for helping neighbors.
                  </Typography>
                </Box>
              </Box>

              {/* BOTTOM CARDS */}
              <Box
                sx={{
                  display: "flex",

                  flexDirection: {
                    xs: "column",
                    lg: "row",
                  },

                  gap: 3,
                }}
              >
                {/* GREEN CARD */}
                <Box
                  sx={{
                    width: {
                      xs: "100%",
                      lg: "446px",
                    },

                    minWidth: {
                      lg: "446px",
                    },

                    maxWidth: {
                      lg: "446px",
                    },

                    height: {
                      xs: "auto",
                      lg: "276px",
                    },

                    minHeight: {
                      lg: "276px",
                    },

                    maxHeight: {
                      lg: "276px",
                    },

                    background: "#67F27B",

                    borderRadius: "14px",

                    p: {
                      xs: 3,
                      md: 4,
                    },

                    flexShrink: 0,
                  }}
                >
                  <EnergySavingsLeafOutlinedIcon
                    sx={{
                      fontSize: 28,
                      color: "#0F5132",

                      mb: 2,
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: {
                        xs: "28px",
                        md: "32px",
                      },

                      fontWeight: 700,

                      color: "#0F5132",

                      mb: 2,
                    }}
                  >
                    Eco-Innovation
                  </Typography>

                  <Typography
                    sx={{
                      color: "#155724",

                      lineHeight: 1.9,

                      fontSize: "14px",

                      maxWidth: "340px",
                    }}
                  >
                    In 2018, we transitioned to
                    sustainable cleaning supplies
                    and water-saving landscaping
                    techniques, setting a new
                    industry standard.
                  </Typography>
                </Box>

                {/* WHITE CARD */}
                <Box
                  sx={{
                    width: {
                      xs: "100%",
                      lg: "662px",
                    },

                    minWidth: {
                      lg: "662px",
                    },

                    maxWidth: {
                      lg: "662px",
                    },

                    height: {
                      xs: "auto",
                      lg: "279px",
                    },

                    minHeight: {
                      lg: "279px",
                    },

                    maxHeight: {
                      lg: "279px",
                    },

                    background: "#fff",

                    borderRadius: "14px",

                    p: {
                      xs: 3,
                      md: 4,
                    },

                    borderLeft: "4px solid #2563EB",

                    display: "flex",
                    alignItems: "center",

                    flexShrink: 0,
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "28px",
                          md: "38px",
                        },

                        fontWeight: 700,

                        color: "#222",

                        lineHeight: 1.2,

                        mb: 2,
                      }}
                    >
                      ...to a full-service team.
                    </Typography>

                    <Typography
                      sx={{
                        color: "#666",

                        lineHeight: 1.9,

                        fontSize: "15px",

                        maxWidth: "520px",
                      }}
                    >
                      Today, ABC Home Services is
                      the region's leading
                      multi-disciplinary home care
                      provider. We handle everything
                      from complex electrical work
                      to intricate landscaping.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* BLUE CARD */}
            <Box
              sx={{
                background: "#0047B3",

                borderRadius: "14px",

                p: {
                  xs: 4,
                  md: 5,
                },

                width: "100%",

                height: {
                  xs: "240px",
                  md: "300px",
                },

                display: "flex",
                flexDirection: "column",

                justifyContent: "center",
                alignItems: "center",

                textAlign: "center",

                color: "#fff",
              }}
            >
              <GroupsOutlinedIcon
                sx={{
                  fontSize: 40,

                  mb: 3,
                }}
              />

              <Typography
                sx={{
                  fontSize: {
                    xs: "24px",
                    md: "30px",
                  },

                  fontWeight: 700,

                  mb: 2,
                }}
              >
                Growing Together
              </Typography>

              <Typography
                sx={{
                  lineHeight: 1.9,

                  fontSize: "15px",

                  color: "#E7EFFF",

                  maxWidth: "220px",
                }}
              >
                Within 5 years, we expanded to
                a fleet of 10 vans and 25
                full-time staff.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* STATS */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "1280px",

          mx: "auto",

          px: {
            xs: 2,
            sm: 3,
            md: 5,
            lg: 6,
          },

          display: "grid",

          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(3,1fr)",
          },

          gap: {
            xs: 5,
            md: 8,
          },

          textAlign: "center",

          mb: {
            xs: 8,
            md: 10,
          },
        }}
      >
        {[
          {
            value: "10,000+",
            label: "HOMES SERVED",
          },
          {
            value: "50+",
            label: "PROFESSIONAL EXPERTS",
          },
          {
            value: "4.2/5",
            label: "AVERAGE RATING",
            star: true,
          },
        ].map((item, index) => (
          <Box key={index}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 0.5,
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "42px",
                    md: "54px",
                  },

                  fontWeight: 700,

                  color: "#7209B7",

                  lineHeight: 1,
                }}
              >
                {item.value}
              </Typography>

              {item.star && (
                <StarRoundedIcon
                  sx={{
                    color: "#67F27B",
                  }}
                />
              )}
            </Box>

            <Typography
              sx={{
                color: "#777",

                fontSize: "13px",

                letterSpacing: "2px",

                mt: 1.5,
              }}
            >
              {item.label}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* CTA */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "1280px",

          mx: "auto",

          px: {
            xs: 2,
            sm: 3,
            md: 5,
            lg: 6,
          },
        }}
      >
        <Box
          sx={{
            background: "#F4EFFA",

            borderRadius: "16px",

            px: {
              xs: 3,
              md: 6,
            },

            py: {
              xs: 4,
              md: 5,
            },

            display: "flex",

            flexDirection: {
              xs: "column",
              md: "row",
            },

            alignItems: {
              xs: "flex-start",
              md: "center",
            },

            justifyContent: "space-between",

            gap: 4,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: {
                  xs: "32px",
                  md: "42px",
                },

                fontWeight: 700,

                color: "#222",

                mb: 2,
              }}
            >
              Ready to Experience Hassle-Free Cleaning?
            </Typography>

            <Typography
              sx={{
                color: "#666",

                lineHeight: 1.9,

                maxWidth: "620px",
              }}
            >
              Ready to experience the professional care your home deserves?
              Book a service today and see the difference reliability makes.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: 2,

              flexWrap: "wrap",
            }}
          >
            <Link
              href="/cleaning-booking/services"
              style={{
                textDecoration: "none",
              }}
            >
              <Button
                sx={{
                  height: "48px",

                  px: 4,

                  borderRadius: "10px",

                  background: "#7209B7",

                  color: "#fff",

                  textTransform: "none",

                  fontWeight: 600,

                  "&:hover": {
                    background: "#6200A0",
                  },
                }}
              >
                Book Service
              </Button>
            </Link>

            <Button
              variant="outlined"
              sx={{
                height: "48px",

                px: 4,

                borderRadius: "10px",

                borderColor: "#CFCFCF",

                color: "#222",

                textTransform: "none",

                fontWeight: 600,
              }}
            >
              Explore Services
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}