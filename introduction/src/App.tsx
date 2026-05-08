import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import ResponsiveAppBar from './core/Appbar';
import Home from './components/Home';
import Jobs from './components/Jobs';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Schools from './components/Schools';
const darkTheme = createTheme({
  palette: {
    mode: 'dark', // Vagy egy state-ből jövő érték: darkMode ? 'dark' : 'light'
  },
});
export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      {/* A CssBaseline alapvető, hogy a háttérszín is sötét legyen az egész oldalon */}
      <CssBaseline />
      <Router>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/introduction" element={<Home />} />
          <Route path="/introduction/about" element={<About />} />
          <Route path="/introduction/jobs" element={<Jobs />} />
          <Route path="/introduction/schools" element={<Schools />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
