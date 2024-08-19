import axiosInstance from '../apicalls/index';

export const RegisterUser = async (email, password, name) => {
  const response = await axiosInstance.post('/user/register', {
    email,
    password,
    name,
  });
  return response.data;
};