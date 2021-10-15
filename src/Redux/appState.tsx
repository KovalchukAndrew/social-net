export type MessagesType = {
    id: string, message: string,
}
export type UsersArrayType = {
    id: string, name: string
}
export type PostsType = {
    id: string
    message: string
    likeCount: number
}
export type ProfileType = {
    posts: Array<PostsType>
    newPostText: string
}
export type DialogsType = {
    usersArray: Array<UsersArrayType>
    messages: Array<MessagesType>
    newMessageBogy: string
}
export type RootAppStateType = {
    profilePage: ProfileType
    dialogsPage: DialogsType

}

export type StoreType = {
    _state: RootAppStateType
    _callback: () => void
    addPost: (textPost: string) => void
    changePostMessage: (text: string) => void
    subscribe: (observer: () => void) => void
    getState: () => RootAppStateType
    dispatch: (action: ActionType) => void
}

const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: '1', message: "Hi, how are you?", likeCount: 15},
                {id: '2', message: "This is my first message!", likeCount: 11},
            ],
            newPostText: "",
        },
        dialogsPage: {
            usersArray: [
                {id: '1', name: "Andrew"},
                {id: '2', name: "Polly"},
                {id: '3', name: "Kirill"},
                {id: '4', name: "John"},
            ],
            messages: [
                {id: '1', message: "Hi"},
                {id: '2', message: "How are you"},
                {id: '3', message: "What's up"},
                {id: '4', message: "Yo"},
            ],
            newMessageBogy: "",
        },
    },
    _callback() {
    },
    addPost(textPost: string) {
        const newPost: PostsType = {id: "4", message: textPost, likeCount: 0};
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ""
        this._callback()
    },
    changePostMessage(text: string) {
        this._state.profilePage.newPostText = text
        this._callback()
    },
    subscribe(observer) {
        this._callback = observer;
    },
    getState() {
        return this._state
    },
    dispatch(action: ActionType) {
        if (action.type === "ADD-POST") {
            const newPost: PostsType = {id: "4", message: action.textPost, likeCount: 0};
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ""
            this._callback()
        } else if (action.type === "CHANGE-POST-MESSAGE") {
            this._state.profilePage.newPostText = action.text
            this._callback()
        } else if (action.type === "UPDATE-NEW-MESSAGE-BODY") {
            this._state.dialogsPage.newMessageBogy = action.body;
            this._callback();
        } else if (action.type === "SEND-MESSAGE") {
            let body = this._state.dialogsPage.newMessageBogy;
            this._state.dialogsPage.newMessageBogy = "";
            this._state.dialogsPage.messages.push({id: '6', message: body});
            this._callback();
        }
    }
}

export type AddPostActionType = ReturnType<typeof addPostAC>
export type ChangePostMessageActionType = ReturnType<typeof changePostMessageAC>
export type UpdateNewMessageBody = ReturnType<typeof updateNewMessageBodyAC>
export type SendNewMessageBody = ReturnType<typeof sendMessageBodyAC>
export type ActionType = AddPostActionType | ChangePostMessageActionType | UpdateNewMessageBody | SendNewMessageBody

export const addPostAC = (textPost: string) => {
    return {type: "ADD-POST", textPost} as const
}
export const changePostMessageAC = (text: string) => {
    return {type: "CHANGE-POST-MESSAGE", text} as const
}
export const updateNewMessageBodyAC = (body: string) => {
    return {type: "UPDATE-NEW-MESSAGE-BODY", body} as const
}
export const sendMessageBodyAC = () => {
    return {type: "SEND-MESSAGE"} as const
}


export default store;
