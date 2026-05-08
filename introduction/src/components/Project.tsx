import {
  Box,
  Typography,
  Grid,
  Paper,
  Chip,
  Button,
  Stack,
  Divider,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import TerminalIcon from '@mui/icons-material/Terminal';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';

export default function Project() {
  const brandBlue = '#42a5f5';

  const techStack = [
    { label: 'React 18', color: '#61dafb' },
    { label: 'Material UI v6', color: '#007fff' },
    { label: 'TypeScript', color: '#3178c6' },
    { label: 'GitHub Actions', color: '#2088ff' },
    { label: 'Prettier & ESLint', color: '#f7b93e' },
    { label: 'MkDocs', color: '#009485' },
  ];

  return (
    <Box
      sx={{
        p: { xs: 2, md: 4 },
        bgcolor: '#0a1929',
        minHeight: '100vh',
        color: 'white',
      }}
    >
      <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
        <Grid size={{ xs: 12, md: 10, lg: 8 }}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 5 },
              bgcolor: '#132f4c',
              borderRadius: 4,
              border: '1px solid #1e4976',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: -20,
                right: -20,
                width: 100,
                height: 100,
                bgcolor: 'rgba(66, 165, 245, 0.1)',
                borderRadius: '50%',
                filter: 'blur(30px)',
              }}
            />

            <Typography
              variant="h4"
              sx={{ fontWeight: 'bold', mb: 1, color: brandBlue }}
            >
              Portfolio Project
            </Typography>
            <Typography variant="subtitle1" sx={{ color: '#b0bec5', mb: 3 }}>
              Személyes portfólió és szakmai bemutatkozó oldal
            </Typography>

            <Divider sx={{ bgcolor: 'rgba(255,255,255,0.1)', mb: 3 }} />

            <Grid container spacing={4}>
              <Grid size={{ xs: 12, md: 7 }}>
                <Typography
                  variant="h6"
                  sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}
                >
                  <TerminalIcon fontSize="small" sx={{ color: brandBlue }} /> A
                  fejlesztésről
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: '#e0e0e0', textAlign: 'justify', mb: 2 }}
                >
                  Ez a projekt egy modern technológiai demó. Célom egy olyan
                  reszponzív, típusbiztos alkalmazás létrehozása volt, amely
                  követi a legfrissebb fejlesztési irányelveket.
                </Typography>
                <Typography variant="body2" sx={{ color: '#aaa', mb: 3 }}>
                  Tartalmazza az automatizált CI/CD folyamatot (GitHub Actions),
                  Prettier formázást és Git alapú verziókezelést.
                </Typography>

                <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                  <Button
                    variant="contained"
                    startIcon={<GitHubIcon />}
                    href="https://github.com/szilvasiistvanpeter/introduction"
                    target="_blank"
                    sx={{
                      bgcolor: brandBlue,
                      '&:hover': { bgcolor: '#1976d2' },
                    }}
                  >
                    GitHub Repo
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<DescriptionIcon />}
                    href="#"
                    target="_blank"
                    sx={{ color: 'white', borderColor: '#1e4976' }}
                  >
                    MkDocs
                  </Button>
                </Stack>
              </Grid>

              <Grid size={{ xs: 12, md: 5 }}>
                <Typography
                  variant="h6"
                  sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}
                >
                  <IntegrationInstructionsIcon
                    fontSize="small"
                    sx={{ color: brandBlue }}
                  />{' '}
                  Stack & Tools
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {techStack.map((tech, index) => (
                    <Chip
                      key={index}
                      label={tech.label}
                      sx={{
                        bgcolor: 'rgba(255,255,255,0.05)',
                        color: 'white',
                        border: `1px solid ${tech.color}44`,
                        fontSize: '0.75rem',
                      }}
                    />
                  ))}
                </Box>

                <Paper
                  sx={{
                    mt: 3,
                    p: 2,
                    bgcolor: 'rgba(0,0,0,0.2)',
                    borderRadius: 2,
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      color: brandBlue,
                      fontWeight: 'bold',
                      display: 'block',
                      mb: 1,
                    }}
                  >
                    CI/CD WORKFLOW
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: '#888', display: 'block' }}
                  >
                    • Prettier & Linting automatizálás
                    <br />
                    • GitHub Actions build ellenőrzés
                    <br />• MkDocs dokumentáció kezelése
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
