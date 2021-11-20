import axios from "axios";
import {UserType} from "../Redux/users-reducer";
import {DataType} from "../Redux/auth-reducer";
import {ProfileType} from "../Redux/profile-reducer";

type ResponseType<D> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}

export const socialNetAPI = {
    getUsers (currentPage: number, pageSize: number, term: string) {
        const promise = axios.get<{ items: UserType[], totalCount: number }>(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}&term=${term}`, {
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
    },
    setUser () {
        const promise = axios.get<{resultCode: number, data: DataType }>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
        return promise;
    },
    setProfileUsers(userId: string) {
        const promise = axios.get<ProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId)
        return promise;
    },
    getStatus(userId: string) {
        const promise = axios.get<string>(`https://social-network.samuraijs.com/api/1.0/profile/status/`+ userId)
        return promise
    },
    updateStatus(status: string) {
        const promise = axios.put<ResponseType<{status: string}>>(`https://social-network.samuraijs.com/api/1.0/profile/status`, {status: status}, {
            withCredentials: true,
            headers: {"API-KEY": "46d63a79-f294-4637-98b3-eaef83d2a733"},
        } )
        return promise
    },
    login(email: string, password: string, remeberMe: boolean) {
        return axios.post<{resultCode: number, data: DataType }>(`https://social-network.samuraijs.com/api/1.0/auth/login`, {email, password, remeberMe,})
    },
    logout() {
        return axios.delete(`https://social-network.samuraijs.com/api/1.0/auth/login`)
    },



}

