"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Stack,
} from "@mui/material";
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PaymentsIcon from "@mui/icons-material/Payments";
import EnergySavingsLeafOutlinedIcon from '@mui/icons-material/EnergySavingsLeafOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';

const features = [
  {
    icon: <BadgeOutlinedIcon sx={{ color: "#2563eb" }} />,
    title: "Verified Pros",
    desc: "All workers undergo rigorous background checks.",
  },
  {
    icon: <AccessTimeIcon sx={{ color: "#2563eb" }} />,
    title: "On-Time Arrival",
    desc: "We value your time as much as you do.",
  },
  {
    icon: <PaymentsIcon sx={{ color: "#2563eb" }} />,
    title: "Upfront Pricing",
    desc: "No hidden fees or surprise costs, ever.",
  },
  {
    icon: <EnergySavingsLeafOutlinedIcon sx={{ color: "#2563eb" }} />,
    title: "Eco-Friendly",
    desc: "Safe products for your family and pets.",
  },
];

export default function WhyChooseUs() {
  return (
    <Box sx={{ backgroundColor: "#f5f7fb", py: 10 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>

          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              sx={{
                fontSize: { xs: "28px", md: "36px" },
                fontWeight: 700,
                color: "#111827",
                lineHeight: 1.2,
                mb: 2,
              }}
            >
              Why <br />
              Homeowners <br />
              Trust ABC
            </Typography>

            <Typography
              sx={{
                color: "#6b7280",
                fontSize: "14px",
                mb: 3,
                maxWidth: "400px",
              }}
            >
              We combine years of experience with modern technology
              to deliver unbeatable results for your home.
            </Typography>

            <Stack
              direction="row"
              spacing={1.5}
              sx={{ alignItems: "center" }}
            >
              <Box
                sx={{
                  width: 34,
                  height: 34,
                  borderRadius: "50%",
                  backgroundColor: "#22c55e",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <VerifiedOutlinedIcon sx={{ color: "#fff", fontSize: 20 }} />
              </Box>

              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#374151",
                }}
              >
                100% Satisfaction Guaranteed
              </Typography>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Grid container spacing={3}>
              {features.map((item, i) => (
                <Grid key={i} size={{ xs: 12, sm: 6 }}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2.5,
                      borderRadius: "12px",
                      border: "1px solid #e5e7eb",
                      backgroundColor: "#ffffff",
                    }}
                  >
                    <Box sx={{ mb: 1 }}>{item.icon}</Box>

                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: "15px",
                        mb: 0.5,
                        color: "#111827",
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "13px",
                        color: "#6b7280",
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}