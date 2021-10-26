import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
});

export type AppRootStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer)

/*declare global {
    interface Window { store: any }
}
window.store = store*/

export default store;