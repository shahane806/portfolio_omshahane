import axios from 'axios';
const baseUrl = process.env.REACT_APP_API_URL;
const APIs = axios.create({baseUrl});

APIs.get("/",(res)=>{
    console.log(res)
})