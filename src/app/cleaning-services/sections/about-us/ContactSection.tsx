"use client";
import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  MenuItem,
  Stack,
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function ContactSection() {
  const [service, setService] = useState("");
  return (
    <Box sx={{ py: 10, background: "#fff" }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography sx={title}>Get in Touch</Typography>

            <Typography sx={subtitle}>
              Have questions or special requests? Our team is here to help you
              get the best service possible.
            </Typography>

            <Stack spacing={2}>
              <TextField label="Full Name" fullWidth size="small" />
              <TextField label="Email Address" fullWidth size="small" />

              <TextField
                select
                label="Service Needed"
                fullWidth
                size="small"
                value={service}
                onChange={(e) => setService(e.target.value)}
              >
                <MenuItem value="lawn">Lawn Care</MenuItem>
                <MenuItem value="cleaning">Cleaning</MenuItem>
              </TextField>

              <TextField
                multiline
                rows={4}
                label="Message"
                fullWidth
                size="small"
              />

              <Button variant="contained" sx={btn}>
                Send Message
              </Button>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                ...mapBox,
                backgroundImage: "url('/images/cleaning/map.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            <Grid container spacing={3}>
              <Grid size={{ xs: 6 }}>
                <Info
                  icon={<EmailIcon />}
                  title="Email Us"
                  text="hello@abchome.com"
                />
              </Grid>

              <Grid size={{ xs: 6 }}>
                <Info
                  icon={<PhoneIcon />}
                  title="Call Us"
                  text="(555) 123-4567"
                />
              </Grid>

              <Grid size={{ xs: 6 }}>
                <Info
                  icon={<AccessTimeIcon />}
                  title="Working Hours"
                  text="Mon-Sat: 8am - 6pm"
                />
              </Grid>

              <Grid size={{ xs: 6 }}>
                <Info
                  icon={<LocationOnIcon />}
                  title="Location"
                  text="123 Service Lane, Austin, TX"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

function Info({ icon, title, text }: any) {
  return (
    <Stack direction="row" spacing={1.5}>
      <Box sx={{ color: "#2563eb", display: "flex", alignItems: "center" }}>
        {icon}
      </Box>

      <Box>
        <Typography sx={{ fontSize: 13, fontWeight: 600 }}>{title}</Typography>

        <Typography sx={{ fontSize: 12, color: "#6b7280" }}>{text}</Typography>
      </Box>
    </Stack>
  );
}

const title = {
  fontSize: { xs: "24px", md: "28px" },
  fontWeight: 700,
  mb: 1,
};

const subtitle = {
  fontSize: "14px",
  color: "#6b7280",
  mb: 3,
};

const btn = {
  background: "#1e40af",
  textTransform: "none",
  fontWeight: 500,
  "&:hover": {
    background: "#1e3a8a",
  },
};

const mapBox = {
  height: 320,
  borderRadius: "12px",
  background: "#e5e7eb",
  mb: 3,
};
