import React from 'react';

import '../../css/styles.css';

export default function List({ tasks, onClickDelete, onClickComplete }) {
  if (tasks.length === 0) {
    return <p className="no-list">Nothing To Do!</p>;
  }

  return (
    <div className="list-container">
      <ul className="list todo-main__list">
        {tasks.map(({ id, title, done }) => (
          <li key={id} className="list-todo todo-main__list-todo">
            <div className="list-checkset todo-main__list-checkset">
              <input
                id={id}
                className="list-check todo-main__list-check"
                type="checkbox"
                onClick={() => onClickComplete(id)}
                placeholder="complete"
              />


              {done
                ? (
                  <label htmlFor={id} className="list-name todo-main__list-name" style={{ textDecoration: 'line-through', color: 'gray' }}>
                    {title}
                  </label>
                )
                : (
                  <label htmlFor={id} className="list-name todo-main__list-name">
                    {title}
                  </label>
                )}

            </div>
            <div className="list-delete-container">
              <button
                className="list-delete todo-main__list-delete"
                type="button"
                onClick={() => onClickDelete(id)}
              >
                <span className="material-icons delete-icon">clear</span>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
