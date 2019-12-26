import React from 'react';

// ref. https://semantic-ui.com/elements/loader.html
const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{props.message}</div> 
            {/* use || 'Loading..' for setting default */}
        </div>
    );
};

// or by this method
Spinner.defaultProps = {
    message: 'Loading...'
};

export default Spinner;