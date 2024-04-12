import axios from 'axios';

export default class DataService {
    get(url, callback) {
        axios.get(url)
        .then(function (response) {
            callback(response);
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    post(url, data) {
        axios.post(url, data)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
    }
}