import axios from 'axios';
import URL from './URL';

// Get Data Function
export const getData = data => axios.get(`${URL}/${data}`);
