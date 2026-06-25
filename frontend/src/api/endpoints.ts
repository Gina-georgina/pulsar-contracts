import { apiClient } from './client';
import { AuthCredentials, AuthResponse, Merchant, Payment, CreatePaymentPayload } from './types';

export const auth = {
  login: (credentials: AuthCredentials) =>
    apiClient.post<AuthResponse>('/auth/login', credentials).then((r) => r.data),
  logout: () =>
    apiClient.post('/auth/logout').then((r) => r.data),
};

export const merchants = {
  list: () =>
    apiClient.get<Merchant[]>('/merchants').then((r) => r.data),
  get: (address: string) =>
    apiClient.get<Merchant>(`/merchants/${address}`).then((r) => r.data),
};

export const payments = {
  list: () =>
    apiClient.get<Payment[]>('/payments').then((r) => r.data),
  get: (orderId: string) =>
    apiClient.get<Payment>(`/payments/${orderId}`).then((r) => r.data),
  create: (payload: CreatePaymentPayload) =>
    apiClient.post<Payment>('/payments', payload).then((r) => r.data),
};
