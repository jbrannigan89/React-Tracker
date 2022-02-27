import Task from "./task";
import '../app.css'

const Tasks = (props) => {
  console.log(props);
  return (
    <>
      <div className="t-container">
        {props.tasks.map((task) => (
          <Task key={task.id} task={task} Del= {props.onDelete} />
        ))}
      </div>
    </>
  );
};

export default Tasks;
