import React from "react";

const Alert = (props) => {
    const { alertTxt } = props;
    return (
        <div class="alert alert-warning" role="alert">
            {alertTxt}
        </div>
    );
};

export default Alert;
