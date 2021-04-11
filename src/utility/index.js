import { API_KEYS } from "./constants";
import CryptoJS from 'crypto-js';

export const getQueryParams = () => {
    const ts = new Date().getTime();
    const message = ts+API_KEYS.private+API_KEYS.public;
    const hash = CryptoJS.MD5(message);

    return `ts=${ts}&apikey=${API_KEYS.public}&hash=${hash}`;
}

export const getFilterFromPayload = (payload) => {
    if(payload && payload.length>0){
        let filterUrl = '';
        payload.forEach(filter => {
            filterUrl +=`&${filter.key}=${filter.value}`;
        });
        return filterUrl;
    }
    return '';
}