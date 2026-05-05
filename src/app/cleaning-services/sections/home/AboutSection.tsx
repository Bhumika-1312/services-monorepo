"use client";

import { Box, Container, Typography, Grid } from "@mui/material";

export default function AboutSection() {
  return (
    <Box sx={{ py: 10, backgroundColor: "#fff" }}>
      <Container maxWidth="lg">

        <Grid
          container
          spacing={6}
          sx={{ alignItems: "center" }}
        >

          <Grid size={{ xs: 12, md: 6 }}>
            <Grid container spacing={2}>

              <Grid size={{ xs: 6 }}>
                <Box component="img" src="/images/cleaning/a1.jpg" sx={imgStyle} />
              </Grid>

              <Grid size={{ xs: 6 }}>
                <Box component="img" src="/images/cleaning/a2.jpg" sx={imgStyle} />
              </Grid>

              <Grid size={{ xs: 6 }}>
                <Box component="img" src="/images/cleaning/a3.jpg" sx={imgStyle} />
              </Grid>

              <Grid size={{ xs: 6 }}>
                <Box component="img" src="/images/cleaning/a4.jpg" sx={imgStyle} />
              </Grid>

            </Grid>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography sx={title}>
              We’ve been serving homes for years
            </Typography>

            <Typography sx={desc}>
              Our legacy is built on the satisfaction of thousands of families
              who trust us with their most valuable asset — their home.
              We use industry-grade equipment and eco-friendly techniques
              to ensure every service is spotless.
            </Typography>

            <Typography sx={link}>
              Learn More About Our Journey →
            </Typography>
          </Grid>

        </Grid>

      </Container>
    </Box>
  );
}


const imgStyle = {
  width: "100%",
  height: 150,
  objectFit: "cover",
  borderRadius: "12px",
};

const title = {
  fontSize: { xs: "26px", md: "32px" },
  fontWeight: 700,
  mb: 2,
  color: "#111827",
};

const desc = {
  fontSize: "14px",
  color: "#6b7280",
  mb: 2,
  maxWidth: "420px",
};

const link = {
  fontSize: "14px",
  color: "#2563eb",
  fontWeight: 500,
  cursor: "pointer",
};