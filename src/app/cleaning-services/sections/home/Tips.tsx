"use client";

import { Box, Container, Grid, Typography } from "@mui/material";

const tips = [
  { img: "/images/cleaning/t1.jpg", title: "How to Keep Your Lawn Green in Mid-Summer Heat" },
  { img: "/images/cleaning/t2.jpg", title: "The Hidden Dangers of Clogged Gutters You Should Know" },
  { img: "/images/cleaning/t3.jpg", title: "Professional Secrets to Streak-Free Window Cleaning" },
];

export default function Tips() {
  return (
    <Box sx={{ py: 10, backgroundColor: "#f5f7fb" }}>
      <Container maxWidth="lg">

        <Typography sx={{ textAlign: "center", fontWeight: 700, fontSize: "22px", mb: 4 }}>
          Tips for a Beautiful Home
        </Typography>

        <Grid container spacing={3}>
          {tips.map((tip, i) => (
            <Grid key={i} size={{ xs: 12, md: 4 }}>
              <Box>
                <Box component="img" src={tip.img} sx={{
                  width: "100%",
                  height: 224,
                  borderRadius: "10px",
                  objectFit: "cover",
                  mb: 1
                }} />

                <Typography sx={{ fontSize: "13px", fontWeight: 600 }}>
                  {tip.title}
                </Typography>

                <Typography sx={{ fontSize: "12px", color: "#2563eb", mt: 0.5 }}>
                  Read More →
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
}