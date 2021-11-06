import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {OwnProfilePropsType} from "./ProfileContainer";

export function Profile(props: OwnProfilePropsType) {

    return (
        <div>
            <ProfileInfo
                props={props.profile.fullName}
                photo={
                    !props.profile.photos?.large ? "" : props.profile.photos.large}
                status={props.status}
                updateStatus={props.updateStatusThunkCreator}
            />
            <MyPostsContainer/>
        </div>
    )
}

