 import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
 const [mode,setmode]=useState('light');//is state that whether dark mode is enabled or not

 const [alert, setalert] = useState(null);
 const showAlert=(message,type)=>{
   setalert({
    msg:message,
    type:type
   })
   setTimeout(() => {
    setalert(null);
   }, 2000);
 }
 const togglemode = (cls) => {
  
  // Check if cls is a string
  if (typeof cls === 'string') {
    document.body.classList.add('bg-' + cls);
  }

  if (mode === 'light') {
    setmode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been enabled", "success");
  } else {
    setmode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled", "success");
  }
};

  return (
   <> 
   <Router>
        <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<TextFrom showAlert={showAlert} heading="TextUtils-Word counter,character counter" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </> 
  );
}

export default App;
