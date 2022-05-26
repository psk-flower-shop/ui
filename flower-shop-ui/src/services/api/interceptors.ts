import { randomApi } from "./api";

export const registerApiInterceptors = () => {
  [randomApi].forEach((api) => {
    api.interceptors.request.use(
      (request) => {
        return Promise.resolve(request);
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    api.interceptors.response.use(
      (response) => {
        return Promise.resolve(response);
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  });
};
