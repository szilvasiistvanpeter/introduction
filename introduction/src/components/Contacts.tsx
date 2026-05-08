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
import { useTranslation } from 'react-i18next';
import Eger from '../core/Eger';

export default function Contacts() {
  const { t } = useTranslation();

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
          {t('contacts.title')}
        </Typography>
        <Typography
          variant="h6"
          align="center"
          sx={{ mb: 6, color: '#b0bec5', fontWeight: '400' }}
        >
          {t('contacts.subtitle')}
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
                    {t(link.label)}
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
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d85547.77173627031!2d20.309009872487277!3d47.929267553668865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47408d7894b04023%3A0x63adb259948d1c24!2sEger!5e0!3m2!1shu!2shu!4v1778261406423!5m2!1shu!2shu"
                loading="lazy"
              ></iframe>
              <Typography variant="body2" sx={{ color: '#b0bec5' }}>
                {t('contacts.description')}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
