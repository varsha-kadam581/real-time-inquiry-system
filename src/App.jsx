import React from 'react'
import ContentPage from './Components/ContentPage';
import Login from './Components/Login';
import Register from './Components/Register';
import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom";


function App() {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ContentPage/>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App;
