"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";

export default function ConsultingHeroSection() {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: 420, md: 600 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        src="/images/legal/consulting-hero-bg.jpg"
        alt="Online Legal Consulting"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.72) 100%)",
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "2.2rem", md: "3.6rem" },
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "#ffffff",
            mb: 2.5,
          }}
        >
          Online Legal Consulting
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "0.72rem", md: "0.78rem" },
            lineHeight: 2,
            color: "rgba(255,255,255,0.82)",
            maxWidth: 920,
            mx: "auto",
            mb: 1.5,
          }}
        >
          Connect with top Indian lawyers. Lex Litigation offers reliable legal
          consultation under Indian law on business disputes, contracts,
          property matters, housing society issues, criminal matters, wills &
          estate planning, defamation, cybercrime, matrimonial disputes, and
          more all through secure online consultation.
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "0.72rem", md: "0.78rem" },
            lineHeight: 2,
            color: "rgba(255,255,255,0.82)",
            maxWidth: 920,
            mx: "auto",
            mb: 4,
          }}
        >
          We provide legal consultation to clients across India, as well as NRI,
          OCI, and PIO clients based in the USA, UK, Australia, Canada, and
          Europe requiring Indian legal expertise globally.
        </Typography>

        <Button
          component={Link}
          href="/legal-services/contact"
          variant="contained"
          sx={{
            backgroundColor: "#ffffff",
            color: "#111827",
            borderRadius: "4px",
            px: 4,
            py: 1.15,
            minWidth: 130,
            textTransform: "none",
            fontSize: "0.78rem",
            fontWeight: 500,
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#f3f4f6",
              boxShadow: "none",
            },
          }}
        >
          Contact Now
        </Button>
      </Container>
    </Box>
  );
}
