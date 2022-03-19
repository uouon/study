import React, { Component } from "react";

const MyName = ({ name }) => {
    return (
        <div>{name}</div>
    );
}

MyName.defaultProps = {
    name : '이름'
}
export default MyName;