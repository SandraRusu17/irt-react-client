import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/users';



class UserService {

  getUsers() {
    return axios.get(API_URL, { headers: authHeader() });
  }

  deleteUser(userId) {
    return axios.delete(API_URL + '/' + userId, { headers: authHeader() });
  }

  createUser(username, firstname, lastname, specialty, role, email, password) {
    return axios.post(API_URL, {
      username,
      firstName: firstname,
      lastName: lastname,
      specialty,
      role,
      email,
      password
    }, { headers: authHeader() });
  }
}

export default new UserService();
