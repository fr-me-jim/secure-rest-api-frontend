import axiosInstance from './index';

export const postLoginCredentials = async () => {
    try {
        const response = await axiosInstance.post('/auth/login', {
            email: 'admin@gmail.com',
            password: 'EP65rqpqbuz>:3)oV#XEAr^:|>=tx/nO'
        });

        return response.data;
    } catch (error: unknown) {
        throw error ;
    }
}
