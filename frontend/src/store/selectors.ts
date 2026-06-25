import { StoreState } from './index';

export const selectUser = (s: StoreState) => s.user;
export const selectToken = (s: StoreState) => s.token;
export const selectIsAuthenticated = (s: StoreState) => s.isAuthenticated;

export const selectMerchants = (s: StoreState) => s.merchants;
export const selectMerchantsLoading = (s: StoreState) => s.merchantsLoading;
export const selectMerchantsError = (s: StoreState) => s.merchantsError;

export const selectPayments = (s: StoreState) => s.payments;
export const selectPaymentsLoading = (s: StoreState) => s.paymentsLoading;
export const selectPaymentsError = (s: StoreState) => s.paymentsError;

export const selectIsLoading = (s: StoreState) => s.isLoading;
export const selectModal = (s: StoreState) => s.modal;
export const selectToast = (s: StoreState) => s.toast;
