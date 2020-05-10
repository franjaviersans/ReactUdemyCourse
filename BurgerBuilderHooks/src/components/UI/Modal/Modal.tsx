import React from "react";

import classes from "./Modal.css";
import Aux from "../../../hoc/AuxHOC/AuxHOC";
import Backdrop from "../Backdrop/Backdrop";

type modalProps = {
	show: boolean,
	modalClosed: () => void;
	children: React.ReactNode;
};

const modal: React.FunctionComponent<modalProps> = props => {
	return (<Aux>
		<Backdrop show={props.show} clicked={props.modalClosed}/>
		<div
			className={classes.Modal}
			style={{
				transform: props.show ? "translateY(0)" : "translateY(-150vh)",
				opacity: props.show ? "1" : "0",
			}}
		>
			{props.children}
		</div>
	</Aux>);
};

export default React.memo(modal, (prevProps : modalProps, nextProps : modalProps) => 
	nextProps.show === prevProps.show && nextProps.children === prevProps.children
);
