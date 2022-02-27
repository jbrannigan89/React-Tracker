import React from "react";
import { useState } from "react";

const AddTask = (props) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);
  console.log(text, day, reminder);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("please add task");
      return;
    }

    props.add({ text, day, reminder });
    setText("");
    setDay("");
    setReminder(false);props.showAdd()
  };
  return (
    <div class="addcontainer">
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>Task</label>
          <input
            type="text"
            placeholder="Add Task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Day & Time</label>
          <input
            type="text"
            value={day}
            placeholder="Add Day & Time"
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <div className="form-control reminder">
          <label>Set Reminder</label>
          <input
            type="checkbox"
            checked={reminder}
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
        </div>
        <input className="submit-btn" type="submit" value="Save" />
      </form>
    </div>
  );
};

export default AddTask;
