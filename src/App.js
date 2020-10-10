import React, { useState } from 'react';
import './App.css';
import ChangeTheme from './components/ChangeTheme';
import Title from './components/Title';
import { Button, Container } from '@material-ui/core';
import CalcMain from './components/CalcMain';
import { lightTheme, darkTheme } from './libs/Theme';
import { MuiThemeProvider, CssBaseline} from '@material-ui/core';
import { CalcHistoryProvider } from './contexts/CalcHistoryContext'

function App() {
  const [theme, setTheme] = useState(darkTheme);

  const handleChangeTheme = (setDark) => {
    setDark === true ? setTheme(darkTheme) : setTheme(lightTheme);
  }

  console.log('theme:', theme)

  return (
    <CalcHistoryProvider>
      <MuiThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <ChangeTheme handleChangeTheme={handleChangeTheme}/>
          <Title />
          <CalcMain />
        </Container>
      </MuiThemeProvider>
    </CalcHistoryProvider>
  );
}

export default App;
