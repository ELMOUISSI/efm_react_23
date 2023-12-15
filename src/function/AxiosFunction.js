import axios from 'axios';
const  instance = axios.create({   baseURL: 'https://www.ofppt.ma', });
export default instance;