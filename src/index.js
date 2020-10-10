import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  // Because of <React.StrictMode>, <CssBaseline /> didn't work when theme was changed.
  // <React.StrictMode>
  //   <App/>
  // </React.StrictMode>,
  <App />,
  document.getElementById('root')
);
