"use client";

import Link from "next/link";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import StepProgress from "./StepProgress";
import BookingSummaryCard from "./BookingSummaryCard";

const availableTimes = [
  "09:00 AM",
  "10:30 AM",
  "12:00 PM",
  "02:30 PM",
  "04:00 PM",
  "05:30 PM",
];

export default function ScheduleSection() {
  return (
    <Box
      sx={{
        backgroundColor: "#f3f7fb",
        minHeight: "100vh",
        pt: "110px",
        pb: 8,
      }}
    >
      <Container maxWidth="xl">
        {/* Step Progress */}
        <StepProgress step={3} />

        <Grid container spacing={4}>
          {/* Left Content */}
          <Grid size={{ xs: 12, lg: 8 }}>
            {/* Heading */}
            <Typography
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                fontWeight: 700,
                color: "#183b63",
                lineHeight: 1.15,
                mb: 2,
              }}
            >
              Schedule Your Consultation
            </Typography>

            <Typography
              sx={{
                fontSize: "0.95rem",
                lineHeight: 1.9,
                color: "#5f6670",
                maxWidth: 760,
                mb: 5,
              }}
            >
              Select your preferred consultation date and time. Our team will
              confirm the appointment and share all required details by email.
            </Typography>

            {/* Scheduling Card */}
            <Card
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                border: "1px solid #d8dee6",
                borderRadius: "4px",
                backgroundColor: "#ffffff",
              }}
            >
              {/* Date Picker */}
              <TextField
                fullWidth
                type="date"
                label="Preferred Date"
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
                sx={{ mb: 4 }}
              />

              {/* Available Times */}
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "#2f3439",
                  mb: 2,
                }}
              >
                Available Time Slots
              </Typography>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "repeat(2, 1fr)",
                    md: "repeat(3, 1fr)",
                  },
                  gap: 2,
                  mb: 4,
                }}
              >
                {availableTimes.map((time, index) => (
                  <Button
                    key={time}
                    variant={index === 0 ? "contained" : "outlined"}
                    sx={{
                      py: 1.2,
                      borderRadius: "2px",
                      textTransform: "none",
                      fontWeight: 600,
                      boxShadow: "none",
                      backgroundColor: index === 0 ? "#183b63" : undefined,
                      borderColor: index === 0 ? "#183b63" : "#d8dee6",
                      color: index === 0 ? "#ffffff" : "#475569",
                      "&:hover": {
                        backgroundColor: index === 0 ? "#0f2f5f" : "#f8fafc",
                        borderColor: index === 0 ? "#0f2f5f" : "#cbd5e1",
                        boxShadow: "none",
                      },
                    }}
                  >
                    {time}
                  </Button>
                ))}
              </Box>

              {/* Additional Notes */}
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Additional Notes (Optional)"
                placeholder="Share any specific points you would like to discuss during the consultation."
              />
            </Card>

            {/* Navigation Buttons */}
            <Box
              sx={{
                mt: 4,
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
              }}
            >
              <Link
                href="/ca-services/booking/details"
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "#cbd5e1",
                    color: "#475569",
                    px: 4,
                    py: 1.3,
                    borderRadius: "2px",
                    textTransform: "none",
                    fontWeight: 600,
                  }}
                >
                  Back
                </Button>
              </Link>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#183b63",
                  px: 5,
                  py: 1.3,
                  borderRadius: "2px",
                  textTransform: "none",
                  fontWeight: 600,
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#0f2f5f",
                    boxShadow: "none",
                  },
                }}
              >
                Confirm Booking
              </Button>
            </Box>
          </Grid>

          {/* Right Sidebar */}
          <Grid size={{ xs: 12, lg: 4 }}>
            <BookingSummaryCard showButton={false} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
