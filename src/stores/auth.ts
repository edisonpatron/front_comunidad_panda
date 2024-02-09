import {computed, ref} from "vue";
import {defineStore} from "pinia";
import httpClient from "@/composables/httpClient";
import {BackofficeUrls, RESOURCESBACKOFFICE} from "@/views/backoffice/params";
import type {AxiosError} from "axios";

export const useAuthStore = defineStore('auth', () => {

    const encodeUserData = (userData: {}): string => {
        return btoa(JSON.stringify(userData));
    }

    const decodeUserData = (userData: string | null): {} | null => {
        if (userData === null)
            return null;

        return JSON.parse(atob(userData));
    }

    const _authToken = ref(localStorage.getItem('_tk'));
    const _userData = ref(decodeUserData(localStorage.getItem('_u')));

    const setAuthToken = (token: string) => {
        _authToken.value = token;
    };

    const logout = () => {
        clearCredentials();
        clearCredentialsFromLocalStorage();
    }
    const clearCredentials = () => {
        _authToken.value = null;
        _userData.value = null;
    };

    const clearCredentialsFromLocalStorage = () => {
        localStorage.removeItem('_tk');
    }

    const setCredentials = (token: string, userData: {}) => {
        _authToken.value = token;
        localStorage.setItem('_tk', token);
        localStorage.setItem('_u', encodeUserData(userData));
    }

    const isAuthenticated = computed(() => {
        isValidToken();
        return !!_authToken.value;
    });

    const isValidToken = async () => {
        try {
            const response = await httpClient.get(BackofficeUrls.custom(RESOURCESBACKOFFICE.Token, '/validate'));

        } catch (e: AxiosError) {

            const UNAUTHORIZED = 401;
            const NETWORK_ERROR = 'ERR_NETWORK';

            if (e.response?.status == UNAUTHORIZED || e.code == NETWORK_ERROR) {
                clearCredentials();
                clearCredentialsFromLocalStorage();
            }
        }
    }

    const authToken = computed(() => {
        return _authToken.value;
    });


    const dataUser = computed(() => {
        return <{
            responsable: string,
            oficina_id: number,
            id: number,
            name: string,
            type: string
        }>_userData.value;
    });

    return {
        authToken,
        dataUser,
        setCredentials,
        setAuthToken,
        logout,
        isAuthenticated
    }
})