

import './App.css';

import 'react-toastify/dist/ReactToastify.css';
import { Route, Router, Routes } from 'react-router-dom';
import Register from './pages/registration-login/Register';
import Login from './pages/registration-login/Login';

function App() {
  return (
    <div className="">
      
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/registration' element={<Register/>}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
