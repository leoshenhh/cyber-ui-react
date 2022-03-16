import React from 'react';

const Button: React.FunctionComponent = (props) => {
  return (
    <div>
      {props.children}
    </div>
  );
};

export default Button;
