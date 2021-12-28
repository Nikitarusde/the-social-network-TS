import React from 'react';
import "./logo.jpg"
import './App.css';


function App() {
    return (
        <div className={"app-wrapper"}>
            <header className={"header"}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Emoji_u1f335.svg/768px-Emoji_u1f335.svg.png"
                    alt="#"/>
            </header>
            <nav className={"nav"}>
                <div>
                    <a href="">Profile</a>
                </div>
                <div>
                    <a href="">Messages</a>
                </div>
                <div>
                    <a href="">News</a>
                </div>
                <div>
                    <a href="">Music</a>
                </div>
                <div>
                    <a href="">Settings</a>
                </div>
            </nav>
            <div className={"content"}>
                <div>
                    <img
                        src="https://images.unsplash.com/photo-1549262166-10bfa568ae30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
                        alt=""/>
                </div>
                <div>
                    ava
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png" alt=""/>
                </div>
                <div>
                    My posts
                    <div>New post</div>
                    <div>
                        <div>
                            post1
                        </div>
                        <div>
                            post2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default App;
