import React from "react";

import Preloader from "../../common/Preloader/Preloader";

type ProfileInfoPropsType = {
    props: string
    photo: string
}


export function ProfileInfo(props: ProfileInfoPropsType) {


    return (
        <div>
            <div>
                <img
                    src='https://media-exp1.licdn.com/dms/image/C4E1BAQE-Zxrt-01Idw/company-background_10000/0/1615323777521?e=2159024400&v=beta&t=8U_G8GwdzneRm4cihyeOfmKKJjk0e-qtZHmWqX4b1NQ'/>
            </div>
            <div>
                <img src={props.photo}/>
                {props.props}
            </div>
        </div>
    )
}

