// import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./apparences/Navbar";
import Home from "./pages/Home";
import {Route, Router, Routes} from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/adduser" element={<AddUser/>}/>
         <Route path="/edituser/:id" element={<EditUser/>}/>
         <Route path="/viewuser/:id" element={<ViewUser/>}/>
        </Routes>

    </div>
  );
}

export default App;
