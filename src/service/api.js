
import axios from 'axios';
import config from '../config.json';

const cache = localStorage;

export const getForecast = (location) => {
    return new Promise((resolve, reject) => {
        const url = config.BASE_API_URL + "data/2.5/forecast?q=" + location + "&units=imperial&appid=" + config.OPEN_WEATHER_API_KEY;
        const item = cache.getItem(url);
        if (item) { resolve(JSON.parse(item)); return; }
        axios.get(url).then((res) => {
            cache.setItem(url, JSON.stringify(res.data));
            resolve(res.data);
        }).catch(error => { reject(error) })
    })
}