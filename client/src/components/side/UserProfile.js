import React from "react";
import Avatar from 'components/Avatar';
import { Row } from "reactstrap";

const UserProfile = props => (

    <div className={props.open ? 'side-profile open' : 'side-profile'}>

        <Row className="heading">
        <div className="nav-link" onClick={props.toggle}>
            <i className="fa fa-arrow-left me-2" />
            <span>{props.contact.name}</span>
        </div>
        </Row>

        <div className="d-flex flex-column overflow-auto">
            <Avatar src={props.contact.avatar}/>
            <div className="bg-white px-3 py-2">
                <label className="text-muted">About</label>
                <p>{props.contact.about ? props.contact.about : 'Welcome !'}</p>
            </div>
        </div>

    </div>

);

export default UserProfile;