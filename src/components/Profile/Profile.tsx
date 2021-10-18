import React from "react";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

import {PostsType, StoreType} from "../../Redux/store";
import {ActionType} from "../../Redux/profile-reducer";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {AppRootStateType} from "../../Redux/redux-store";



export type ProfilePropsType = {
    store: AppRootStateType
    //posts: Array<PostsType>
    //newPostText: string
    /*addPost: (textPost: string) => void*/
    //changePostMessage: (text: string) => void
    dispatch: (action:ActionType) => void
}

export function Profile(props: ProfilePropsType) {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                store={props.store}
                //posts={props.posts}
                /*addPost={props.addPost}*/
                dispatch={props.dispatch}
                //newPostText={props.newPostText}
                //changePostMessage={props.changePostMessage}
            /></div>
    )
}

