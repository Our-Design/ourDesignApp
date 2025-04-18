import apiClient from './apiClient';

interface CreateOrderPayload {
  amount: number;
  leadId: string;
  designerId: string;
}

export const createOrderAPI = async ({
  amount,
  leadId,
  designerId,
}: CreateOrderPayload) => {
  try {
    const res = await apiClient.post('/payments/create-order', {
      amount,
      leadId,
      designerId,
    });

    return res.data;
  } catch (err: any) {
    throw new Error(
      err?.response?.data?.message || 'Failed to create Razorpay order',
    );
  }
};
