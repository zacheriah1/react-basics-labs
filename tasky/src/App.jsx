import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddTaskForm from './components/Form';
import Task from './components/Task';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Dishes',
      description: 'Empty dishwasher',
      deadline: 'Today',
      priority: 'Medium',
      done: false,
    },
    {
      id: 2,
      title: 'Laundry',
      description: 'Fold clothes and put away',
      deadline: 'Tomorrow',
      priority: 'Low',
      done: false,
    },
    {
      id: 3,
      title: 'Tidy up',
      description: '',
      deadline: 'Today',
      priority: 'High',
      done: false,
    },
  ]);

  const [formState, setFormState] = useState({
    title: '',
    description: '',
    deadline: '',
    priority: 'Medium',
  });

  const doneHandler = (taskIndex) => {
    const updatedTasks = [...tasks];
    updatedTasks[taskIndex].done = !updatedTasks[taskIndex].done;
    setTasks(updatedTasks);
  };

  const deleteHandler = (taskIndex) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(taskIndex, 1);
    setTasks(updatedTasks);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const newTask = {
      id: uuidv4(),
      title: formState.title,
      description: formState.description,
      deadline: formState.deadline,
      priority: formState.priority,
      done: false,
    };

    setTasks([...tasks, newTask]);

    setFormState({
      title: '',
      description: '',
      deadline: '',
      priority: 'Medium',
    });
  };

  const formChangeHandler = (event) => {
    const { name, value } = event.target;

    setFormState((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <h1>Tasky</h1>

      {tasks.map((task, index) => (
        <Task
        key={task.id}
        title={task.title}
        description={task.description}
        deadline={task.deadline}
        priority={task.priority}
        done={task.done}
        markDone={() => doneHandler(index)}
        deleteTask={() => deleteHandler(index)}
      />
      ))}

      <AddTaskForm
        change={formChangeHandler}
        submit={formSubmitHandler}
        formData={formState}
      />
    </div>
  );
}

export default App;