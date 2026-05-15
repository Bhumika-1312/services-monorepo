"use client";

import Link from "next/link";
import { Box, Button, Container, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import WorkIcon from "@mui/icons-material/Work";

const experiences = [
  "Chief Consultant Gynaecologist, Norvic International Hospital, Thapathali",
  "Honorary Lecturer in Kathmandu Medical College, Sinamangal, Kathmandu 2000",
  "President, Gynaecology Oncology Society of Nepal (GOSON)",
];

export default function DoctorProfileSection() {
  return (
    <Box
      sx={{
        backgroundColor: "#f8fafc",
        py: { xs: 8, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "382px 713px",
            },
            justifyContent: "space-between",
            columnGap: "40px",
            rowGap: { xs: 6, md: 0 },
            alignItems: "start",
          }}
        >
          <Box
            sx={{
              width: {
                xs: "100%",
                md: "382px",
              },
            }}
          >
            <Box
              component="img"
              src="/images/dental-services/jonathan-jassey.jpg"
              alt="Jonathan Jassey"
              sx={{
                width: "100%",
                height: 280,
                objectFit: "cover",
                borderRadius: "8px 8px 0 0",
                display: "block",
              }}
            />
            <Box
              sx={{
                width: "100%",
                backgroundColor: "#ffffff",
                borderRadius: "0 0 8px 8px",
                border: "1px solid #eef2f7",
                borderTop: "none",
                px: 3,
                py: 3,
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: 500,
                  color: "#2440b3",
                  mb: 2,
                }}
              >
                Speciality
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.2,
                  mb: 3.5,
                }}
              >
                <PersonIcon
                  sx={{
                    color: "#f97316",
                    fontSize: 16,
                  }}
                />

                <Typography
                  sx={{
                    fontSize: "0.9rem",
                    color: "#9ca3af",
                    fontWeight: 500,
                  }}
                >
                  Dental Technician
                </Typography>
              </Box>

              <Typography
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: 500,
                  color: "#2440b3",
                  mb: 2,
                }}
              >
                Availability
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.2,
                }}
              >
                <AccessTimeIcon
                  sx={{
                    color: "#f97316",
                    fontSize: 16,
                  }}
                />

                <Typography
                  sx={{
                    fontSize: "0.9rem",
                    color: "#9ca3af",
                    fontWeight: 500,
                    lineHeight: 1.7,
                  }}
                >
                  Monday - Friday: 09:00 - 15:00
                </Typography>
              </Box>
            </Box>

            <Link
              href="/dental-services/contact"
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="contained"
                fullWidth
                sx={{
                  mt: 3,
                  height: 48,
                  backgroundColor: "#2440b3",
                  borderRadius: "999px",
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: "0.82rem",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#1d36a1",
                    boxShadow: "none",
                  },
                }}
              >
                Book An Appointment →
              </Button>
            </Link>
          </Box>

          <Box
            sx={{
              width: {
                xs: "100%",
                md: "713px",
              },
              maxWidth: "713px",
            }}
          >
            <Typography
              sx={{
                fontSize: "3rem",
                fontWeight: 500,
                lineHeight: 1.1,
                color: "#f97316",
                mb: 1,
              }}
            >
              Jonathan Jassey
            </Typography>

            <Typography
              sx={{
                fontSize: "2.1rem",
                fontWeight: 500,
                lineHeight: 1.2,
                color: "#2440b3",
                mb: 3,
              }}
            >
              M.D. of Medicine
            </Typography>

            <Typography
              sx={{
                fontSize: "0.95rem",
                lineHeight: 2.2,
                color: "#6b7280",
                mb: 6,
              }}
            >
              Dr. Jonathan Jassey has been a private pediatrician since 2007 and
              graduated from the New York College of Osteopathic Medicine. He
              also completed his residency in pediatrics at Winthrop University
              Hospital. Dr. Jassey takes a lot of pride in treating the
              "colicky" infant and getting a baby sleeping through the night at
              a young age. He is the co-author of "The Newborn Sleep Book",
              based on his tremendous success with his methods. As a reflection
              of his superior bedside manner and the impact he has made in the
              health of his patients, Dr. Jassey has received the Patients’
              Choice Award for three consecutive years, which is given to
              practitioners who have gotten near perfect scores by votes from
              patients, as well as the Compassionate Doctor Recognition Award.
              He is board certified by the American Academy of Pediatrics. They
              prescribe medications to manage pain, spasticity, nerve injury,
              and cognitive impairments, while also leveraging the power of
              physical therapy to increase cardiopulmonary fitness, muscle
              strength and flexibility. She enjoys writing and dreams of
              publishing children’s books one day.
            </Typography>

            <Typography
              sx={{
                fontSize: "2.2rem",
                fontWeight: 500,
                color: "#2440b3",
                mb: 3,
              }}
            >
              Work Experience
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2.5,
              }}
            >
              {experiences.map((item) => (
                <Box
                  key={item}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 1.5,
                  }}
                >
                  <WorkIcon
                    sx={{
                      color: "#f97316",
                      fontSize: 18,
                      mt: 0.3,
                      flexShrink: 0,
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: "0.95rem",
                      lineHeight: 1.9,
                      color: "#6b7280",
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
