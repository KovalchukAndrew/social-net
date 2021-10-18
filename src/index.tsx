import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/redux-store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Provider} from "react-redux";

const rerenderEntireTree = () => {
    //let state = store.getState()
    ReactDOM.render(
        <Provider store={store}>
            <App
                store={store.getState()}
                //profilePage={store.getState().profilePage}
                //dialogsPage={store.getState().dialogsPage}
                /*addPost={store.addPost.bind(store)}*/
                dispatch={store.dispatch.bind(store)}

                //changePostMessage={store.changePostMessage.bind(store)}
            />
        </Provider>,
        document.getElementById('root')
    );
}
rerenderEntireTree()

store.subscribe(() => {
    rerenderEntireTree()
} );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
