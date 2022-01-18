import axios_utils from 'axios';

const BASE_URL = 'https://gorest.co.in';
const USER_URL = 'public-api/users';


//gets all users
export function getAllUsers() {
    return axios_utils.get(BASE_URL + '/'+ USER_URL);
}

