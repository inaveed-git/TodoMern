import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../../config";
import TaskCard from "./TaskCard";

const AllTask = () => {
  // State for handling the task data
  const [data, setData] = useState([]);
  const [editingTask, setEditingTask] = useState(null); // Track the task being edited

  // Fetch tasks from the server
  const getData = async () => {
    try {
      let response = await axios.get(`${config.apiBaseUrl}/tasks`);
      setData(response.data.tasks);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch tasks on component mount
  useEffect(() => {
    getData();
  }, [data]);

  // Handle toggling the task's completion status
  const toggleTaskStatus = async (taskId, currentStatus) => {
    try {
      setData((prevData) =>
        prevData.map((task) =>
          task._id === taskId ? { ...task, isDone: !currentStatus } : task
        )
      );
      await axios.put(`${config.apiBaseUrl}/task/${taskId}`, {
        isDone: !currentStatus,
      });
    } catch (error) {
      console.error("Error updating task status:", error);
    }
  };

  // Handle task deletion
  const handleDelete = async (taskId) => {
    try {
      await axios.delete(`${config.apiBaseUrl}/task/${taskId}`);
      await getData();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div id="all-todos" className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.length > 0 ? (
          data.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              editingTask={editingTask}
              setEditingTask={setEditingTask}
              toggleTaskStatus={toggleTaskStatus}
              handleDelete={handleDelete}
            />
          ))
        ) : (
          <p>No tasks available.</p>
        )}
      </div>
    </div>
  );
};

export default AllTask;
