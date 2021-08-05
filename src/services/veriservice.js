import axios from "axios";

import React from 'react'

export default class Veriservices{
    getVeriler(){
        return axios.get("http://localhost:8080/api/veriler/getAll")
    }
}
