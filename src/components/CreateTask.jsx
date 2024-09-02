import { useState } from "react";
import axios from "axios";
import config from "../../config";
import { useNavigate } from "react-router-dom";
const CreateTask = () => {
  // State for the task
  let [task, setTask] = useState({
    task: "",
    description: "",
    priority: "medium", // Set a default value for priority
    isDone: false,
  });

  let navigation = useNavigate();

  // Handle input changes
  let handleInput = (e) => {
    const { name, value, type, checked } = e.target;

    // Handle checkbox separately
    setTask((prevTask) => ({
      ...prevTask,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submission
  let handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const newTask = {
        task: task.task,
        description: task.description,
        priority: task.priority,
        isDone: task.isDone,
      };
      await axios.post(`${config.apiBaseUrl}/task/add`, newTask);
      alert("Task added successfully!");
      // window.location.hash = "#all-todos";
      // navigation("/#all-todos");
      setTask({
        task: "",
        description: "",
        priority: "medium", // Set a default value for priority
        isDone: false,
      });
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <form
      id="add-todo"
      onSubmit={handleFormSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4">Create New Task</h2>

      <div className="mb-4">
        <label className="block text-gray-700">Task</label>
        <input
          name="task"
          value={task.task}
          onChange={handleInput}
          type="text"
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <textarea
          name="description"
          value={task.description}
          onChange={handleInput}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Priority</label>
        <select
          name="priority"
          value={task.priority}
          onChange={handleInput}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Is Done?</label>
        <input
          name="isDone"
          checked={task.isDone} // Use checked instead of value for checkboxes
          onChange={handleInput}
          type="checkbox"
          className="mt-1"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Add Task
      </button>
    </form>
  );
};

export default CreateTask;
