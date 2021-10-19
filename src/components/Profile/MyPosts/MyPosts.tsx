import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import {Posts} from "./Post/Posts";
import {MyPostPropsType} from "./MyPostsContainer";



export const MyPosts = (props: MyPostPropsType) => {
    let postsElement = props.posts.map((p) => <Posts id={p.id} message={p.message} likeCount={p.likeCount}/>)

    const add = () => {
        props.addPost(props.newPostText)

    }

    const onChangePost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changePostMessage(e.currentTarget.value)
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