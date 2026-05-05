"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Button,
  Stack,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const stats = [
  { value: "10,000+", label: "Homes Served" },
  { value: "50+", label: "Service Pros" },
  { value: "4.5", label: "Avg. Rating" },
  { value: "5+", label: "Years Exp." },
];

const services = [
  {
    title: "Pressure Washing",
    image: "/images/cleaning/service1.jpg",
    features: ["Driveway Deep Cleaning", "Siding Restoration"],
  },
  {
    title: "Lawn Care",
    image: "/images/cleaning/service2.jpg",
    features: ["Precision Mowing", "Seasonal Fertilizing"],
  },
  {
    title: "Window Cleaning",
    image: "/images/cleaning/service3.jpg",
    features: ["Interior & Exterior", "Screen & Track Detail"],
  },
  {
    title: "Gutter Cleaning",
    image: "/images/cleaning/service4.jpg",
    features: ["Debris Removal", "Downspout Testing"],
  },
];

export default function Services() {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "#f5f7fb",
          py: 5,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} sx={{ textAlign: "center" }}>
            {stats.map((stat, i) => (
              <Grid key={i} size={{ xs: 6, md: 3 }}>
                <Typography
                  sx={{
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "#2563eb",
                  }}
                >
                  {stat.value}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "13px",
                    color: "#6b7280",
                  }}
                >
                  {stat.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ backgroundColor: "#ffffff", py: 10 }}>

        <Container
          maxWidth="lg"
          sx={{ textAlign: "center", mb: 6 }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              letterSpacing: "1px",
              color: "#2563eb",
              fontWeight: 600,
              mb: 1,
            }}
          >
            EXPERT SOLUTIONS
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "28px", md: "36px" },
              fontWeight: 700,
              color: "#111827",
            }}
          >
            Our Premium Services
          </Typography>
        </Container>

        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {services.map((service, i) => (
              <Grid key={i} size={{ xs: 12, sm: 6, md: 3 }}>
                
                <Paper
                  elevation={0}
                  sx={{
                    borderRadius: "14px",
                    overflow: "hidden",
                    border: "1px solid #e5e7eb",
                    transition: "0.3s",
                    "&:hover": {
                      boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                    },
                  }}
                >

                  <Box
                    component="img"
                    src={service.image}
                    alt={service.title}
                    sx={{
                      width: "100%",
                      height: 160,
                      objectFit: "cover",
                    }}
                  />

                  <Box sx={{ p: 2.5 }}>
                    
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "#111827",
                        mb: 1.5,
                      }}
                    >
                      {service.title}
                    </Typography>

                    <Stack spacing={1.2} sx={{ mb: 2 }}>
                      {service.features.map((f, idx) => (
                        <Stack
                          key={idx}
                          direction="row"
                          spacing={1}
                          sx={{ alignItems: "center" }}
                        >
                          <CheckCircleIcon
                            sx={{
                              fontSize: 16,
                              color: "#16a34a",
                            }}
                          />

                          <Typography
                            sx={{
                              fontSize: "13px",
                              color: "#6b7280",
                            }}
                          >
                            {f}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>

                    <Button
                      fullWidth
                      variant="outlined"
                      sx={{
                        textTransform: "none",
                        borderRadius: "8px",
                        fontSize: "13px",
                        borderColor: "#2563eb",
                        color: "#2563eb",
                        "&:hover": {
                          backgroundColor: "#2563eb",
                          color: "#fff",
                          borderColor: "#2563eb",
                        },
                      }}
                    >
                      Book Now
                    </Button>

                  </Box>
                </Paper>

              </Grid>
            ))}
          </Grid>
        </Container>

      </Box>
    </Box>
  );
}