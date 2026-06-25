import { create } from 'zustand';
import { createAuthSlice, AuthSlice } from './authSlice';
import { createMerchantsSlice, MerchantsSlice } from './merchantsSlice';
import { createPaymentsSlice, PaymentsSlice } from './paymentsSlice';
import { createUiSlice, UiSlice } from './uiSlice';

export type StoreState = AuthSlice & MerchantsSlice & PaymentsSlice & UiSlice;

export const useStore = create<StoreState>()((...a) => ({
  ...createAuthSlice(...a),
  ...createMerchantsSlice(...a),
  ...createPaymentsSlice(...a),
  ...createUiSlice(...a),
}));
