import React from 'react';

function Input(props) {
    const {error, ...p} = props;
    return (
        <div className="input-wrapper">
            <input {...p} />
            {error ? <span className="error">{error}</span> : null}
        </div>
    );
}

export default Input;
