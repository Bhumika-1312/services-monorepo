"use client";

import { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Stack,
  Button,
  Divider,
  Avatar,
  Grid
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import DeckIcon from "@mui/icons-material/Deck";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import YardIcon from "@mui/icons-material/Yard";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function BookingPage() {
  const [step, setStep] = useState(1);

  return (
    <Box sx={{ background: "#fff", minHeight: "100vh", py: 6 }}>
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: 3 }}>
        <StepHeader step={step} />

        <Typography sx={{ fontSize: "26px", fontWeight: 700 }}>
          Get Your Pressure Washing Quote
        </Typography>

        <Typography sx={{ color: "#6B7280", mb: 4 }}>
          Takes less than 60 seconds. Our eco-friendly solutions guarantee a fresh look.
        </Typography>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 8 }}>
            {step === 1 && <Step1 onSelect={() => setStep(2)} />}
            {step === 2 && <Step2 onDone={() => setStep(3)} />}
            {step === 3 && <Step3 onDone={() => setStep(4)} />}
            {step === 4 && <Step4 />}
          </Grid>

          <Grid size={{xs:12, md:4}}>
            {step > 1 && <Summary />}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

function StepHeader({ step }: any) {
  const steps = [
    "Service",
    "Surface & Condition",
    "Add-ons",
    "Schedule",
  ];

  return (
    <Box
      sx={{
        mb: {
          xs: 5,
          md: 7,
        },

        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",

          overflowX: "auto",

          pb: 1,

          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {steps.map((label, i) => {
          const active = i + 1 <= step;

          return (
            <Box
              key={i}
              sx={{
                display: "flex",
                alignItems: "center",

                minWidth: "fit-content",

                flex: 1,
              }}
            >
              <Box
                sx={{
                  width: 28,
                  height: 28,

                  borderRadius: "50%",

                  background:
                    active
                      ? "#2563EB"
                      : "#E5E7EB",

                  color:
                    active
                      ? "#fff"
                      : "#6B7280",

                  fontSize: "12px",
                  fontWeight: 700,

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  flexShrink: 0,
                }}
              >
                {i + 1}
              </Box>

              <Typography
                sx={{
                  ml: 1,

                  fontSize: {
                    xs: "12px",
                    md: "13px",
                  },

                  fontWeight:
                    active ? 600 : 500,

                  color:
                    active
                      ? "#2563EB"
                      : "#9CA3AF",

                  whiteSpace: "nowrap",
                }}
              >
                {label}
              </Typography>

              {i !== steps.length - 1 && (
                <Box
                  sx={{
                    flex: 1,

                    minWidth: {
                      xs: 40,
                      md: 90,
                    },

                    height: "1px",

                    background:
                      i + 1 < step
                        ? "#2563EB"
                        : "#E5E7EB",

                    mx: {
                      xs: 1.5,
                      md: 2,
                    },
                  }}
                />
              )}
            </Box>
          );
        })}
      </Box>

      <Typography
        sx={{
          mt: 1.5,

          fontSize: "11px",

          color: "#6B7280",
        }}
      >
        Step {step} of 4
      </Typography>
    </Box>
  );
}

function Step1({ onSelect }: any) {
  const services = [
    {
      title: "Pressure Washing",
      desc: "Restore surfaces quickly with powerful deep cleaning.",
      img: "/images/cleaning/pressure.png",
    },
    {
      title: "Lawn care",
      desc: "Keep your lawn healthy, green and maintained.",
      img: "/images/cleaning/lawn.png",
    },
    {
      title: "Window Cleaning",
      desc: "Crystal clear windows with streak-free shine.",
      img: "/images/cleaning/window.png",
    },
    {
      title: "Gutter Cleaning",
      desc: "Prevent clogs and water damage.",
      img: "/images/cleaning/gutter.png",
    },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        sx={{
          fontWeight: 700,
          mb: 4,
          fontSize: "18px",
          color: "#111827",
        }}
      >
        1. Select service
      </Typography>

      <Box
        sx={{
          width: "100%",
          maxWidth: "1180px",
          mx: "auto",

          display: "grid",

          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          },

          gap: "24px",

          justifyItems: "center",
        }}
      >
        {services.map((service, index) => (
          <Box
            key={service.title}
            sx={{
              ...(index === 3 && {
                gridColumn: {
                  lg: "2 / 3",
                },
              }),
            }}
          >
            <ServiceCard
              data={service}
              onClick={onSelect}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

function ServiceCard({ data, onClick }: any) {
  return (
    <Box
      onClick={onClick}
      sx={{
        width: "100%",
        maxWidth: "373px",
        minWidth: "373px",

        height: "159px",

        borderRadius: "14px",

        background: "#F9F9F9",

        px: "24px",
        py: "20px",

        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        cursor: "pointer",

        transition: "all 0.25s ease",

        "&:hover": {
          transform: "translateY(-3px)",
          boxShadow:
            "0 10px 25px rgba(0,0,0,0.06)",
        },

        "@media (max-width: 450px)": {
          minWidth: "100%",
          height: "auto",
        },
      }}
    >
      <Box
        sx={{
          width: "58%",

          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",

          height: "100%",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: 700,
              lineHeight: 1.2,
              color: "#111827",
              mb: 1,
            }}
          >
            {data.title}
          </Typography>

          <Typography
            sx={{
              fontSize: "13px",
              color: "#6B7280",
              lineHeight: 1.7,
            }}
          >
            {data.desc}
          </Typography>
        </Box>

        <Button
          sx={{
            width: "110px",
            height: "38px",

            mt: 2,

            borderRadius: "999px",

            background: "#fff",

            color: "#111827",

            fontSize: "12px",
            fontWeight: 600,

            textTransform: "none",

            boxShadow:
              "0 2px 10px rgba(0,0,0,0.06)",

            "&:hover": {
              background: "#fff",
            },
          }}
        >
          Book Now
        </Button>
      </Box>

      <Box
        component="img"
        src={data.img}
        alt={data.title}
        sx={{
          width: "95px",
          height: "95px",

          objectFit: "contain",

          flexShrink: 0,
        }}
      />
    </Box>
  );
}

function Step2({ onDone }: any) {
  const items = [
    { name: "Driveway", icon: <HomeIcon /> },
    { name: "Patio", icon: <DeckIcon /> },
    { name: "Exterior Walls", icon: <HomeIcon /> },
    { name: "Deck", icon: <YardIcon /> },
    { name: "Parking Area", icon: <LocalParkingIcon /> },
  ];

  return (
    <Box>
      <Typography sx={{ fontWeight: 600, mb: 3 }}>
        1. What needs cleaning?
      </Typography>

      <Stack direction="row" spacing={2} sx={{ mb: 4, flexWrap: "wrap" }}>
        {items.map((i) => (
          <Box
            key={i.name}
            onClick={onDone}
            sx={{
              p: 2,
              borderRadius: "10px",
              border: "1px solid #E5E7EB",
              textAlign: "center",
              cursor: "pointer",
              minWidth: 110,
            }}
          >
            <Box
              sx={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "#E5E7EB",
                mx: "auto",
                mb: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {i.icon}
            </Box>
            <Typography sx={{ fontSize: "12px" }}>{i.name}</Typography>
          </Box>
        ))}
      </Stack>

      <Grid container spacing={4}>
        <Grid size={{xs:6}}>
          <Typography sx={{ mb: 2 }}>Area Size</Typography>
          {["Small", "Medium", "Large"].map((s, i) => (
            <Box
              key={s}
              sx={{
                mb: 1,
                p: 1.5,
                borderRadius: "999px",
                background: i === 1 ? "#000" : "#F3F4F6",
                color: i === 1 ? "#fff" : "#000",
                textAlign: "center",
              }}
            >
              {s}
            </Box>
          ))}
        </Grid>

        <Grid size={{xs: 6}}>
          <Typography sx={{ mb: 2 }}>Dirt Level</Typography>
          <Stack direction="row" spacing={2}>
            {["Light", "Medium", "Heavy"].map((d, i) => (
              <Box
                key={d}
                sx={{
                  flex: 1,
                  p: 2,
                  borderRadius: "10px",
                  border: i === 1 ? "2px solid #000" : "1px solid #E5E7EB",
                  textAlign: "center",
                }}
              >
                {d}
              </Box>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

function Step3({ onDone }: any) {
  const addons = [
    { name: "Oil Stain Removal", price: "+$45" },
    { name: "Eco-Chemical Treatment", price: "+$29" },
    { name: "Mold & Moss Prevention", price: "+$35" },
    { name: "Surface Sealing", price: "+$89" },
  ];

  return (
    <Box>
      <Typography sx={{ fontWeight: 600, mb: 3 }}>
        2. Customize Your Service
      </Typography>

      <Grid container spacing={3}>
        {addons.map((a) => (
          <Grid key={a.name} size={{ xs: 12, sm: 6 }}>
            <Box
              onClick={onDone}
              sx={{
                p: 2,
                border: "1px solid #E5E7EB",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "space-between",
                cursor: "pointer",
              }}
            >
              <Stack direction="row" spacing={1}>
                <Box sx={{ width: 18, height: 18, border: "1px solid #000" }} />
                {a.name}
              </Stack>
              <Typography sx={{ color: "#16A34A" }}>{a.price}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

function Step4() {
  return (
    <Box>
      <Typography sx={{ fontWeight: 600, mb: 3 }}>
        3. When should we come?
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{xs:6}}>
          <Box sx={{ border: "1px solid #E5E7EB", p: 3 }}>
            Calendar Here
          </Box>
        </Grid>

        <Grid size={{xs:6}}>
          <Stack spacing={2}>
            <Box sx={{ p: 2, background: "#DCFCE7", borderRadius: "8px" }}>
              Available Today
            </Box>

            {["09:00 AM", "11:30 AM", "02:00 PM"].map((t, i) => (
              <Box
                key={t}
                sx={{
                  p: 2,
                  borderRadius: "8px",
                  border: "1px solid #E5E7EB",
                  background: i === 2 ? "#000" : "#fff",
                  color: i === 2 ? "#fff" : "#000",
                  textAlign: "center",
                }}
              >
                {t}
              </Box>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

function Summary() {
  return (
    <Paper sx={{ p: 3, borderRadius: "14px", position: "sticky", top: 100 }}>
      <Typography sx={{ fontWeight: 600, mb: 2 }}>
        Your Estimate
      </Typography>

      <Stack spacing={1} sx={{ mb: 2 }}>
        <Row label="Driveway Cleaning" value="Base" />
        <Row label="Medium Area Size" value="$149" />
        <Row label="Medium Dirt Level" value="+$50" />
        <Row label="Eco-Treatment" value="+$29" />
      </Stack>

      <Divider sx={{ my: 2 }} />

      <Typography sx={{ fontSize: "12px", color: "#6B7280" }}>
        ESTIMATED TOTAL
      </Typography>

      <Typography sx={{ fontSize: "24px", fontWeight: 700 }}>
        $199 - $299
      </Typography>

      <Button fullWidth variant="contained" sx={{ mt: 2 }}>
        Confirm Booking
      </Button>

      <Stack spacing={1.5} sx={{ mt: 3 }}>
        <Info text="No hidden charges, ever" />
        <Info text="Pay after service is done" />
        <Info text="Verified professionals" />
      </Stack>

      <Box sx={{ mt: 3, p: 2, background: "#F3F4F6", borderRadius: "10px" }}>
        <Stack direction="row" spacing={2}>
          <Avatar />
          <Box>
            ⭐⭐⭐⭐⭐
            <Typography sx={{ fontSize: "12px" }}>
              Absolutely brilliant job on my driveway. Looks brand new!
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Paper>
  );
}

function Row({ label, value }: any) {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Typography>{label}</Typography>
      <Typography>{value}</Typography>
    </Box>
  );
}

function Info({ text }: any) {
  return (
    <Stack direction="row" spacing={1}>
      <CheckCircleIcon sx={{ fontSize: 16, color: "#2563EB" }} />
      <Typography sx={{ fontSize: "13px" }}>{text}</Typography>
    </Stack>
  );
}