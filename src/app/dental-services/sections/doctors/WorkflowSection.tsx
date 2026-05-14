'use client';

import {
  Avatar,
  Box,
  Card,
  Container,
  Typography,
} from '@mui/material';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

export default function WorkflowSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        py: { xs: 8, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '1.1fr 0.9fr',
            },
            gap: { xs: 5, md: 6 },
            alignItems: 'center',
          }}
        >

          <Box
            sx={{
              position: 'relative',
              borderRadius: '10px',
              overflow: 'hidden',
            }}
          >
            <Box
              component="img"
              src="/images/dental-services/workflow-video.jpg"
              alt="Dental Workflow"
              sx={{
                width: '100%',
                height: 499,
                objectFit: 'cover',
              }}
            />

            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 68,
                height: 68,
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 12px 30px rgba(15,23,42,0.12)',
              }}
            >
              <PlayArrowRoundedIcon
                sx={{
                  color: '#f97316',
                  fontSize: 36,
                  ml: 0.3,
                }}
              />
            </Box>
          </Box>

          <Card
            elevation={0}
            sx={{
              p: { xs: 4, md: 5 },
            }}
          >
            <Typography
              sx={{
                fontSize: '0.68rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#f97316',
                mb: 1.5,
              }}
            >
              Workflow
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: '2.1rem', md: '3rem' },
                fontWeight: 500,
                lineHeight: 1.15,
                color: '#2440b3',
                mb: 2.5,
              }}
            >
              Improve your business with the right solutions
            </Typography>

            <Typography
              sx={{
                fontSize: '0.9rem',
                lineHeight: 1.9,
                color: '#6b7280',
                mb: 4,
              }}
            >
              "It is really refreshing to read the best solutions for clients
              who are truly interested in their clients' needs and preferences.
              We offer one of the most comprehensive sets of laboratory services
              and quality results."
            </Typography>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Avatar
                src="/images/dental-services/kathryn-murphy.jpg"
                sx={{
                  width: 60,
                  height: 60,
                }}
              />

              <Typography
                sx={{
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: '#2440b3',
                }}
              >
                Kathryn Murphy
              </Typography>
            </Box>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}