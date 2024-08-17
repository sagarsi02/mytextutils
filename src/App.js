import React, { useState } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import icon from './logo.png';




function App() {
  // UseState
  // For Dark Mode
  const [themeMode, setMode] = useState('light')
  // For Mode
  const [getAlert, setAlert] = useState(null)
  // For Highlight Page Menu
  const [getPage, setPage] = useState('home')

  const showPage = (page) => {
    setPage(page)
  }

  const showAlert = (message, messageType) => {
    setAlert({
      msg: message,
      type: messageType
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (themeMode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#15232E'
      showAlert('Dark Mode Enable')

      setInterval(() => {
        document.title = 'Textutils is Amazing';
      }, 2000);
      setInterval(() => {
        document.title = 'Install Textutils Now';
      }, 1500);
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = '#ffffff'
      showAlert('Light Mode Enable')
    }
  }
  return (
    <>
      <Router>
        <Navbar
          title="PayPlus"
          logo={icon}
          mode={themeMode}
          toggleMode={toggleMode}
          getPage={getPage}
        />
        <Alert alert={getAlert} />
        <Routes>
          <Route
            exact path="/"
            element={
              <TextForm
                title="Enter Your Text for Analyze"
                mode={themeMode}
                showAlert={showAlert}
                addPage={showPage}
              />
            }
          />
          <Route
            exact path="/about"
            element={
              <About
                logo={icon}
                mode={themeMode}
                addPage={showPage}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
