import { useState } from "react";
import './ShowComments.css'
import CommentsForm from "./CommentsForm";

export default function ShowComments() {
  let [comments, setComments] = useState([
    {
      username: "Alice",
      remarks: "This is a great post!",
      rating: 5
    }
  ]);

  let addComment = (newComment) => {
    setComments([...comments, newComment]);
  }

  return (
    <div>
      <h2>Comments</h2>
        {comments.map((comment, index) => (
          <div className="comments-list" key={index}>
            <p>{comment.remarks} (Rating: {comment.rating})</p>
            <p> - @{comment.username}</p>
          </div>
        ))}
      <CommentsForm addComment={addComment} />
      {/* function is passed to the child component CommentsForm as a prop. When the form is submitted, the addComment function is called with the new comment data, which updates the comments state in the parent component ShowComments. */}
    </div>
  );
}