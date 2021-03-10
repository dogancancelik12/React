import React from 'react';
import { FreelancerForm } from '../components/freelancer/FreelancerForm';
import { apiClient } from '../client/apiClient';

export const AddFreelancer = () => {
  const onFinish = values =>
    apiClient.createFreelancers({ ...values, skills: { technical: values.technical, creative: values.creative } });

  return <FreelancerForm onFinish={onFinish} />;
};
