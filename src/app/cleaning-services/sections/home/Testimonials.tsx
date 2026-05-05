"use client";

import { Box, Container, Grid, Typography, Paper, Avatar } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const testimonials = [
  {
    name: "Sarah J.",
    role: "Homeowner in Dallas",
    text: "The pressure washing service was incredible. They removed stains I thought were permanent. Highly recommend!",
    image: "/images/cleaning/u1.jpg",
  },
  {
    name: "Michael R.",
    role: "Homeowner in Dallas",
    text: "Weekly lawn care from ABC has been a game-changer. My yard looks better than it ever has. Reliable and professional.",
    image: "/images/cleaning/u2.jpg",
  },
  {
    name: "Emily D.",
    role: "Property Manager",
    text: "Fast, clean, and professional. The window cleaning was spotless and the crew was courteous.",
    image: "/images/cleaning/u3.jpg",
  },
];

export default function Testimonials() {
  return (
    <Box sx={{ py: 10, backgroundColor: "#fff" }}>
      <Container maxWidth="lg">
        <Typography sx={{ fontSize: "22px", fontWeight: 700, mb: 4 }}>
          What Our Clients Say
        </Typography>

        <Grid container spacing={3}>
          {testimonials.map((t, i) => (
            <Grid key={i} size={{ xs: 12, md: 4 }}>
              <Paper sx={{ p: 3, borderRadius: "12px" }}>
                <Box sx={{ display: "flex", mb: 1 }}>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <StarIcon key={i} sx={{ fontSize: 16, color: "#16a34a" }} />
                  ))}
                </Box>

                <Typography sx={{ fontSize: "13px", color: "#6b7280", mb: 2 }}>
                  {t.text}
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Avatar
                    src={t.image}
                    alt={t.name}
                    sx={{ width: 32, height: 32 }}
                  />
                  <Box>
                    <Typography sx={{ fontSize: "13px", fontWeight: 600 }}>
                      {t.name}
                    </Typography>
                    <Typography sx={{ fontSize: "11px", color: "#6b7280" }}>
                      {t.role}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
