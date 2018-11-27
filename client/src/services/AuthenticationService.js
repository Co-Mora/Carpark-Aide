import API from '@/services/API'

export default {
    login(credentials) {
        return API().post('auth', credentials)
    },
    register(credentials) {
        return API().post('register', credentials)
    }
    
} 