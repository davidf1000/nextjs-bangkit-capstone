export interface LoginApiResponse {
  status: number;
  data: {
    error: boolean;
    msg?: string;
    partnerId: string;
    token: string;
  };
}

export interface RegisterApiResponse {
  status: number;
  data: {
    error: Boolean;
    msg?: String;
    status?: String;
  };
}

export interface LoginFormData {
  username: string;
  password: string;
}

export interface RegisterFormData {
  email: string;
  companyName: string;
  userName: string;
  password: string;
}
