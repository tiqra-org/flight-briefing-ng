export interface ICommonResponse {
  id: string;
  error: IError;
};

export interface IError {
  code: string;
  data: string;
  message: string;
};
