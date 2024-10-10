export interface ISignInPayload {
  email: string;
  password: string;
}

export interface ILoginAPI {
  payload: ISignInPayload;
}
