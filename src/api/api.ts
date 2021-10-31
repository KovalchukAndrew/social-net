import axios from "axios";
import {UserType} from "../Redux/users-reducer";

type ResponseType<D> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}

export const socialNetAPI = {
    getUsers (currentPage: number, pageSize: number) {
        const promise = axios.get<{ items: UserType[], totalCount: number }>(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
            withCredentials:true
        })
        return promise;
    },
    unfollowUser (id: number) {
       const promise = axios.delete<ResponseType<{ item: UserType }>>(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,  {
            withCredentials: true,
            headers: {"API-KEY": "46d63a79-f294-4637-98b3-eaef83d2a733"},
        })
        return promise;

    },
    followUser (id: number) {
        const promise = axios.post<ResponseType<{ item: UserType }>>(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
            withCredentials: true,
            headers: {"API-KEY": "46d63a79-f294-4637-98b3-eaef83d2a733"},
        })
        return promise;

    }
}

