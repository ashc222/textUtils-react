
import react, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

// import { BrowserRouter, Route, Routes} from 'react-router-dom';
  
    function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
       msg: message,
       type: type

    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);


  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success")
    }

  }
  return (
    <>
    
    {/* <Navbar title="TextUtils" aboutText="about"/>  */}
     {/* <Navbar/>  */}
    
     {/* <BrowserRouter> */}
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/> 
           <Alert alert={alert}/>
     
           <div className="container my-3">
          {/* <Routes>
            <Route exact path="/about" element={<About/>} >

            </Route> */}

            {/* <Route exact path="/" element={}> */}
            <TextForm showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode}/>

            {/* </Route>
          
           
          </Routes> */}

          </div>
           


          {/* </BrowserRouter> */}
   
    </>
 
  );
}

export default App;
