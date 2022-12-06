//? CREATE CONTEXT  usando context en React
import { createContext, useState, useEffect } from "react";
import { tasks } from "../data/task";

export const TaskContext = createContext();

export function TaskChildren(props) {
   return (
      <>
         <h1 className="text-violet-900 font-bold">Uso de la prop children</h1>
         {props.children}
         {/* props.children hace referencia a todos los elementos hijos del componente, esta prop ya esta por defecto, funcionan sin el context, NO se le da un valor en los atributos al llamar al componente como otras props definidas por nosostros mismos. EJM: en TaskList*/}
      </>
   );
}
export function TaskContextProvider(props) {
   const [Tasks, setTasks] = useState(tasks);

   const createTask = (task) => {
      setTasks([...Tasks, task]);
   };
   const deleteTask = (idTask) => {
      setTasks(Tasks.filter((task) => task.id !== idTask));
   };

   /* todo lo que queremos heredar a los hijos del contexto va en el "value" del Provider . Si hay varias cosas para heredar ponerlas en value en formato de un objeto*/
   return (
      <TaskContext.Provider
         value={{
            Tasks,
            deleteTask,
            createTask,
         }}
      >
         {/* El provider inicializa/crea el contexto, aqui ya hay context */}
         {props.children}
      </TaskContext.Provider>
   );
   //* Usaremos el contexto en tasklist y taskfrom
}
