export interface LoginData {
  error: boolean;
  msg: string;
  loginResult?: {
    token: string;
    userId: string;
  };
}

export interface LoginResponse {
  status: number;
  statusText: string;
  data: LoginData;
}

export interface RegisterResponseData {
  error: boolean;
  msg?: string;
  status?: string;
}
export interface RegisterResponse {
  status: number;
  statusText: string;
  data: RegisterResponseData;
}

export interface PartnerResponse {
    status: number;
    data: {
      error: boolean;
      partner: {
        partnerId: string;
        partnerName: string;
        email: string;
        username: string;
        password: string;
        Vouchers?: any;
      };
    };
  }