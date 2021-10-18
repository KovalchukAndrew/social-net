import React, {ChangeEvent} from "react";

import {ActionType, addPostAC, changePostMessageAC} from "../../../Redux/profile-reducer";
import {PostsType, StoreType} from "../../../Redux/store";
import {MyPosts} from "./MyPosts";
import {AppRootStateType} from "../../../Redux/redux-store";


export type MyPostsContainerPropsType = {
    store: AppRootStateType
    //posts: Array<PostsType>
    /*addPost: (textPost: string) => void*/
    //changePostMessage: (text: string) => void
    //newPostText: string
    dispatch: (action: ActionType) => void
}

export const MyPostsContainer = (props: MyPostsContainerPropsType) => {
    let state = props.store

    const add = () => {
        props.dispatch(addPostAC(state.profilePage.newPostText))
    }

    const onChangePost = (text: string) => {
        props.dispatch(changePostMessageAC(text))
    }

    return (
        <MyPosts changePostMessage={onChangePost}

                 addPost={add}
                 posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}
        />
    )
}