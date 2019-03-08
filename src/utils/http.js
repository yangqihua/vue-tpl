/**
 * Created by yangqihua on 2017/01/17.
 */

import axios from "axios";

axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/';

class HTTPUtil {
    static async request(url, params = {}, method = 'get') {
        if (method === 'get') {
            params = {params: params}
        }
        let response = await axios[method](url, params).catch(function (error) {
            console.log('请求数据异常')
        });
        if (response && response.status === 200) {
            return response.data
        }
        return ''
    }

    static async get(params = {}, url) {
        return await HTTPUtil.request(url, params, 'get')
    }

    static async post(params = {}, url) {
        return await HTTPUtil.request(url, params, 'post')
    }
}

export default HTTPUtil
