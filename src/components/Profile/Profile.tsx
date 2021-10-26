import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfilePropsType} from "./ProfileContainer";

export function Profile(props: ProfilePropsType) {

    return (
        <div>
            <ProfileInfo props={props.profile.fullName}/>
            <MyPostsContainer/>
        </div>
    )
}

