import apiClient from './apiClient';

interface CreateOrderPayload {
  amount: number;
  leadId: string;
  designerId: string;
}

interface VerifyPaymentPayload {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
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

export const verifyPaymentAPI = async ({
  razorpay_order_id,
  razorpay_payment_id,
  razorpay_signature,
  leadId,
  designerId,
}: VerifyPaymentPayload) => {
  try {
    const res = await apiClient.post('/payments/verify', {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      leadId,
      designerId,
    });

    return res.data;
  } catch (err: any) {
    throw new Error(err?.response?.data?.message || 'Failed to verify payment');
  }
};
