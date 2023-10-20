import React from "react";
import Avatar from "components/Avatar";
import { Row, Col } from "reactstrap";

const ContactHeader = props => (
    <Row className="heading" >
  		<Col xs={11} >
    		<Avatar />
    		<span>Friends</span>
  		</Col>
  		<Col xs={1}>
    		<div className="nav-link" onClick={props.toggle}>
      			<i className="fa fa-bars" />
    		</div>
  		</Col>
	</Row>
);
export default ContactHeader;