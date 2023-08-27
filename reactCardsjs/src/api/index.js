import axios from 'axios';

export async function apiRepos() {
    const response = await axios.get('https://api.github.com/users/maykbrito/repos');
    
    console.log(response)
}   
// apiRepos() 