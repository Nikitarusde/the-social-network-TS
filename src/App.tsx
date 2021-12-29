import React from 'react';
import "./logo.jpg"
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/navbar/profile/Profile";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Dialogs} from "./components/navbar/dialogs/Dialogs";
import {News} from "./components/navbar/News/News";
import {Music} from "./components/navbar/Music/Music";
import {Setting} from "./components/navbar/Setting/Setting";


function App() {
    return (
        <BrowserRouter>
        <div className={"app-wrapper"}>
            <Header />
            <Navbar />
            <Routes>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/dialogs" element={<Dialogs/>}/>
                <Route path="/news" element={<News/>}/>
                <Route path="/music" element={<Music/>}/>
                <Route path="/settings" element={<Setting/>}/>
            </Routes>
        </div>
        </BrowserRouter>
    );
}


export default App;
