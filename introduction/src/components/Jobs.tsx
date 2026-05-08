import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from '@mui/material';

export default function Jobs() {
  const brandBlue = '#42a5f5';

  const rows = [
    {
      company: 'Eszterházy Károly Katolikus Egyetem',
      role: 'External Lecturer',
      period: '2026.02 – Jelenleg',
      tech: 'Informatika oktatás',
    },
    {
      company: 'Siemens',
      role: 'Senior Fullstack Developer',
      period: '2025.11 – Jelenleg',
      tech: 'React.js, Next.js, Hybrid Cloud (AWS)',
    },
    {
      company: 'Deutsche Telekom IT Solutions HU',
      role: 'Senior Fullstack Developer',
      period: '2023.05 – 2025.11',
      tech: 'C#, TypeScript, Angular, Oracle',
    },
    {
      company: 'ALLWIN Informatika Kft.',
      role: 'Full-Stack Software Engineer',
      period: '2022.03 – 2023.05',
      tech: 'ASP.NET Core, Angular, ArcGIS Maps SDK ',
    },
    {
      company: 'Accenture',
      role: 'Senior Software Engineer',
      period: '2021.09 – 2022.03',
      tech: 'Savigent Platform, MES/MOM, AngularJS ',
    },
    {
      company: 'evosoft Hungary Kft.',
      role: 'Software Engineer / Scrum Master',
      period: '2018.08 – 2021.08',
      tech: 'React, .NET Core, Azure DevOps, Scrum ',
    },
    {
      company: 'ZF Hungária Kft.',
      role: 'Production IT Support',
      period: '2017.11 – 2018.08',
      tech: 'Siemens PLC, Profibus, Profinet, Ghost ',
    },
    {
      company: 'Procter & Gamble Hyginett Kft.',
      role: 'IT Support',
      period: '2017.09 – 2017.11',
      tech: 'Szerver karbantartás, Avaya, ServiceNow',
    },
    {
      company: 'Tamiasz Kft.',
      role: 'IT Teacher',
      period: '2017.05 – 2017.08',
      tech: 'GINOP felnőttképzés, MS Office',
    },
    {
      company: 'Wigner Jenő Szakoktatási Kft.',
      role: 'IT Teacher / System Admin',
      period: '2016.08 – 2017.08',
      tech: 'C#, OOP, CISCO CCNA',
    },
    {
      company: 'Robert Bosch Kft.',
      role: 'Software Engineer Trainee',
      period: '2015.06 – 2016.07',
      tech: 'C#, TSQL, DevExpress, TFS',
    },
  ];

  return (
    <Box sx={{ p: { xs: 1, md: 4 }, bgcolor: '#0a1929', minHeight: '100vh' }}>
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{
          borderRadius: 3,
          bgcolor: '#132f4c',
          border: '1px solid #1e4976',
          overflow: 'hidden',
        }}
      >
        <Table sx={{ minWidth: 700 }} size="medium">
          <TableHead sx={{ bgcolor: 'rgba(66, 165, 245, 0.08)' }}>
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: 'bold',
                  color: brandBlue,
                  borderBottom: '1px solid #1e4976',
                }}
              >
                Cég
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 'bold',
                  color: 'white',
                  borderBottom: '1px solid #1e4976',
                }}
              >
                Pozíció
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 'bold',
                  color: 'white',
                  borderBottom: '1px solid #1e4976',
                }}
              >
                Időtartam
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 'bold',
                  color: 'white',
                  borderBottom: '1px solid #1e4976',
                }}
              >
                Fókusz / Technológiák
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                sx={{
                  '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.03)' },
                  transition: 'background-color 0.2s',
                }}
              >
                <TableCell
                  sx={{
                    color: brandBlue,
                    fontWeight: 'bold',
                    borderBottom: '1px solid rgba(30, 73, 118, 0.5)',
                  }}
                >
                  {row.company}
                </TableCell>
                <TableCell
                  sx={{
                    color: '#e0e0e0',
                    borderBottom: '1px solid rgba(30, 73, 118, 0.5)',
                  }}
                >
                  {row.role}
                </TableCell>
                <TableCell
                  sx={{
                    color: '#b0bec5',
                    whiteSpace: 'nowrap',
                    borderBottom: '1px solid rgba(30, 73, 118, 0.5)',
                  }}
                >
                  {row.period}
                </TableCell>
                <TableCell
                  sx={{
                    color: '#aaa',
                    fontSize: '0.85rem',
                    borderBottom: '1px solid rgba(30, 73, 118, 0.5)',
                  }}
                >
                  {row.tech}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
