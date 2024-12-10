import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

export const updatePassword = async (userId, newPassword, confirmPassword) => {
    const response = await axios.put(`${API_URL}/update-password`, {
        userId,
        newPassword,
        confirmPassword,
    });
    return response.data;
};
