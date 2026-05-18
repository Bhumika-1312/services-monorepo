'use client';

import Link from 'next/link';
import {
  Box,
  Button,
  Container,
  Typography,
} from '@mui/material';

const advantages = [
  {
    number: '01',
    title: 'Scale of Influence',
    description:
      'Management of 10,000+ active cases across diverse judicial tiers, maintaining a disciplined focus on individual client objectives.',
  },
  {
    number: '02',
    title: 'Professional Depth',
    description:
      'A curated ensemble of over 70 specialist attorneys, each bringing deep domain expertise to the most complex legal challenges.',
  },
  {
    number: '03',
    title: 'Pan-India Integration',
    description:
      'A seamless institutional network ensuring consistent, high-fidelity legal representation across every major jurisdiction in India.',
  },
  {
    number: '04',
    title: 'Operational Precision',
    description:
      'Utilizing proprietary case-management frameworks to ensure no deadline is missed and every strategic advantage is leveraged.',
  },
];

export default function LitigationAdvantageSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',
        pt: { xs: 6, md: 7 },
        pb: { xs: 8, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              lg: '1fr 430px',
            },
            gap: { xs: 6, lg: 7 },
            alignItems: 'start',
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: { xs: '2rem', md: '2.3rem' },
                fontWeight: 400,
                lineHeight: 1.2,
                color: '#111827',
                mb: 3,
              }}
            >
              The Lex Litigation Advantage
            </Typography>

            <Typography
              sx={{
                fontSize: '0.9rem',
                fontStyle: 'italic',
                lineHeight: 1.9,
                color: '#6b7280',
                maxWidth: 540,
                mb: 5,
              }}
            >
              "Our success is measured by the precision of our filings and the
              structural integrity of our legal arguments."
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                mb: 5,
              }}
            >
              {advantages.map((item) => (
                <Box
                  key={item.number}
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: '44px 1fr',
                    gap: 3,
                    alignItems: 'start',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '2rem',
                      fontWeight: 600,
                      lineHeight: 1,
                      color: '#cbd5e1',
                      fontFamily: 'Georgia, serif',
                    }}
                  >
                    {item.number}
                  </Typography>

                  <Box>
                    <Typography
                      sx={{
                        fontSize: '0.62rem',
                        fontWeight: 700,
                        letterSpacing: '0.16em',
                        textTransform: 'uppercase',
                        color: '#111827',
                        mb: 0.8,
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: '0.84rem',
                        lineHeight: 1.9,
                        color: '#4b5563',
                        maxWidth: 520,
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>

            <Link
              href="/legal-services/contact"
              style={{ textDecoration: 'none' }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#0a1b3d',
                  color: '#ffffff',
                  borderRadius: 0,
                  px: 4,
                  py: 1.2,
                  textTransform: 'uppercase',
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  letterSpacing: '0.16em',
                  boxShadow: 'none',
                  '&:hover': {
                    backgroundColor: '#08142e',
                    boxShadow: 'none',
                  },
                }}
              >
                Request A Consultation
              </Button>
            </Link>
          </Box>

          <Box
            sx={{
              position: 'relative',
              mt: { lg: 2 },
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 16,
                left: 16,
                right: -12,
                bottom: -16,
                border: '2px solid #1f2937',
                zIndex: 1,
              }}
            />

            <Box
              component="img"
              src="/images/legal/attorney-portrait.jpg"
              alt="Senior Attorney"
              sx={{
                position: 'relative',
                zIndex: 2,
                width: '100%',
                height: { xs: 460, md: 720 },
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}