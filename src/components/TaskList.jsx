import { useDispatch, useSelector } from "react-redux";
import {
  TrashIcon,
  ArrowPathIcon,
  CheckIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/outline";
import { addTask, deleteTask, completeTask } from "../store/slices/taskSlice";
import { useState } from "react";
import PlayButton from "./PlayButton";
import TaskTimer from "./TaskTimer";

export default function TaskList() {
  const [filter, setFilter] = useState("all");
  const projects = useSelector((state) => state.projects);
  const currProject = projects.find((project) => project.displayed);
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  const filteredTasks = tasks.filter((task) => {
    if (task.projectId !== currProject.id) return false;
    if (filter === "all") return true;
    else if (filter === "active" && !task.completed) return true;
    else if (filter === "completed" && task.completed) return true;
  });

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleComplete = (taskId) => {
    dispatch(completeTask(taskId));
  };

  const handleFilterChange = (nextFilter) => {
    setFilter(nextFilter);
  };

  return (
    <>
      <div className="dark:text-white text-right px-2">
        <h3 className="px-2">{currProject.name}</h3>
        <button
          className="px-2 text-sm hover:bg-blue-50 rounded "
          onClick={() => handleFilterChange("all")}
        >
          All
        </button>
        <button
          className="px-2 text-sm hover:bg-blue-50 rounded"
          onClick={() => handleFilterChange("active")}
        >
          Active
        </button>
        <button
          className="px-2 text-sm hover:bg-blue-50 rounded"
          onClick={() => handleFilterChange("completed")}
        >
          Completed
        </button>
      </div>
      <div className="dark:text-white flex flex-col">
        {filteredTasks.map((task) => {
          return (
            <div
              key={task.id}
              className={`border-2 rounded m-2 p-3 ${
                task.completed ? "border-green-500" : "border-orange-500"
              }`}
            >
              <h2 className="text-center pb-4"> {task.name}</h2>{" "}
              <div>{!task.completed && <TaskTimer />}</div>
              <p className="text-slate-400 text-sm py-2">{task.description}</p>
              <div className="flex justify-between">
                <button onClick={() => handleDeleteTask(task.id)}>
                  <TrashIcon className="h-4 w-4" />
                </button>
                <div>
                  {!task.completed && (
                    <button
                      onClick={() => handleComplete(task.id)}
                      className="px-2"
                    >
                      <CheckIcon className="h-4 w-4" />
                    </button>
                  )}

                  <button>
                    <ArrowPathIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div>{!task.completed && <PlayButton />}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
