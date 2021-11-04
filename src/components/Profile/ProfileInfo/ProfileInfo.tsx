import React from "react";
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoPropsType = {
    props: string
    photo: string
}


export function ProfileInfo(props: ProfileInfoPropsType) {


    return (
        <div>
            <div>

            </div>
            <div>
                <img src={props.photo}/>
                {props.props}
                <ProfileStatus status={"Hello my friends"}/>
            </div>
        </div>
    )
}

