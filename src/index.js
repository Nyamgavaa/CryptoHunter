import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CryptoContext from "./CryptoContext";
import 'react-alice-carousel/lib/alice-carousel.css';

ReactDOM.render(
  <React.StrictMode>
    <CryptoContext>
    <App />
    </CryptoContext>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//*This issue fixed in MatrialUI version 5 
//* Алдаа MatrialUI version 5 Дээр засагдсан
// With the release of v5 (release candidate next week) all StrictMode related issues for React 17 (and current 18) will be fixed. For new StrictMode issues in React 18 we'll want to open a new issue (if they come up).

// Happy to close this issue before its 3 year anniversary and thank you for your patience.
//*https://github.com/mui/material-ui/issues/13394
//* Warning: findDOMNode is deprecated in StrictMode.
//  findDOMNode was passed an instance of Transition which
//   is inside StrictMode. Instead, add a ref directly to 
//   the element you want to reference. Learn more about 
//   using refs safely 
//   here: https://reactjs.org/link/strict-mode-find-node