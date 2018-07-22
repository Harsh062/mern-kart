import axios from 'axios';

const BASE_URL = 'http://localhost:5000'

export const signUp = signUpObj => {
    axios.post(`${BASE_URL}/signup`, signUpObj)
    .then(res => {
        console.log(`res on signup: ${res}`);
    })
    .catch(err => {
        console.log(`err: ${err}`);
    })
}

