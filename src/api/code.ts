// import axios from '../http/axios' 
 
 

// export const getlist = () => axios.get('/api/getCode')


import request from "@/http/axios";


export const getList = (data: object) => request({
    url: '/api/getCode',
    method: 'GET',
    params: data
});

export const addNew = (data: object) => request({
    url: '/api/addCode',
    method: 'POST',
    data: data
});