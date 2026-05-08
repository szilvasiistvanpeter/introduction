import {
  Box,
  Typography,
  Card,
  CardContent,
  Divider,
  Paper,
} from '@mui/material';
import { education } from '../const';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function Schools() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = 'Sulik';
  }, []);

  return (
    <Box sx={{ maxWidth: 'xl', p: 3, bgcolor: '#0a1929' }}>
      {education.map((item, index) => (
        <Box key={index} sx={{ display: 'flex', mb: 3 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mr: 2,
            }}
          >
            <Paper
              elevation={3}
              sx={{
                p: 1,
                borderRadius: '50%',
                display: 'flex',
                bgcolor: '#f5f5f5',
              }}
            >
              {item.icon}
            </Paper>
            {index !== education.length - 1 && (
              <Divider
                orientation="vertical"
                flexItem
                sx={{ width: 2, bgcolor: '#e0e0e0', my: 1 }}
              />
            )}
          </Box>

          <Card
            elevation={2}
            sx={{
              flexGrow: 1,
              borderRadius: 2,
              borderLeft: '5px solid #1976d2',
            }}
          >
            <CardContent>
              <Typography
                variant="caption"
                sx={{ fontWeight: 'bold', color: 'text.secondary' }}
              >
                {item.period}
              </Typography>
              <Typography
                variant="h6"
                component="div"
                sx={{ fontWeight: 'bold', my: 0.5 }}
              >
                {t(item.degree)}
              </Typography>
              <Typography
                variant="subtitle1"
                color="primary"
                sx={{ fontWeight: 500, mb: 1 }}
              >
                {t(item.institution)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t(item.description)}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Box>
  );
}
