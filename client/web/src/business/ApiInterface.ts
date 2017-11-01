export default interface ApiInterface {
    get(endpoint: string, qs?: any): Promise<any>;

    post(endpoint: string, data: object, config?: any): Promise<any>;

    put(endpoint: string, data: object): Promise<any>;
}

export class ApiAbstract {

    constructor(private readonly api: ApiInterface) {
    }

    public getApi = () => {
        return this.api;
    }
}