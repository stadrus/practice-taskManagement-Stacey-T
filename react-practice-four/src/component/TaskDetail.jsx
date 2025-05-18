import TaskList from './TaskList';
import { useState } from 'react';

function TaskDetails ()  {

  const [tasks, setTasks] = useState('')


    return (
        <div> Tasks ID: {id}
       <TaskList></TaskList>
        <button onClick={() => setTasks((tasks) => tasks)}>
            To-Dos {tasks}
            </button>
        </div>
        </div>
    );
};
export default TaskDetails; 

//Step 4: Create the TaskDetail Component 
//Retrieve the task ID from the URL and display the corresponding task details.  
