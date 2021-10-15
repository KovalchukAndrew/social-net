import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/appState";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                profilePage={store.getState().profilePage}
                dialogsPage={store.getState().dialogsPage}
                /*addPost={store.addPost.bind(store)}*/
                dispatch={store.dispatch.bind(store)}
                newPostText={store.getState().profilePage.newPostText}
                changePostMessage={store.changePostMessage.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}


store.subscribe(rerenderEntireTree);
rerenderEntireTree();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
