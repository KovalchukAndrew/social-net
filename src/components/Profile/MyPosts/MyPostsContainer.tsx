import React from "react";

import {ActionType, addPostAC, changePostMessageAC, PostsType} from "../../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {AppRootStateType} from "../../../Redux/redux-store";
import {connect} from "react-redux";
import {Dialogs} from "../../Dialogs/Dialogs";
import {Dispatch} from "redux";
import {InitialStateType, sendMessageBodyAC, updateNewMessageBodyAC} from "../../../Redux/dialogs-reducer";

/*
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
}*/

type MapStateToPropsType = {
    posts: Array<PostsType>
    newPostText: string
}
type MapDispatchToPropsType = {
    addPost: (text: string) => void
    changePostMessage: (text: string) => void
}

export type MyPostPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (text: string) => {
            dispatch(addPostAC(text))
        },
        changePostMessage: (text: string) => {
            dispatch(changePostMessageAC(text))
        }
    }
}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);