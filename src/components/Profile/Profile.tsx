import React from "react";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";
import {PostsType} from "../../Redux/store";
import {ActionType} from "../../Redux/profile-reducer";



export type ProfilePropsType = {
    posts: Array<PostsType>
    newPostText: string
    /*addPost: (textPost: string) => void*/
    //changePostMessage: (text: string) => void
    dispatch: (action:ActionType) => void
}

export function Profile(props: ProfilePropsType) {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.posts}
                /*addPost={props.addPost}*/
                dispatch={props.dispatch}
                newPostText={props.newPostText}
                //changePostMessage={props.changePostMessage}
            /></div>
    )
}

