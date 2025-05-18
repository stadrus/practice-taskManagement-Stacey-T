

function TaskDetails () {
    const taskData = taskList.map((taskList, index) => <li key = {index}>{taskList}</li>);
    const element = <ul>{taskData}</ul>; 
    return (
        <div>
            <h2>Task List</h2>
        
            <p>{element}</p>
        </div>
    )
}
export default TaskDetails; 