"use client";

import { Box, Container, Grid, Typography } from "@mui/material";

export default function StorySection() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#ffffff" }}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={6}
          sx={{
            alignItems: "center",
          }}
        >
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              sx={{
                fontSize: { xs: "2rem", md: "2.8rem" },
                fontWeight: 700,
                color: "#222",
                mb: 3,
                lineHeight: 1.2,
              }}
            >
              The heart behind the table
            </Typography>

            <Typography
              sx={{
                color: "#666",
                fontSize: "1rem",
                lineHeight: 1.9,
                mb: 2,
              }}
            >
              It started with a simple observation: finding the perfect table
              for a special occasion shouldn&apos;t feel like a chore.
            </Typography>

            <Typography
              sx={{
                color: "#666",
                fontSize: "1rem",
                lineHeight: 1.9,
              }}
            >
              Today, our mission is to help diners connect with extraordinary
              restaurants and unforgettable moments.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              component="img"
              src="/images/restaurant/story-chef.jpg"
              alt="Chef plating food"
              sx={{
                width: "100%",
                borderRadius: "14px",
                objectFit: "cover",
                boxShadow: "0 18px 40px rgba(0,0,0,0.12)",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
