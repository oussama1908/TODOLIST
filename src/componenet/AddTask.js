import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addtask } from '../redux/slices/taskSlice'; 

const AddTask = () => {
    // const [title,settitle]=useState() 
    // const [title,setdesc]=useState() 
    /// const hundlechange=()=>{
    // 
    //}
    const dispatch = useDispatch();
  const titleRef = useRef();
  const descriptionRef = useRef();

  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
  });

  const handleAddTask = () => {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;

    dispatch(addtask({ title, description }));

    titleRef.current.value = '';
    descriptionRef.current.value = '';

    setTaskData({
      title: '',
      description: '',
    });
  };

  return (
    <div>
      <h1>Add Task</h1>
      <input
      // onchange={(e)=>settitle(e.target.value)}
        type="text"
        placeholder="Title"
        ref={titleRef}
        value={taskData.title}
        onChange={(e) => setTaskData({ ...taskData, title: e.target.value })}
      />
      <textarea
        placeholder="Description"
        ref={descriptionRef}
        value={taskData.description}
        onChange={(e) => setTaskData({ ...taskData, description: e.target.value })}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
