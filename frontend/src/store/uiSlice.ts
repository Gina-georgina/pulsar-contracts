import { StateCreator } from 'zustand';

export interface Toast {
  message: string;
  type: 'success' | 'error' | 'info';
}

export interface UiSlice {
  isLoading: boolean;
  modal: string | null;
  toast: Toast | null;
  setLoading: (isLoading: boolean) => void;
  openModal: (modal: string) => void;
  closeModal: () => void;
  showToast: (toast: Toast) => void;
  clearToast: () => void;
}

export const createUiSlice: StateCreator<UiSlice> = (set) => ({
  isLoading: false,
  modal: null,
  toast: null,
  setLoading: (isLoading) => set({ isLoading }),
  openModal: (modal) => set({ modal }),
  closeModal: () => set({ modal: null }),
  showToast: (toast) => set({ toast }),
  clearToast: () => set({ toast: null }),
});
