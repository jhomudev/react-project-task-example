import { useState, useContext  } from "react";
import { TaskContext } from "../context/TaskContext";

export function TaskForm() {
   const {Tasks,createTask}=useContext(TaskContext); /* Aqui obtenemos los valores que solo nesecitamos del contexto y ya se puede usar */

   const [Title, setTitle] = useState("");
   const [Description, setDescription] = useState("");
   const onsubmit = (e) => {
      e.preventDefault();
      const newTask = {
         id: Tasks.length + 1,
         title: Title,
         description: Description,
      };
      createTask(newTask);
      setDescription("");
      setTitle("");
   };
   return (
      <div className="max-w-md bg-slate-900 p-7 mx-auto">
         <form onSubmit={onsubmit} className="flex flex-col gap-0">
            <input
               type="text"
               onChange={(e) => setTitle(e.target.value)}
               placeholder="Escribe el titulo de tu tarea"
               value={Title}
               className="bg-slate-300 placeholder-slate-500 rounded-sm px-3 py-2 outline-none"
            />
            <br />
            <textarea
               onChange={(e) => setDescription(e.target.value)}
               placeholder="Escribe la descripcion de tu tarea"
               value={Description}
               className="bg-slate-300 placeholder-slate-500 rounded-sm resize-none px-3 py-2 outline-none"
            ></textarea><br />
            <button type="submit" className="bg-green-500 text-gray-50 font-bold px-5 py-2 rounded-md">Guardar</button>
         </form>
      </div>
   );
}
