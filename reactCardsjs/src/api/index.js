import axios from 'axios';

 
export const apiRepos = axios.create({
    baseURL: "https://api.github.com/users/maykbrito/repos"
}); 