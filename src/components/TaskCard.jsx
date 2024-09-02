import React from "react";
import EditTaskForm from "./EditTaskForm";

const TaskCard = ({
  task,
  editingTask,
  setEditingTask,
  toggleTaskStatus,
  handleDelete,
}) => {
  // Handle edit button click
  const handleEditClick = () => {
    setEditingTask(task._id);
  };

  return (
    <div
      className={`bg-white shadow-md rounded-md p-4 ${
        task.isDone ? "bg-green-50" : ""
      }`}
    >
      {editingTask === task._id ? (
        <EditTaskForm task={task} setEditingTask={setEditingTask} />
      ) : (
        <div>
          <h3 className="text-xl font-bold mb-2">{task.task}</h3>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Description:</span>{" "}
            {task.description}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Priority:</span> {task.priority}
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-semibold">Status:</span>{" "}
            {task.isDone ? "Completed" : "Not Completed"}
          </p>

          <div className="mb-4 flex items-center">
            <label className="block text-gray-700 mr-2">Mark as Done:</label>
            <input
              type="checkbox"
              checked={task.isDone}
              onChange={() => toggleTaskStatus(task._id, task.isDone)}
              className="form-checkbox"
            />
          </div>

          <div className="flex space-x-4">
            <button
              onClick={handleEditClick}
              className="bg-yellow-400 text-white px-4 py-2 rounded-md hover:bg-yellow-500"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(task._id)}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskCard;
