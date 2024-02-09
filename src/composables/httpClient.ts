import type {AxiosInstance} from 'axios';
import axios from "axios";
import {URL_SERVER} from "@/config/env.ts";
import {useAuthStore} from "@/stores/auth.ts";

const apiClient: AxiosInstance = axios.create({
    baseURL: URL_SERVER,
    headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
    }
});

apiClient.interceptors.request.use(config => {
    const authStore = useAuthStore();
    const authToken = authStore.authToken;

    if (authToken) {
        config.headers['Authorization'] = `Bearer ${authToken}`
    }
    return config;
})

export default apiClient;