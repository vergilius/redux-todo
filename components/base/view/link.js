import React from 'React';
import ReactDOM from 'react-dom';

const Link = ({
  active,
  children,
  onClick
}) => {
  if (active) {
    return (
      <span className="mint-link mint-link--gray mint-link--disabled">
        {children}
      </span>
    );
  }

  return (
    <a href='#'
       className="mint-link"
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