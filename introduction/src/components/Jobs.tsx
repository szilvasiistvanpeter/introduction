import { useTranslation } from 'react-i18next';
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
import { jobs } from '../const';
import { useEffect } from 'react';

export default function Jobs() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = 'Munkahelyek';
  }, []);

  return (
    <Box sx={{ p: { xs: 1, md: 4 }, bgcolor: '#0a1929' }}>
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{
          borderRadius: 3,
          bgcolor: '#132f4c',
          border: '1px solid #1e4976',
          overflowX: 'auto',
        }}
      >
        <Table sx={{ minWidth: 700 }} size="medium">
          <TableHead sx={{ bgcolor: 'rgba(66, 165, 245, 0.08)' }}>
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: 'bold',
                  color: 'white',
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
            {jobs.map((job, index) => (
              <TableRow
                key={index}
                sx={{
                  '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.03)' },
                  transition: 'background-color 0.2s',
                }}
              >
                <TableCell
                  sx={{
                    color: 'var(--brand-blue2)',
                    fontWeight: 'bold',
                    borderBottom: '1px solid rgba(30, 73, 118, 0.5)',
                  }}
                >
                  {job.company}
                </TableCell>
                <TableCell
                  sx={{
                    color: '#e0e0e0',
                    borderBottom: '1px solid rgba(30, 73, 118, 0.5)',
                  }}
                >
                  {t(job.role)}
                </TableCell>
                <TableCell
                  sx={{
                    color: '#b0bec5',
                    whiteSpace: 'nowrap',
                    borderBottom: '1px solid rgba(30, 73, 118, 0.5)',
                  }}
                >
                  {t(job.period)}
                </TableCell>
                <TableCell
                  sx={{
                    color: '#aaa',
                    fontSize: '0.85rem',
                    borderBottom: '1px solid rgba(30, 73, 118, 0.5)',
                  }}
                >
                  {t(job.tech)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
