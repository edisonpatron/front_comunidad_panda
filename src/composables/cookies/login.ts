import {removeCookie, getCookie} from "typescript-cookie";

export function isLogged() {
    const userData = getCookie('user');
    return userData !== null && userData !== undefined;
}

export function user() {
    const userData = getCookie('user');
    return JSON.parse(<string>userData);
}

export function logout() {
    removeCookie('user');
    removeCookie('_token');
}