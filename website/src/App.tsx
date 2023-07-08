import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './assets/GlobalStyles';
import { Home, Country } from './pages';
import { Header } from './Components';
import 'normalize-css';
import { Routes, Route } from 'react-router-dom';
import { useDarkMode } from './hooks/useDarkMode';

function App() {
  const { currentTheme, themeToggler } = useDarkMode();

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Header themeToggler={themeToggler} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/country/:name' element={<Country />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
