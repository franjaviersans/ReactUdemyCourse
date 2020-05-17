import React from "react";

import Modal from "../../components/UI/Modal/Modal";
import Aux from "../AuxHOC/AuxHOC";
import useHttpHandler from "../../hooks/httpsErrorHandler";
import { AxiosStatic, AxiosInstance } from "axios";

const withErrorHandler = <P extends object>(WrappedComponent: React.ComponentType<P>, axios: AxiosInstance) => {
  return (props: P) => {
    const [error, errorConfirmedHandler] = useHttpHandler(axios);

    return (
      <Aux>
        <Modal show={!!error} modalClosed={errorConfirmedHandler}>
          {!!error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </Aux>
    );
  };
};

export default withErrorHandler;
