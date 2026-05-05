"use client";

import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Hero() {
  return (
    <Box sx={{ backgroundColor: "#fff", py: 10 }}>
      <Container maxWidth="lg">
        
        <Grid container spacing={6} sx={{ alignItems: "center" }}>
          
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              sx={{
                fontSize: { xs: "32px", md: "40px" },
                fontWeight: 700,
                color: "#111827",
                lineHeight: 1.2,
                mb: 3,
              }}
            >
              Affordable & <br />
              Professional Cleaning <br />
              Services
            </Typography>

            <Typography
              sx={{
                color: "#6b7280",
                fontSize: "15px",
                mb: 4,
                maxWidth: "480px",
              }}
            >
              Lawn care, pressure washing, window and gutter cleaning —
              done right at your doorstep with precision and care.
            </Typography>

            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  textTransform: "none",
                  px: 3,
                  py: 1.2,
                  borderRadius: "8px",
                  fontWeight: 600,
                  backgroundColor: "#2563eb",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#1d4ed8",
                  },
                }}
              >
                Get Instant Quote
              </Button>

              <Button
                variant="outlined"
                sx={{
                  textTransform: "none",
                  px: 3,
                  py: 1.2,
                  borderRadius: "8px",
                  fontWeight: 500,
                  borderColor: "#d1d5db",
                  color: "#374151",
                  "&:hover": {
                    borderColor: "#2563eb",
                    color: "#2563eb",
                    backgroundColor: "#f9fafb",
                  },
                }}
              >
                Book Service
              </Button>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ position: "relative" }}>
              
              <Box
                component="img"
                src="/images/cleaning/hero.png"
                alt="cleaning"
                sx={{
                  width: "100%",
                  borderRadius: "20px",
                  objectFit: "cover",
                }}
              />

            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}