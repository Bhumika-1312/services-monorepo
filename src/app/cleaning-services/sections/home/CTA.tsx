"use client";

import { Box, Container, Typography, Button } from "@mui/material";

export default function CTA() {
  return (
    <Box sx={{ py: 10, backgroundColor: "#fff" }}>
      <Container maxWidth="lg">

        <Box
          sx={{
            background: "linear-gradient(135deg, #1e40af, #2563eb)",
            borderRadius: "14px",
            textAlign: "center",
            py: 6,
            px: 3,
            color: "#fff",
          }}
        >
          <Typography sx={{ fontSize: "22px", fontWeight: 700, mb: 1 }}>
            Ready for a Cleaner Home?
          </Typography>

          <Typography sx={{ fontSize: "13px", mb: 3 }}>
            Join 10,000+ satisfied homeowners. Get your custom quote in less than 2 minutes.
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#fff",
              color: "#1e40af",
              textTransform: "none",
              px: 3,
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "#f3f4f6",
              },
            }}
          >
            Get a Quote Today
          </Button>
        </Box>

      </Container>
    </Box>
  );
}