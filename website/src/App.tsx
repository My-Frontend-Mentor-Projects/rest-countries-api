import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Home, Country } from './pages';
import { Header } from './Components';
import { useDarkMode } from './hooks/useDarkMode';
import { GlobalStyles } from './assets/GlobalStyles';

function App() {
  const { currentTheme, themeToggler } = useDarkMode();

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Header themeToggler={themeToggler} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/rest-countries-api/country/:countryCode'
          element={<Country />}
        />
        <Route path='*' element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
