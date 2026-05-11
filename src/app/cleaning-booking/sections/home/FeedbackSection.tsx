"use client";

import { useState } from "react";

import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FeedbackSection() {
  const testimonials = [
    {
      title: "Lawn Care",
      text: "David did an awesome job assembling crib and dresser for nursery. Really appreciate this! He cleaned up the area after his work, organized the boxes for easy disposal.",
    },
    {
      title: "Window Cleaning",
      text: "Michael did a great job helping us install frameless glass hinged shower doors with an unusual set up. He was patient and willing to help figure it out with us. Thank you Michael!",
    },
    {
      title: "Gutter Cleaning",
      text: "Aleksandr was fantastic! He came with all the equipment to do the job, even the hardware I didn’t know I would need.",
    },
    {
      title: "Lawn Care",
      text: "David did an awesome job assembling crib and dresser for nursery. Really appreciate this! He cleaned up the area after his work, organized the boxes for easy disposal.",
    },
  ];

  const faqs = [
    "How do I book a service?",
    "Do I need to provide water or electricity?",
    "How is the pricing calculated?",
    "What if I'm not satisfied with the service?",
  ];

  return (
    <Box
      sx={{
        width: "100%",
        background: "#fff",
        position: "relative",
        overflow: "hidden",

        py: {
          xs: "70px",
          md: "10px",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1280px",

          mx: "auto",

          px: {
            xs: 2,
            sm: 3,
            md: 5,
            lg: 6,
          },

          position: "relative",
          zIndex: 2,
        }}
      >
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            sx={{
              color: "#7209B7",
              fontWeight: 600,
              fontSize: "14px",
              mb: 1.5,
            }}
          >
            Client Feedback
          </Typography>

          <Typography
            sx={{
              fontSize: {
                xs: "32px",
                md: "42px",
              },

              fontWeight: 700,
              color: "#111",

              lineHeight: 1.2,
            }}
          >
            What Our Client Says About Us
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },

            gap: {
              xs: 4,
              md: 6,
            },

            mb: {
              xs: 10,
              md: 14,
            },
          }}
        >
          {testimonials.map((item, index) => (
            <Box
              key={index}
              sx={{
                borderBottom: "1px solid #ECECEC",
                pb: 4,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  mb: 2,
                }}
              >
                <FormatQuoteIcon
                  sx={{
                    fontSize: 40,
                    color: "#D9E5FF",
                  }}
                />

                <Typography
                  sx={{
                    color: "#FF7A00",
                    letterSpacing: "2px",
                    fontSize: "18px",
                  }}
                >
                  ★★★★★
                </Typography>
              </Box>

              <Typography
                sx={{
                  fontSize: "15px",
                  color: "#333",
                  lineHeight: 1.9,

                  mb: 3,

                  maxWidth: "520px",
                }}
              >
                {item.text}
              </Typography>

              <Typography
                sx={{
                  color: "#7209B7",
                  fontWeight: 700,
                  fontSize: "18px",
                }}
              >
                {item.title}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            maxWidth: "900px",
            mx: "auto",
            pb: "60px",
          }}
        >
          <Box sx={{ textAlign: "center", mb: 5 }}>
            <Typography
              sx={{
                color: "#7209B7",
                fontWeight: 600,
                fontSize: "40px",
                mb: 1.5,
              }}
            >
              FAQs
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: "32px",
                  md: "44px",
                },

                fontWeight: 700,

                color: "#111",

                lineHeight: 1.2,
              }}
            >
              FREQUENTLY ASKED QUESTIONS
            </Typography>
          </Box>

          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              elevation={0}
              sx={{
                borderBottom: "1px solid #E5E7EB",

                "&:before": {
                  display: "none",
                },
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{
                      color: "#111",
                    }}
                  />
                }
              >
                <Typography
                  sx={{
                    fontSize: "15px",
                    color: "#111",
                    fontWeight: 500,
                  }}
                >
                  {faq}
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "#666",
                    lineHeight: 1.8,
                  }}
                >
                  We provide fast, reliable, and professional cleaning solutions
                  tailored to your needs.
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
