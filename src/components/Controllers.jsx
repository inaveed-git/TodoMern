import axios from "axios";
import React from "react";
import config from "../../config";

const Controllers = ({ taskId, onEdit }) => {
  const handleDelete = async (taskId) => {
    try {
      await axios.delete(${config.apiBaseUrl}/task/${taskId});
      await getData(); // Refresh the task list after deletion
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="flex space-x-4">
      <button
        onClick={() => onEdit(taskId)}
        className="bg-yellow-400 text-white px-4 py-2 rounded-md hover:bg-yellow-500"
      >
        Edit
      </button>
      <button
        onClick={() => handleDelete(taskId)}
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
};

export default Controllers;