"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import BuildIcon from "@mui/icons-material/Build";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

const steps = [
  { icon: <EventIcon />, title: "Book Online", desc: "Choose your service and schedule in seconds." },
  { icon: <TaskAltIcon />, title: "Get Confirmed", desc: "Instant booking confirmation via email or SMS." },
  { icon: <BuildIcon />, title: "Expert Service", desc: "Our pros arrive on time and get the job done right." },
  { icon: <EmojiEmotionsIcon />, title: "Enjoy Results", desc: "Your home looks like new, guaranteed." },
];

export default function ProcessSection() {
  return (
    <Box sx={{ py: 8, backgroundColor: "#f5f7fb", textAlign: "center" }}>
      <Container maxWidth="lg">

        <Typography sx={{ fontSize: "24px", fontWeight: 700, mb: 5 }}>
          Simple 4-Step Process
        </Typography>

        <Grid container spacing={4}>
          {steps.map((step, i) => (
            <Grid key={i} size={{ xs: 6, md: 3 }}>
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  mx: "auto",
                  mb: 1,
                  borderRadius: "50%",
                  backgroundColor: "#eef2ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#2563eb",
                }}
              >
                {step.icon}
              </Box>

              <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
                {step.title}
              </Typography>

              <Typography sx={{ fontSize: "12px", color: "#6b7280" }}>
                {step.desc}
              </Typography>
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
}