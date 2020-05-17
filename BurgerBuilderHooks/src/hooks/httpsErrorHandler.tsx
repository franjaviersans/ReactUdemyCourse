import { useState, useEffect } from "react";
import { AxiosStatic, AxiosInstance } from "axios";

import { IErrorMessage } from "../Types/Types";

export default (httpHandler: AxiosInstance): [IErrorMessage, () => void] => {
  const [error, setError] = useState<IErrorMessage>(null);

  const reqInterceptor = httpHandler.interceptors.request.use((req) => {
    setError(null);
    return req;
  });
  const resInterceptor = httpHandler.interceptors.response.use(
    (res) => res,
    (err) => {
      setError(err);
    }
  );

  useEffect(() => {
    return () => {
      httpHandler.interceptors.request.eject(reqInterceptor);
      httpHandler.interceptors.response.eject(resInterceptor);
    };
  }, [reqInterceptor, resInterceptor]);

  const errorConfirmedHandler = () => {
    setError(null);
  };

  return [error, errorConfirmedHandler];
};
