import React from "react";
import Togglable from "../components/Togglable";

const Blog = ({ blog: { title, author, url, likes } }) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5,
  };

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
            <button>like</button>
          </div>
        </div>
      </Togglable>
    </div>
  );
};

export default Blog;
