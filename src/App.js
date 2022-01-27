
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
//import Alert from './components/Alert';
/*import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";*/
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
        setAlert({
          msg: message,
          type: type
        })
  }
  const toggle = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#3f3d45';
      showAlert("Dark mode has been enabled", "success");
      document.title = "XTyLo-Dark-Mode";
      //setInterval(() => {
        //document.title = "XTyLo is amazing";
      //}, 2000);
      //setInterval(() => {
        //document.title = "Just install XTyLo";
     // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "XTyLo-Light-Mode";
    }
  }
  return (
    <>

     <Navbar title="XTyLo" mode={mode} toggle={toggle} />
         
         <div className="container my-3">
         <TextForm showAlert={showAlert} heading ="Enter the text to analyze" mode={mode} />
         </div>
                    {/*} <Router>
                          

                            <Switch>
                            <Route exact path="/about">
                              <About />
                            </Route>
                            <Route exact path="/">
                              
                            </Route>
                            </Switch>
                          




                  </Router>*/}
    </>
                
                   
                
      
    
  );
}

export default App;
//to replace multi items in a web page we use ctrl + F
//<About/>
// 
//
