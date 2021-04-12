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

export const getImageUrl = (thumbnail) => {
    if(thumbnail)
        return `${thumbnail.path}.${thumbnail.extension}`;
    
    return "";
}

export const getPrice = (prices) => {

    if(prices?.length >0){
        return Number(prices[0].price).toLocaleString();
    }
    return "";
}

export const getReleaseDate = (dates) => {
    if(dates?.length>0){
        const dateArr = new Date(dates[0].date).toDateString().split(" ");
        const dateStr = `${dateArr[1]}, ${dateArr[2]} ${dateArr[3]}`
        return dateStr;
    }
    return "";
}