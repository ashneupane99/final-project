
import { Button } from 'react-bootstrap';
import './App.css';
import { FaBeer } from 'react-icons/fa';
import { GiAbstract024 } from "react-icons/gi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={"coming soon"}></Route>
      </Routes>
     <Button>Hey 
      <FaBeer></FaBeer>
      <GiAbstract024></GiAbstract024>
     </Button>
    </div>
  );
}

export default App;
