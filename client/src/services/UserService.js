import Api from '@/services/Api';
import authenticationHeaders from './authenticationHeaders';

class UserService {
  getUserPanel() {
    return Api().get('/me', { headers: authenticationHeaders() });
  }
}

export default new UserService();