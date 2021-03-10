import axios from 'axios';

const createApiClient = ({ baseURL }) => {
  const client = axios.create({ baseURL });

  const getFreelancers = async () => {
    try {
      const response = await client.get('/freelancer');
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const createFreelancers = async ({ fullname, displayName, email, professions, birthDate, bio, skills }) => {
    try {
      const response = await client.post('/freelancer', {
        fullname,
        displayName,
        email,
        professions,
        birthDate,
        bio,
        skills,
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return { getFreelancers, createFreelancers };
};

export const apiClient = createApiClient({ baseURL: 'http://localhost:9090' });
