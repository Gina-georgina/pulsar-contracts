import { StateCreator } from 'zustand';

export interface Payment {
  orderId: string;
  merchantAddress: string;
  payer: string;
  amount: number;
  token: string;
  status: 'completed' | 'partially_refunded' | 'fully_refunded';
  paidAt: number;
}

export interface PaymentsSlice {
  payments: Payment[];
  paymentsLoading: boolean;
  paymentsError: string | null;
  setPayments: (payments: Payment[]) => void;
  setPaymentsLoading: (loading: boolean) => void;
  setPaymentsError: (error: string | null) => void;
}

export const createPaymentsSlice: StateCreator<PaymentsSlice> = (set) => ({
  payments: [],
  paymentsLoading: false,
  paymentsError: null,
  setPayments: (payments) => set({ payments }),
  setPaymentsLoading: (paymentsLoading) => set({ paymentsLoading }),
  setPaymentsError: (paymentsError) => set({ paymentsError }),
});
