const Task = (props) => {
  return (
    <div className="card">
      <p className="title">{props.title}</p>
      <p>Due: {props.deadline}</p>
      <p>{props.description}</p>
        <p><strong>{props.priority}</strong></p>
    </div>
  );
}

export default Task;