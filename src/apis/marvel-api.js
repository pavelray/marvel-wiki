import axios from 'axios';
import { MARVEL_API_URL } from '../utility/constants';

export default axios.create({
    baseURL: MARVEL_API_URL
});
