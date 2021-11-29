import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from 'react-router-dom'
import {News} from './components/News/News';
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileClassContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/login/Login";
import {connect} from "react-redux";
import {AppRootStateType} from "./Redux/redux-store";
import {initialize} from "./Redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

type MapDispatchToPropsType = {
    initialize: () => void
}
type MapStateToPropsType = {
    initialized: boolean
}

type AppPropsType = MapStateToPropsType & MapDispatchToPropsType

class App extends React.Component <AppPropsType> {
    componentDidMount() {
        this.props.initialize()
    }

    render() {
        {
            if (!this.props.initialized) {
                return <Preloader/>
            }
        }
        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Route path='/profile/:userId?' render={() => <ProfileClassContainer
                        />}
                        />
                        <Route exact path='/dialogs' render={() => <DialogsContainer
                        />}
                        />
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/nast' render={() => <Settings/>}/>
                        <Route path='/login' render={() => <Login/>}/>

                    </div>


                </div>
            </BrowserRouter>

        );
    }
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initialize})(App);
