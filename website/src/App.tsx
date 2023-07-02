import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './assets/GlobalStyles';
import { Home } from './pages';
import { lightTheme, darkTheme } from './assets/Themes';
import 'normalize-css';
import Country from './pages/Country';

function App() {
  const themeMode = lightTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      {/* <Home /> */}
      <Country />
    </ThemeProvider>
  );
}

export default App;
