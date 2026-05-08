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

export default function ExperienceTable() {
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
      tech: 'ASP.NET Core, Angular, ArcGIS Maps SDK [cite: 12, 15, 19]',
    },
    {
      company: 'Accenture',
      role: 'Senior Software Engineer',
      period: '2021.09 – 2022.03',
      tech: 'Savigent Platform, MES/MOM, AngularJS [cite: 20, 22, 25]',
    },
    {
      company: 'evosoft Hungary Kft.',
      role: 'Software Engineer / Scrum Master',
      period: '2018.08 – 2021.08',
      tech: 'React, .NET Core, Azure DevOps, Scrum [cite: 28, 30, 36]',
    },
    {
      company: 'ZF Hungária Kft.',
      role: 'Production IT Support',
      period: '2017.11 – 2018.08',
      tech: 'Siemens PLC, Profibus, Profinet, Ghost [cite: 37, 39, 43]',
    },
    {
      company: 'Procter & Gamble Hyginett Kft.',
      role: 'IT Support',
      period: '2017.09 – 2017.11',
      tech: 'Szerver karbantartás, Avaya, ServiceNow [cite: 45, 48, 52]',
    },
    {
      company: 'Tamiasz Kft.',
      role: 'IT Teacher',
      period: '2017.05 – 2017.08',
      tech: 'GINOP felnőttképzés, MS Office [cite: 53, 54, 59]',
    },
    {
      company: 'Wigner Jenő Szakoktatási Kft.',
      role: 'IT Teacher / System Admin',
      period: '2016.08 – 2017.08',
      tech: 'C#, OOP, CISCO CCNA [cite: 60, 61, 64, 68]',
    },
    {
      company: 'Robert Bosch Kft.',
      role: 'Software Engineer Trainee',
      period: '2015.06 – 2016.07',
      tech: 'C#, TSQL, DevExpress, TFS [cite: 65, 70, 73]',
    },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <TableContainer component={Paper} elevation={4} sx={{ borderRadius: 2 }}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                Cég
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                Pozíció
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                Időtartam
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                Fókusz / Technológiák
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row" color="primary">
                  {row.company}
                </TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell>{row.period}</TableCell>
                <TableCell>{row.tech}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
