import React from 'React';
import ReactDOM from 'react-dom';

const TodoItem = ({
  onClick,
  completed,
  text
}) => {
  return (
    <li
      style={{ textDecoration: completed ? 'line-through' : 'none' }}
    >
      <div className="mint-label mint-label--secondary mint-label--lite">
        <div className="mint-label__icon">
          <div className="mint-checkbox">
            <input className="mint-checkbox__element"
                   type="checkbox"
                   checked={ completed ? 'checked' : '' }
                   onChange={onClick}
            />
            <label className="mint-checkbox__ghost">
              <svg className="mint-icon mint-icon--adaptive mint-icon--x8">
                <use xlinkHref="#icon-check"></use>
              </svg>
            </label>
          </div>
        </div>
        <label className="mint-label__text">{text}</label>
      </div>
    </li>
  );
};

export default TodoItem;