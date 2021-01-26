import Api from '@/services/Api';
import authenticationHeaders from './authenticationHeaders';

class UserService {
  getUserPanel() {
    return Api().get('/profile', { headers: authenticationHeaders() });
  }
}

export default new UserService();