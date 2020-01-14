import React from 'react';

const Task = ({ task, ...props }) => {
    const ActionBtn = () => (
        <div className='action-btn'>
            {!task.done ? ( 
            <p onClick={props.doneTask}>yes</p> 
            ) : (
            <p onClick={props.deleteTask}>Delete</p>
            )}
        </div>
    );

    const className = 'task ' + (task.done ? 'task-done' : '');
    

    return(
        <div className={className}>
            <p>{task.title}</p>
            <ActionBtn></ActionBtn>
        </div>
    );
};

export default Task;