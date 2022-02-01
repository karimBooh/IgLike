import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export class HttpService<T> {
    protected baseUrl: string;
    protected http: AxiosInstance;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
        this.http = axios.create({
            baseURL: 'http://localhost:8080' + baseUrl
        });
        this.jwtInterceptor();
    }

    jwtInterceptor(): void {
        this.http.interceptors.request.use((config: AxiosRequestConfig) => {
            if (config.headers) {
                config.headers.authorization = `bearer ${localStorage.getItem('jwt')}`;
            }
            return config;
        });
    }

    async get<U>(url: string, config: AxiosRequestConfig): Promise<T | U> {
        return await this.http.get(url, config);
    }

    async post(url: string, data: T): Promise<T> {
        return await this.http.post(url, data);
    }

    async put(url: string, data: T): Promise<T> {
        return await this.http.put(url, data);
    }

    async delete(url: string): Promise<T> {
        return await this.http.delete(url);
    }
}
