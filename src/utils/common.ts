import {Lead} from '../store/slices/leadsSlice';

export const getFullAddress = (address: Lead['address']) => {
  if (!address || typeof address !== 'object') {
    return '';
  }
  return [
    address.addressLine1,
    address.city,
    address.state,
    address.pinCode,
    address.country,
  ]
    .filter(Boolean)
    .join(', ');
};
