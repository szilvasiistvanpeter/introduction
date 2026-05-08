import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  Stack,
  Container,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Contacts() {
  const brandBlue = '#42a5f5';

  const contactLinks = [
    {
      label: 'Email',
      href: 'mailto:szilvasipeter@protonmail.com',
      value: 'szilvasipeter@protonmail.com',
      icon: <EmailIcon />,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/szilva/',
      value: 'linkedin.com/in/szilva',
      icon: <LinkedInIcon />,
    },
    {
      label: 'GitHub',
      href: 'https://github.com/plummogo',
      value: 'github.com/plummogo',
      icon: <GitHubIcon />,
    },
    {
      label: 'Telefon',
      href: 'tel:+36307986829',
      value: '+36 30 798 6829',
      icon: <PhoneIcon />,
    },
  ];

  return (
    <Box
      sx={{
        flexGrow: 1,
        py: 8,
        bgcolor: '#0a1929',
        minHeight: '100vh',
        color: 'white',
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          align="center"
          sx={{ fontWeight: 'bold', mb: 2, color: brandBlue }}
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
                        borderColor: brandBlue,
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
              <LocationOnIcon sx={{ fontSize: 60, color: brandBlue, mb: 2 }} />
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
