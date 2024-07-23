import axios from './api';

const AuthService = {
    async userRegister(user) {
        try {
            console.log("Jo'natilayotgan ma'lumotlar:", user);  // Bu yerda user ob'ektini tekshirish uchun
            const { data } = await axios.post('/contact-us/lid-create/', user);
            return data;
        } catch (error) {
            throw error;
        }
    },
};

export default AuthService;
