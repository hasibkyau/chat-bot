import { render } from '@testing-library/react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// const navigate = useNavigate();
const getData = (token) => {

    const USER_TOKEN = token;
    const URL = "https://dummyjson.com/auth/me"
    const AuthStr = 'Bearer ' + USER_TOKEN;

    // Post request to get the Empoloyee information
    axios.get(URL, { 'headers': { 'Authorization': AuthStr } })
        .then(response => {
            // localStorage.setItem("MyProfile", JSON.stringify(profile[0]))
            console.log(response)
            // Deleting previous data
            localStorage.removeItem('data');
            // Storing the employee information
            localStorage.setItem('data', JSON.stringify(response.data));
        });
}


const logIn = (authData) => {
    // const navigate = useNavigate();
    const values = {
        username: 'kminchelle',
        password: '0lelplR',
    }

    // let isValid = false;

    axios.post('https://dummyjson.com/auth/login', values)
        .then(response => {
            console.log(response.data);
            if (response.status === 200) {
                localStorage.removeItem('token');
                localStorage.setItem('token', JSON.stringify(response.data.token));
                console.log('token', JSON.stringify(response.data.token));
                getData(response.data.token)
                // useNavigate("/");
                // isValid = true;
                // return isValid
            }else{
                // useNavigate("/login");
            }
        }).then(console.log)

       
}

export const authCheck = (token) => {
    getData(token);
}


export const auth = (authData, mode) => {
    if (mode === "Sign Up") {
        const values = {
            first_name: authData.first_name,
            last_name: authData.last_Name,
            phone_number: authData.phone_number,
            email: authData.email,
            password: authData.password,
        }
        console.log(values)
        // post Request to SignUP with user Information (values)
        axios.post('https://test.nexisltd.com/signup', values)
            .then(response => {
                console.log(response)
                if (response.status === 200) {
                    logIn(values)
                }
            });

    } else {
        logIn(authData);
    }
}

