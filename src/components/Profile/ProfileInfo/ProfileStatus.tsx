import React, {useEffect, useState} from "react";

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}


export function ProfileStatus(props: ProfileStatusPropsType) {

    let [editMode, setEditMode] = useState<boolean>(true)
    let [status, setStatus] = useState<string>(props.status)
    useEffect(() => {
        setStatus(props.status)
    },[props.status])
    return (
        <>
            <div>
                {editMode ? <span
                    onDoubleClick={() => {
                        props.updateStatus(status)
                        setEditMode(false)
                    }

                    }>{props.status || "Your status"}</span> : <></>}
            </div>
            <div>
                {!editMode ? <input
                    onChange={(e) => {
                        setStatus(e.currentTarget.value)
                    }
                    }
                    onBlur={() => {
                        props.updateStatus(status)
                        setEditMode(true)

                    }}
                    autoFocus
                    value={status} /> : <></>}
            </div>
        </>

    )
}

