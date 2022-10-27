import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Login from "./components/auth/login";
import StartMenu from "./components/start_menu";
import './App.css';


function App() {
  return (
    <div>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path={'/'} element={<StartMenu/>}/>
                <Route path={'/login'} element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
