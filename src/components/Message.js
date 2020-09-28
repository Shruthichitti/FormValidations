import React from 'react';

const Message = (props) => {
    return (
        <div>
            {props.isEmailValid && props.isNameValid && props.isPhoneValid && props.isUrlValid ? 
            <h3 className="text-center message">Form Complete!</h3> : <h3 className="text-center message">Form is Incomplete!</h3>}
        </div>
    )
}

export default Message;
