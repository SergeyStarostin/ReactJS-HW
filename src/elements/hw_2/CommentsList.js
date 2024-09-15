import React, { useState } from 'react';
import './CommentsList.css';

const CommentsList = () => {
  const [comments, setComments] = useState([
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" },
  ]);

  const btnDelete = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  return (
    <div>
      <h3>Список комментариев:</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            {comment.text}
            <button onClick={() => btnDelete(comment.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsList;
