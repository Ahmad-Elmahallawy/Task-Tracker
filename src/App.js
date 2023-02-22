import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import "./index.css";
function App() {
  /*
        state is immutable
        it is not something that you can directly change
        for example, you can say: tasks.push()
    */
   //remember that state gets passed down
   //actions get passed up
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 3:30 PM",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30 PM",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 2:30 PM",
      reminder: false,
    },
  ]);

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  return (
    <div className="container">
      <Header title="Task Tracker" />
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete = {deleteTask}/>) : ('No Tasks To Show')}
    </div>
  );
}

export default App;
