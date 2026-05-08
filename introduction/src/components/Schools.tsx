import {
  Box,
  Typography,
  Card,
  CardContent,
  Divider,
  Paper,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/SchoolOutlined';

export default function Schools() {
  const education = [
    {
      period: '2025 – 2026',
      degree: 'Informatikatanár (Digitális kultúra tanára) MSc',
      institution: 'Eszterházy Károly Katolikus Egyetem',
      description:
        'Mesterképzés, amely a pedagógiai módszertanra és a digitális kultúra oktatására fókuszál.',
      icon: <SchoolIcon color="primary" />,
    },
    {
      period: '2022 – 2024',
      degree: 'Mérnökinformatikus MSc (Kiváló minősítés)',
      institution: 'Miskolci Egyetem',
      description:
        'Adatbányászati algoritmusok és térinformatikai rendszerek (GIS) specializáció.',
      icon: <SchoolIcon color="primary" />,
    },
    {
      period: '2013 – 2016',
      degree: 'Programtervező informatikus BSc',
      institution: 'Eszterházy Károly Katolikus Egyetem',
      description:
        'Szoftverfejlesztési alapok, webalkalmazások készítése (.NET).',
      icon: <SchoolIcon color="primary" />,
    },
  ];

  return (
    <Box sx={{ maxWidth: 800, m: 'auto', p: 3 }}>
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
                {item.degree}
              </Typography>
              <Typography
                variant="subtitle1"
                color="primary"
                sx={{ fontWeight: 500, mb: 1 }}
              >
                {item.institution}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Box>
  );
}
