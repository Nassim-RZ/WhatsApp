import React from "react";
import { Navigation } from "react-router-dom";
import withNavigation from 'hocs/withNavigation';
import Auth from "Auth";
import Avatar from "components/Avatar";
import { Row, Col, DropdownItem, DropdownMenu, DropdownToggle, Nav, UncontrolledDropdown} from "reactstrap";
import moment from 'moment';


const ChatHeader = props => {

	const logout = () => {
		Auth.logout();
		props.navigate('/login'); 
	  };

    const status = () => {
       if(props.typing) return 'Typing now...';
       if(props.contact.status === true) return 'Online';
       if(props.contact.status) return moment(props.contact.status).fromNow();
   };
    return (
        <Row className="heading m-0">
	<Col xs={11}>
		<div onClick={props.toggle}>
			<Avatar src={props.contact.avatar} />
		</div>
		<div className="text-right">
			<div>{props.contact ? props.contact.name : ''}</div>
			<small>{status()}</small>
		</div>
	</Col>
	<Col xs={1}>
		<Nav className="mr-auto" navbar>
			<UncontrolledDropdown>
				<DropdownToggle tag="a" className="nav-link">
					<i className="fa fa-ellipsis-v" />
				</DropdownToggle>
				<DropdownMenu>
					<DropdownItem onClick={e => props.navigate('/password')}>Change password</DropdownItem>
					<DropdownItem divider />
					<DropdownItem onClick={logout}>Logout</DropdownItem>
				</DropdownMenu>
			</UncontrolledDropdown>
		</Nav>
	</Col>
</Row>
    );
};

export default withNavigation(ChatHeader);
