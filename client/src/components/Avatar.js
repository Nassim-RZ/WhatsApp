import React from "react";
import avatar from "assets/avatar.png";

const Avatar = props => {
   let src = props.src ? `uploads/${props.src}` : avatar;
   return <img src={avatar} className="img-fluid rounded-circle me-2 avatar" alt="" />
};

export default Avatar;