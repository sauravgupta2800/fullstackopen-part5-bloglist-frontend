const CreateBlogForm = ({ fields, onFieldChange, onCreate }) => {
  return (
    <form onSubmit={onCreate}>
      <div>
        title
        <input
          type="text"
          value={fields.title || ""}
          name="title"
          onChange={({ target }) => onFieldChange("title", target.value)}
        />
      </div>
      <div>
        Author
        <input
          type="text"
          value={fields.author || ""}
          name="Author"
          onChange={({ target }) => onFieldChange("author", target.value)}
        />
      </div>
      <div>
        Url
        <input
          type="text"
          value={fields.url || ""}
          name="Url"
          onChange={({ target }) => onFieldChange("url", target.value)}
        />
      </div>
      <button type="submit">Create</button>
    </form>
  );
};

export default CreateBlogForm;
