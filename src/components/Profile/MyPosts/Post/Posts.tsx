import React from "react";
import s from './Posts.module.css'
import {PostsType, RootAppStateType} from "../../../../Redux/store";

export function Posts(props:PostsType) {
    return (
        <div className={s.item}>
            <img src = 'https://avatars.mds.yandex.net/get-kinopoisk-post-img/1539913/2c3147c789ba0710ef94823ae8e57901/960'/>
            {props.message}
            <div>
                <span>like</span>
                {props.likeCount}
            </div>

        </div>
    )
}

