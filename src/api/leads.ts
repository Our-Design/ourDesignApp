import apiClient from './apiClient';

export const fetchAllLeads = async () => {
  const response = await apiClient.get('/leads');
  return response.data;
};

export const fetchMyLeads = async () => {
  const response = await apiClient.get('/leads/my');
  return response.data;
};

export const fetchLeadDetails = async (id: string) => {
  const response = await apiClient.get(`/leads/${id}`);
  return response.data;
};
