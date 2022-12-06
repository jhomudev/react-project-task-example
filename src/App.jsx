import TaskList from "./components/TaskList";
import { TaskForm } from "./components/TaskForm";

function App() {
   return (
      <main className="bg-zinc-900 p-5 h-screen">
         <TaskForm />
         <br />
         <TaskList />
      </main>
   );
}

export default App;
