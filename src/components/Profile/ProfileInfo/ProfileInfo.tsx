import React from "react";
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoPropsType = {
    props: string
    photo: string
    status: string
    updateStatus: (status: string) => void
}


export function ProfileInfo(props: ProfileInfoPropsType) {


    return (
        <div>
            <div>

            </div>
            <div>
                <img src={props.photo}/>
                {props.props}
                <ProfileStatus
                    status={props.status}
                    updateStatus={props.updateStatus}
                />
            </div>
        </div>
    )
}

