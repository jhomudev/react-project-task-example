import {TaskChildren} from "../context/TaskContext";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
function TaskList() {
   const {Tasks,deleteTask} =useContext(TaskContext); /* Aqui obtenemos los valores que solo nesecitamos del contexto y ya se puede usar */

   if (Tasks.length === 0) {
      return <h1 className="text-white font-bold bg-red-900 border-red-700 border py-2 px-5 rounded-sm" role="alert">No hay tareas</h1>;
   }

   return (
      <TaskChildren>
         {/* Usando el props.children, todos estos hijos son la prop children*/}
         <table className="bg-slate-900 text-slate-300 w-full">
            <thead className="table-header-group bg-slate-700">
               <tr>
                  <th className="py-4">Id</th>
                  <th className="py-4">Title</th>
                  <th className="py-4">Description</th>
                  <th className="py-4">Options</th>
               </tr>
            </thead>
            <tbody>
               {Tasks.map((task) => {
                  return (
                     <tr key={task.id} >
                        <td>{task.id}</td>
                        <td>{task.title}</td>
                        <td>{task.description}</td>
                        <td>
                           <button onClick={() => deleteTask(task.id)} className="bg-red-800 border-x-0 m-2 rounded-md px-2">
                              Delete
                           </button>
                           {/* En este onclick si pongo la funcion deleteTask defrente se ejecutaria al cargar la pagina,pero si ejecuto la funcion dentro de otra funcion definida en el onclick si funciona por cada onclick */}
                        </td>
                     </tr>
                  );
               })}
            </tbody>
         </table>
      </TaskChildren>
   );
}
export default TaskList;
