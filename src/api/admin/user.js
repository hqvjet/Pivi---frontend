import {ADMIN} from "../option";

export function getAllUser() {
    return ADMIN.get('/get_all_users')
}

export function updateUser(id, data) {
    return ADMIN.patch(`/update_user/${id}`, data)
}

export function deleteUser(id) {
    return ADMIN.delete(`/delete_user/${id}`)
}
