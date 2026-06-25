import { StateCreator } from 'zustand';

export interface Merchant {
  id: string;
  name: string;
  address: string;
  category: string;
  active: boolean;
}

export interface MerchantsSlice {
  merchants: Merchant[];
  merchantsLoading: boolean;
  merchantsError: string | null;
  setMerchants: (merchants: Merchant[]) => void;
  setMerchantsLoading: (loading: boolean) => void;
  setMerchantsError: (error: string | null) => void;
}

export const createMerchantsSlice: StateCreator<MerchantsSlice> = (set) => ({
  merchants: [],
  merchantsLoading: false,
  merchantsError: null,
  setMerchants: (merchants) => set({ merchants }),
  setMerchantsLoading: (merchantsLoading) => set({ merchantsLoading }),
  setMerchantsError: (merchantsError) => set({ merchantsError }),
});
