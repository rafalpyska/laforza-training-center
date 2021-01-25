import Api from '@/services/Api';

export default {
  register(credentials) {
    return Api().post('/auth/local/register', credentials)
  },
  login(credentials) {
    return Api().post('/auth/local', credentials)
  }
}
