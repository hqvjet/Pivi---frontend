import {ADMIN} from "../option";

export function getAllUser() {
    return ADMIN.get('/get_all_users')
}