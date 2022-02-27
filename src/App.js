import { useState } from "react";
import Header from "./components/header";
import Tasks from "./components/tasks";
import AddTask from "./components/AddTask";

const App = () => {
  let name = "Joe B";
  const [list, setList] = useState([]);
  //addForm
  const [showAddTask, setshowAddTask] = useState(false);

  //delete task
  const deleteTask = (id) => {
    setList(list.filter((task) => task.id !== id));
  };
  //add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    console.log(newTask);
    setList([...list, newTask]);
    console.log(list);
  };
  //showAdd
  const showAdd = () => {
    setshowAddTask(!showAddTask);
  };

  return (
    <div className="container">
      <Header showAdd={showAdd} />
      {showAddTask == true ? (
        <AddTask add={addTask} showAdd={showAdd} />
      ) : (
        !(<AddTask add={addTask} showAdd={showAdd} />)
      )}
      <Tasks tasks={list} practice="123" onDelete={deleteTask} />
    </div>
  );
};

export default App;
