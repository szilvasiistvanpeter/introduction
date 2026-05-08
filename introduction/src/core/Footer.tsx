import { Box, Container, Typography, IconButton, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { contactLinks } from '../const';
import { useTranslation } from 'react-i18next';

export default function ResponsiveFooter() {
  const { t } = useTranslation();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#0a1929',
        py: 4,
        borderTop: '1px solid #1e4976',
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Copyright */}
          <Typography variant="body2" color="#b0bec5">
            {t('footer.text')}
          </Typography>

          {/* Social Ikonok */}
          <Stack direction="row" spacing={1}>
            <IconButton
              href={
                contactLinks.find((link) => link.label === 'GitHub')?.href ?? ''
              }
              target="_blank"
              sx={{
                color: '#b0bec5',
                '&:hover': { color: 'var(--brand-blue2)' },
              }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              href={
                contactLinks.find((link) => link.label === 'LinkedIn')?.href ??
                ''
              }
              target="_blank"
              sx={{
                color: '#b0bec5',
                '&:hover': { color: 'var(--brand-blue2)' },
              }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              href={
                contactLinks.find((link) => link.label === 'Email')?.href ?? ''
              }
              sx={{
                color: '#b0bec5',
                '&:hover': { color: 'var(--brand-blue2)' },
              }}
            >
              <EmailIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
