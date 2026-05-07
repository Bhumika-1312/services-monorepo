import Link from "next/link";
import { Box, Typography, Container } from "@mui/material";

export default function Home() {
  return (
    <Container sx={{ py: 10 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Our Services
      </Typography>

      <Box sx={{ display: "flex", gap: 4 }}>
        <Link href="/cleaning-services">Cleaning Services</Link>
        <Link href="/car-detailing">Car Detailing</Link>
        <Link href="/cleaning-booking">Cleaning Booking</Link>
      </Box>
    </Container>
  );
}