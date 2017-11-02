import { API_URL, TOKEN_COOKIE } from '../../constants/index';
import Axios, { AxiosInstance } from 'axios';
import * as Cookies from 'js-cookie';
import ApiInterface from '../../business/ApiInterface';

export default class WebApi implements ApiInterface {

    private readonly axiosInstance: AxiosInstance;

    constructor() {
        // Defaults
        const config = {
            baseURL: API_URL,
            timeout: 15000,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': '',
            },
        };

        const token = Cookies.get(TOKEN_COOKIE);

        if (token && token.length > 0) {
            config.headers.Authorization = `bearer ${token}`;
        }

        this.axiosInstance = Axios.create(config);

        //set auth headers to axios instance
        this.axiosInstance.interceptors.request.use((config: any) => {
            const token = Cookies.get(TOKEN_COOKIE);
            if (token && token.length > 0) {
                config.headers.Authorization = `bearer ${token}`;
            }
            return config;
        });
    }

    get(endpoint: string, qs: any): Promise<any> {
        return this.axiosInstance.get(endpoint, {params: qs});
    }

    post(endpoint: string, data: object, config?: any): Promise<any> {
        return this.axiosInstance.post(endpoint, data, config);
    }

    put(endpoint: string, data: object): Promise<any> {
        return this.axiosInstance.put(endpoint, data);
    }
}