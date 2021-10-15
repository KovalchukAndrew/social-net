import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import {Posts} from "./Post/Posts";

import {ActionType, addPostAC, changePostMessageAC} from "../../../Redux/profile-reducer";
import {PostsType} from "../../../Redux/store";


export type MyPostsPropsType = {
    posts: Array<PostsType>
    /*addPost: (textPost: string) => void*/
    //changePostMessage: (text: string) => void
    newPostText: string
    dispatch: (action:ActionType) => void
}

export const MyPosts = (props: MyPostsPropsType) => {
    let postsElement = props.posts.map((p) => <Posts id={p.id} message={p.message} likeCount={p.likeCount}/>)

    const add = () => {
        props.dispatch(addPostAC(props.newPostText))

    }

    const onChangePost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changePostMessageAC(e.currentTarget.value))
    }

    return (
        <div className={s.postBlock}>
            <h3> New post </h3>
            <div>
                <textarea onChange={onChangePost} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={add} className={s.buttonPost}>Add post</button>
                <button className={s.buttonPost}>Remove</button>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>

    )
}