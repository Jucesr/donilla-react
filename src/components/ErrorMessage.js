import React from 'react';

export const ErrorMessage = (props) => {
  return props.error_message ? (
    <div className="error-content">
      <div className="container">
        <div className="error_message">
          <p>{props.error_message}</p>
        </div>
      </div>
    </div>
  ) : <div></div>
}
