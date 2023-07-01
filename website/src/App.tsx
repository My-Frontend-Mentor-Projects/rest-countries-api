import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './assets/GlobalStyles';
import { Home } from './pages';
import { lightTheme, darkTheme } from './assets/Themes';
import 'normalize-css';

function App() {
  const themeMode = lightTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
}

export default App;
