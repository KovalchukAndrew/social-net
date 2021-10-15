import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom'
import {News} from './components/News/News';
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogsType, ProfileType} from "./Redux/store";
import {ActionType} from "./Redux/profile-reducer";



type AppPropsType = {
    profilePage: ProfileType
    dialogsPage: DialogsType
    /*addPost: (textPost: string) => void*/
    //changePostMessage: (text: string) => void
    //newPostText: string
    dispatch: (action: ActionType) => void
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile
                        posts={props.profilePage.posts}
                        /*addPost={props.addPost}*/
                        dispatch={props.dispatch}
                        newPostText={props.profilePage.newPostText}
                        //changePostMessage={props.changePostMessage}
                    />}
                    />
                    <Route exact path='/dialogs' render={() => <Dialogs
                        usersArray={props.dialogsPage.usersArray}
                        messages={props.dialogsPage.messages}
                        newMessageBogy={props.dialogsPage.newMessageBogy}
                        dispatch={props.dispatch}
                    />}
                    />
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/nast' render={() => <Settings/>}/>

                </div>


            </div>
        </BrowserRouter>

    );
}


export default App;
