import React from 'React';
import ReactDOM from 'react-dom';

const Link = ({
  active,
  children,
  onClick
}) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <a href='#'
       onClick={e => {
         e.preventDefault();
         onClick();
       }}
    >
      {children}
    </a>
  );
};

export default Link;