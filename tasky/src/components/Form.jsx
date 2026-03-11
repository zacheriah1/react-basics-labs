const AddTaskForm = (props) => {
    return (
      <div>
        <form onSubmit={props.submit}>
          <label>
            Task title:
            <input
              type="text"
              name="title"
              required
              value={props.formData.title}
              onChange={(event) => props.change(event)}
            />
          </label>
  
          <br />
  
          <label>
            Due date:
            <input
              type="date"
              name="deadline"
              required
              value={props.formData.deadline}
              onChange={(event) => props.change(event)}
            />
          </label>
  
          <br />
  
          <label>
            Details:
            <input
              type="text"
              name="description"
              value={props.formData.description}
              onChange={(event) => props.change(event)}
            />
          </label>
  
          <br />
  
          <label>
            Priority:
            <select
              name="priority"
              value={props.formData.priority}
              onChange={(event) => props.change(event)}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </label>
  
          <br />
  
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  };
  
  export default AddTaskForm;