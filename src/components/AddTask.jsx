import {
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import TaskForm from "./TaskForm";


export default function AddTask() {
  const [showTaskForm, setShowTaskForm] = useState(false);
  const toggleTaskForm = () => {
    setShowTaskForm(!showTaskForm);
  };
const handleHideTaskForm = () => {
  toggleTaskForm ();
}

  return (
    <div className="dark:text-white">
      <button className="p-6 flex">
        <span className="pr-2">
          <PlusCircleIcon className="h-6 w-6" onClick={toggleTaskForm} />
        </span>
        Add task
      </button>
      {showTaskForm && <TaskForm onClose={handleHideTaskForm} />}
    </div>
  );};
  

