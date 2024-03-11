import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useSelector, useDispatch } from "react-redux";
import {
  addProject,
  checkTime,
  setDisplayed,
} from "../store/slices/projectSlice";
import { useState } from "react";

export default function Sidebar() {
  const projects = useSelector((state) => state.projects);
  const dispatch = useDispatch();
  const [showProjectInput, setShowProjectInput] = useState(false);
  const [projectName, setProjectName] = useState("");
  const handleAddProject = () => {
    setShowProjectInput(true);
  };
  const handleInputChange = (event) => {
    setProjectName(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addProject(projectName));
    setProjectName("");
    setShowProjectInput(false);
  };
  const handleProjectClick = (projectId) => {
    dispatch(setDisplayed(projectId));
  };

  return (
    <div className="absolute flex flex-col inset-y-12 w-60 h-screen bg-white">
      {!showProjectInput && (
        <div>
          <button
            className="bg-purple-300 w-60 py-4 mb-2 flex"
            onClick={handleAddProject}
          >
            <span className="pr-2">
              <PlusCircleIcon className="h-6 w-6 ml-12" />
            </span>{" "}
            Add Project
          </button>
        </div>
      )}

      {showProjectInput && (
        <form className="py-3 px-2" onSubmit={handleSubmit}>
          <input
            className="border rounded w-full py-2 px-3 text-gray-700"
            type="text"
            placeholder="Project's name"
            value={projectName}
            onChange={handleInputChange}
          />
        </form>
      )}
      <h3 className="text-sm bg-purple-300 px-2 py-1">STATS</h3>
      <div className="text-sm px-2">
        <p className="text-slate-400 text-center py-2">Projects</p>
        {projects.map((project) => {
          return (
            <div>
              <button
                key={project.id}
                onClick={() => handleProjectClick(project.id)}
              >
                {project.name}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
