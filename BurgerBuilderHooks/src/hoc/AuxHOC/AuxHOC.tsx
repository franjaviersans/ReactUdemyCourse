import React, { Fragment } from "react";

const aux: React.FunctionComponent = (props)  => { 
    return <Fragment>{props.children}</Fragment>;
};

export default aux;