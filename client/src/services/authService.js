import axios from 'axios';

const BASE_URL = 'http://localhost:5000'

export const signUp = signUpObj => {
   return new Promise((resolve, reject) => {
       axios.post(`${BASE_URL}/signup`, signUpObj)
       .then(res => {
           console.log(`res on signup: ${res.data}`);
           resolve(res.data);
       })
       .catch(err => {
           console.log(`err: ${err}`);
           reject(err);
       })
   });
  
}

export const logoutService = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}/logout`)
        .then(res => {
            console.log(`res on logout: ${res.data}`);
            resolve(res.data);
        })
        .catch(err => {
            console.log(`err: ${err}`);
            reject(err);
        })
    });
   
 }
