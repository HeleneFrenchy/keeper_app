import { addTask } from "../store/slices/taskSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function TaskForm(props) {
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const projects = useSelector((state) => state.projects);
  const currProject = projects.find((project) => project.displayed);
  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addTask({
        taskName,
        description,
        projectId: currProject.id,
      })
    );
    setTaskName("");
    setDescription("");
    props.onClose();
  };
  return (
    <div className=" dark:text-white absolute flex flex-col w-60 inset-y left-0 right-0 max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" for="taskName">
            Task Name
          </label>
          <input
            className="border rounded w-full py-2 px-3 text-gray-700"
            id="taskName"
            type="text"
            placeholder="Enter task name"
            onChange={handleTaskNameChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" for="taskDescription">
            Task Description
          </label>
          <textarea
            className="border rounded w-full py-2 px-3 text-gray-700"
            id="taskDescription"
            placeholder="Enter task description"
            onChange={handleDescriptionChange}
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
