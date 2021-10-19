import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
});

export type AppRootStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer)

export default store;