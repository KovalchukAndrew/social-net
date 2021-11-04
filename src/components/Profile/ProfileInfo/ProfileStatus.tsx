import React, {useState} from "react";

type ProfileInfoPropsType = {
    props: string
    photo: string
}


export function ProfileStatus(props: any) {

    let [editMode, setEditMode] = useState<boolean>(true)

    return (
        <>
            <div>
                {editMode ? <span
                    onDoubleClick={() => setEditMode(false)

                    }>{props.status}</span> : <></>}
            </div>
            <div>
                {!editMode ? <input
                    onBlur={() => setEditMode(true)}
                    autoFocus
                    value={props.status} /> : <></>}
            </div>
        </>

    )
}

