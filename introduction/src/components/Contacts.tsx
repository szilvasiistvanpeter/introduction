import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  Stack,
  Container,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { contactLinks } from '../const';
import { useEffect } from 'react';

export default function Contacts() {
  useEffect(() => {
    document.title = 'Kapcsolat';
  }, []);

  return (
    <Box
      sx={{
        flexGrow: 1,
        py: 8,
        bgcolor: '#0a1929',
        color: 'white',
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          align="center"
          sx={{ fontWeight: 'bold', mb: 2, color: 'var(--brand-blue)' }}
        >
          Lépjünk kapcsolatba!
        </Typography>
        <Typography
          variant="h6"
          align="center"
          sx={{ mb: 6, color: '#b0bec5', fontWeight: '400' }}
        >
          Legyen szó szakmai projektről, oktatásról vagy csak egy kávéról
          Egerben.
        </Typography>

        <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                bgcolor: '#132f4c',
                borderRadius: 4,
                border: '1px solid #1e4976',
              }}
            >
              <Stack spacing={3} sx={{ justifyContent: 'center' }}>
                {contactLinks.map((link, index) => (
                  <Button
                    key={index}
                    variant="outlined"
                    fullWidth
                    startIcon={link.icon}
                    href={link.href}
                    target="_blank"
                    sx={{
                      py: 1.5,
                      justifyContent: 'flex-start',
                      color: 'white',
                      borderColor: 'rgba(66, 165, 245, 0.3)',
                      textTransform: 'none',
                      fontSize: '1.1rem',
                      '&:hover': {
                        borderColor: 'var(--brand-blue)',
                        bgcolor: 'rgba(66, 165, 245, 0.05)',
                      },
                    }}
                  >
                    {link.value}
                  </Button>
                ))}
              </Stack>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                bgcolor: '#132f4c',
                borderRadius: 4,
                border: '1px solid #1e4976',
                textAlign: 'center',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <LocationOnIcon
                sx={{ fontSize: 60, color: 'var(--brand-blue)', mb: 2 }}
              />
              <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                Eger
              </Typography>
              <Typography variant="body2" sx={{ color: '#b0bec5' }}>
                Itt születtem, itt élek, és innen dolgozom Senior fejlesztőként.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
