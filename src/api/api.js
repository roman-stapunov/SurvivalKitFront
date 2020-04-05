import axios from 'axios';

const http = require("http");

const api = axios.create({
    baseURL: "//survivalkitnet.goldaim.ru",
    responseType: "json",
    headers: {
        "Authorization": localStorage.getItem("userToken"),
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
    },
    responseEncoding: 'utf8',
    httpAgent: new http.Agent({
        keepAlive: true
    }),
    withCredentials: true
});

export default api;