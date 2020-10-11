import React, { useState } from 'react';
import './App.css';
import Title from './components/Title';
import { Container } from '@material-ui/core';
import CalcMain from './components/CalcMain';
import { lightTheme, darkTheme } from './libs/Theme';
import { MuiThemeProvider, CssBaseline} from '@material-ui/core';
import { CalcHistoryProvider } from './contexts/CalcHistoryContext';
import Navigation from './components/Navigation';
import { VisitCountProvider } from './contexts/VisitCountContext';

function App() {
  const [theme, setTheme] = useState(darkTheme);

  const handleChangeTheme = (setDark) => {
    setDark === true ? setTheme(darkTheme) : setTheme(lightTheme);
  }

  console.log('theme:', theme)

  return (
    <CalcHistoryProvider>
      <VisitCountProvider>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Container maxWidth="lg">
            <Navigation handleChangeTheme={handleChangeTheme} />
            <Title />
            <CalcMain />
          </Container>
        </MuiThemeProvider>
      </VisitCountProvider>
    </CalcHistoryProvider>
  );
}

export default App;
