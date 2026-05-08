import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import SchoolIcon from '@mui/icons-material/SchoolOutlined';

export const contactLinks = [
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

export const jobs = [
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

export const education = [
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

export const techStack = [
  'React 18',
  'Material UI v6',
  'TypeScript',
  'GitHub Actions',
  'Prettier & ESLint',
  'MkDocs',
];
