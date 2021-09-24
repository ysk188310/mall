import axios from 'axios'
export function request(config) {
    // return new Promise((resolve, reject) => {
    const instance = axios.create({
            baseURL: 'http://152.136.185.210:7878/api/hy66'
        })
        // 请求拦截器
    instance.interceptors.request.use(config => {
            return config
        })
        // 响应拦截器
    instance.interceptors.response.use(res => {
        return res.data
    })
    return instance(config)
}