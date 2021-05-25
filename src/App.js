import React, { useState, useEffect, useRef } from "react";
import Blog from "./components/Blog";
import CreateBlogForm from "./components/CreateBlogForm";
import Togglable from "./components/Togglable";
import blogService from "./services/blogs";
import loginService from "./services/login";

const UserDetails = ({ user, onLogout }) => {
  return (
    <div>
      <h3>{`${user.name} logged in`}</h3>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [formFields, setFormFields] = useState({});

  const blogFormTogglableRef = useRef();

  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs));
  }, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedBlogappUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      blogService.setToken(user.token);
    }
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = await loginService.login({ username, password });
      console.log("user: ", user);
      setUser(user);
      blogService.setToken(user.token);
      window.localStorage.setItem("loggedBlogappUser", JSON.stringify(user));
      setUsername("");
      setPassword("");
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const loginForm = () => {
    return (
      <form onSubmit={handleLogin}>
        <h2>Log in to application</h2>
        <div>
          Username
          <input
            type="text"
            value={username}
            name="User Name"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          Password
          <input
            type="password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type="submit">login</button>
      </form>
    );
  };

  const blogList = () => {
    return (
      <div>
        <h2>blogs</h2>
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>
    );
  };

  const clearLocalStorageAndUser = () => {
    blogService.setToken(null);
    window.localStorage.removeItem("loggedBlogappUser");
    setUser(null);
  };

  const onFieldChange = (fieldName, fieldValue) => {
    const updatedFields = { ...formFields, [fieldName]: fieldValue };
    setFormFields(updatedFields);
  };

  const onCreateclick = async (event) => {
    event.preventDefault();
    try {
      const params = { ...formFields, userId: user.userId, likes: 0 };
      const data = await blogService.create(params);
      console.log(data);
      blogFormTogglableRef.current.toggleValue();
      blogService.getAll().then((blogs) => setBlogs(blogs));
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <UserDetails user={user} onLogout={clearLocalStorageAndUser} />

          <Togglable showFormBtnText={"New Note"} ref={blogFormTogglableRef}>
            <CreateBlogForm
              fields={formFields}
              onFieldChange={onFieldChange}
              onCreate={onCreateclick}
            />
          </Togglable>
          {blogList()}
        </div>
      ) : (
        <div>{loginForm()}</div>
      )}
    </div>
  );
};

export default App;
