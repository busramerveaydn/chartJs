import axios from "axios";

export default class UserServices{
    getUsers(){
        return axios.get("http://localhost:8080/api/users/getAll")
    }
}