import React, { useState } from "react";
import axios from "axios";
import config from "../../config";

const EditTaskForm = ({ task, setEditingTask }) => {
  // Edit form state
  const [editForm, setEditForm] = useState({
    task: task.task,
    description: task.description,
    priority: task.priority,
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  // Handle form submission to update the task
  const handleUpdate = async () => {
    try {
      await axios.put(`${config.apiBaseUrl}/task/${task._id}`, editForm);
      setEditingTask(null); // Exit edit mode
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        name="task"
        value={editForm.task}
        onChange={handleInputChange}
        className="mb-2 p-2 w-full border"
      />
      <textarea
        name="description"
        value={editForm.description}
        onChange={handleInputChange}
        className="mb-2 p-2 w-full border"
      />
      <input
        type="text"
        name="priority"
        value={editForm.priority}
        onChange={handleInputChange}
        className="mb-2 p-2 w-full border"
      />
      <button
        onClick={handleUpdate}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Save
      </button>
      <button
        onClick={() => setEditingTask(null)}
        className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 ml-2"
      >
        Cancel
      </button>
    </div>
  );
};

export default EditTaskForm;
