export interface AuthCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: { id: string; email: string; name: string };
}

export interface Merchant {
  address: string;
  name: string;
  description: string;
  contactInfo: string;
  category: string;
  active: boolean;
}

export interface Payment {
  orderId: string;
  merchantAddress: string;
  payer: string;
  token: string;
  amount: number;
  status: string;
  paidAt: number;
}

export interface CreatePaymentPayload {
  orderId: string;
  merchantAddress: string;
  token: string;
  amount: number;
  description: string;
  expiresAt: number;
}
