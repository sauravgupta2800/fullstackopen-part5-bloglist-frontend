import React from "react";
import Togglable from "../components/Togglable";

const Blog = ({ blog: { id, title, author, url, likes, user }, onLikeClick, onDeleteClick }) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5,
  };

  const onDeleteBtnClick = () => {
    if(window.confirm(`Do you really want to delete - ${title}`)){
    onDeleteClick(id, { userId: user.id })
    }
  }

  return (
    <div style={blogStyle}>
      {title} by {author}
      <Togglable
        showFormBtnText={"Show Details"}
        hideFormBtnText={"Hide Details"}
      >
        <div>
          <div>
            <span>Title - </span>
            <span>{title}</span>
          </div>
          <div>
            <span>Author - </span>
            <span>{author}</span>
          </div>
          <div>
            <span>Url - </span>
            <span>{url}</span>
          </div>
          <div>
            <span>Likes - </span>
            <span>{likes}</span>
            <button onClick={() => onLikeClick(id, { likes: likes + 1 })}>
              likes
            </button>
          </div>
          <div>
            <span>Do you want to delete? </span>
            <button onClick={() => onDeleteBtnClick()}>
              Delete
            </button>
          </div>
        </div>
      </Togglable>
    </div>
  );
};

export default Blog;
