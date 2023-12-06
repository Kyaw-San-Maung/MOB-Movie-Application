import axios from "axios";
import React from 'react'

const Api_url = 'http://localhost:8080/api/v1/movies';

export default function getAllData() {
    
    return axios.get(Api_url);
}

