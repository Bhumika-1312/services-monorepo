"use client";

import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const data = [
  {
    q: "How quickly can I get a service?",
    a: "Most services can be scheduled within 24-48 hours. For urgent needs, please call us directly for same-day availability.",
  },
  {
    q: "Do I need to be home for the service?",
    a: "Not required for all services.",
  },
  {
    q: "What if it rains?",
    a: "We reschedule your service.",
  },
  {
    q: "Are your services pet-friendly?",
    a: "Yes, completely safe.",
  },
];

export default function FaqSection() {
  return (
    <Box sx={{ py: 10, background: "#f5f7fb" }}>
      <Container maxWidth="md">
        <Typography sx={title}>Common Questions</Typography>

        {data.map((item, i) => (
          <Accordion key={i} sx={accordion}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ fontSize: 14 }}>{item.q}</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Typography sx={{ fontSize: 13, color: "#6b7280" }}>
                {item.a}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
}

const title = {
  textAlign: "center",
  fontSize: 22,
  fontWeight: 700,
  mb: 4,
};

const accordion = {
  mb: 1,
  border: "1px solid #e5e7eb",
  boxShadow: "none",
  borderRadius: "8px !important",
};