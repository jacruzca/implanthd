import { API_URL } from '../../constants/index';
import Axios, { AxiosInstance } from 'axios';
import ApiInterface from '../../business/ApiInterface';

export default class MobileApi implements ApiInterface {

    private readonly axiosInstance: AxiosInstance;

    constructor(token: string) {
        // Defaults
        const config = {
            baseURL: API_URL,
            timeout: 15000,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': '',
            },
        };

        if (token && token.length > 0) {
            config.headers.Authorization = `bearer ${token}`;
        }

        this.axiosInstance = Axios.create(config);
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