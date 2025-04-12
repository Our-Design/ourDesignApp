import apiClient from './apiClient';

export const fetchAllLeadsAPI = async () => {
  try {
    const res = await apiClient.get('/leads');
    return res.data;
  } catch (err: any) {
    throw new Error(err?.response?.data?.message || 'Failed to fetch leads');
  }
};

export const fetchMyLeadsAPI = async () => {
  try {
    const res = await apiClient.get('/leads/my');
    return res.data;
  } catch (err: any) {
    throw new Error(err?.response?.data?.message || 'Failed to fetch my leads');
  }
};
