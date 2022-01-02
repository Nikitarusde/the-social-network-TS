import React, {StatelessComponent} from 'react';
import "./logo.jpg"
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/navbar/profile/Profile";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Dialogs} from "./components/navbar/dialogs/Dialogs";
import {News} from "./components/navbar/News/News";
import {Music} from "./components/navbar/Music/Music";
import {Settings} from "./components/navbar/Setting/Settings";
import {State} from "./redux/state";
import {addPost} from "./redux/state";

type AppPropsTpe = {
    state: State,
}

function App(props: AppPropsTpe) {


    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Routes>
                        <Route path="/profile" element={<Profile profilePage={props.state.profilePage} addPost={addPost}/>}/>
                        <Route path="/dialogs/*" element={<Dialogs dialogsPage={props.state.dialogsPage}/>}/> {/*добавлена звездочка*/}
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
