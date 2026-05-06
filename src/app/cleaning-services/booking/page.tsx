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
  const steps = ["Service", "Surface & Condition", "Add-ons", "Schedule"];

  return (
    <Box sx={{ mb: 5 }}>
      <Stack direction="row" spacing={3} sx={{ alignItems: "center", flexWrap: "wrap" }}>
        {steps.map((label, i) => {
          const active = i + 1 <= step;

          return (
            <Stack key={i} direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <Box
                sx={{
                  width: 30,
                  height: 30,
                  borderRadius: "50%",
                  background: active ? "#2563EB" : "#E5E7EB",
                  color: active ? "#fff" : "#6B7280",
                  fontSize: "13px",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {i + 1}
              </Box>

              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: active ? 600 : 400,
                  color: active ? "#2563EB" : "#6B7280",
                }}
              >
                {label}
              </Typography>

              {i !== steps.length - 1 && (
                <Box
                  sx={{
                    width: 40,
                    height: "2px",
                    background: i + 1 < step ? "#2563EB" : "#E5E7EB",
                    mx: 1,
                  }}
                />
              )}
            </Stack>
          );
        })}
      </Stack>

      <Typography sx={{ fontSize: "12px", color: "#6B7280", mt: 1 }}>
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
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Box sx={{ width: "100%", maxWidth: "1160px" }}>
        <Typography sx={{ fontWeight: 600, mb: 4, fontSize: "16px" }}>
          1. Select service
        </Typography>
      </Box>

      <Box
        sx={{
          width: "100%",
          maxWidth: "1160px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "24px",
            justifyContent: "center",
          }}
        >
          {services.slice(0, 3).map((s) => (
            <ServiceCard key={s.title} data={s} onClick={onSelect} />
          ))}
        </Box>

        <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
          <ServiceCard data={services[3]} onClick={onSelect} />
        </Box>
      </Box>
    </Box>
  );
}

function ServiceCard({ data, onClick }: any) {
  return (
    <Box
      onClick={onClick}
      sx={{
        width: "373px",
        height: "159px",
        p: 3,
        borderRadius: "14px",
        background: "#F9F9F9",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        cursor: "pointer",
        transition: "0.2s",
        flexShrink: 0,
        "&:hover": {
          transform: "translateY(-3px)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        },
      }}
    >
      <Box sx={{ maxWidth: "65%" }}>
        <Typography sx={{ fontWeight: 600, mb: 1 }}>
          {data.title}
        </Typography>

        <Typography sx={{ fontSize: "12px", color: "#6B7280", mb: 2 }}>
          {data.desc}
        </Typography>

        <Button
          size="small"
          sx={{
            textTransform: "none",
            borderRadius: "20px",
            background: "#fff",
            color: "#111827",
            "&:hover": { background: "#E5E7EB" },
          }}
        >
          Book Now
        </Button>
      </Box>

      <Box
        component="img"
        src={data.img}
        sx={{
          width: 90,
          height: 90,
          objectFit: "contain",
          mixBlendMode: "multiply",
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