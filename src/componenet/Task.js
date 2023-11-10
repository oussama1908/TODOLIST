import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gettask, deletetask, updateTask } from '../redux/slices/taskSlice';

export const Task = () => {
    const dispatch = useDispatch();
    const [updatedData, setUpdatedData] = useState({
        taskId: '',
        title: '',
        description: '',
    });
    const [editingTaskId, setEditingTaskId] = useState(''); // Track the taskId being edited

    useEffect(() => {
        dispatch(gettask());
    }, [dispatch]);

    const { isLoading, userdata, error } = useSelector((state) => state.task);

    const handleDeleteTask = (taskId) => {
        console.log("Deleting task with taskId:", taskId);
        dispatch(deletetask(taskId));
    };

    const handleUpdateTask = () => {
        // Get the token from local storage
        const token = localStorage.getItem("token");
        console.log("Token:", token);
    
        // Dispatch an action to update the task with taskId and updatedData
        dispatch(updateTask({ taskId: updatedData.taskId, title: updatedData.title, description: updatedData.description ,token:token}))
            .then((result) => {
                console.log("Update Task Result:", result);
            })
            .catch((error) => {
                console.error("Update Task Error:", error);
            });
    
        // Clear the updatedData state
        setUpdatedData({
            taskId: '',
            title: '',
            description: '',
        });
        setEditingTaskId(''); // Exit edit mode after saving
    };
    

    const handleEdit = (taskId) => {
        setEditingTaskId(taskId); // Enter edit mode for a specific task
        // Initialize updatedData with the current task's data
        const taskToEdit = userdata.find((task) => task._id === taskId);
        if (taskToEdit) {
            setUpdatedData({
                taskId: taskToEdit._id,
                title: taskToEdit.title,
                description: taskToEdit.description,
            });
        }
    };

    const handleCancelEdit = () => {
        setEditingTaskId(''); // Cancel edit mode for the current task
        setUpdatedData({ taskId: '', title: '', description: '' });
    };

    return (
        <div>
            {userdata.map((el) => (
                <div key={el._id}>
                    <h1>{el.title}</h1>
                    <button onClick={() => handleDeleteTask(el._id)}>Delete</button>
                    {editingTaskId === el._id ? (
                        // When in edit mode, display the edit form for the specific task
                        <div>
                            <input
                                type="text"
                                placeholder="Title"
                                value={updatedData.title}
                                onChange={(e) => setUpdatedData({ ...updatedData, title: e.target.value })}
                            />
                            <textarea
                                placeholder="Description"
                                value={updatedData.description}
                                onChange={(e) => setUpdatedData({ ...updatedData, description: e.target.value })}
                            />
                            <button onClick={handleUpdateTask}>Save</button>
                            <button onClick={handleCancelEdit}>Cancel</button>
                        </div>
                    ) : (
                        <button onClick={() => handleEdit(el._id)}>Edit</button>
                    )}
                </div>
            ))}
        </div>
    );
};
