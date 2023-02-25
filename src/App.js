// import logo from './logo.svg';
 
import Calculator from './Components/Calculator';
import {Route,Routes} from 'react-router-dom'
import Login from './Components/Login';
import Singup from './Components/Singup';

function App() {
  return (
    <Routes>
     
    <Route exact path="/login" element={<Login/>}/>
    <Route exact path="/" element={<Singup/>}/>
    <Route exact path="/calculator" element={<Calculator/>}/>
   
  </Routes>
  );
}

export default App;
