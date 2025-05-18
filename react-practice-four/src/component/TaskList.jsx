import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


function TaskList () {
    const tasks = [
        {id:1, title: "Complete Module", description: "React Router"},
        {id:2, title: "Submit Module", description: "Complete all assignments"},
        {id:3, title: "Finish Course", description: "Complete Unit 1"}
    ];

    const { id } = useParams ();

    const taskList = tasks.map((tasks) => <li>{tasks.id}, {tasks.title}, {tasks.description} </li>);

   
    
    return (
        <div>
                <h2> Daily To-dos</h2>
                <Link to= {`/Complete Module/${tasks.id}`}> {id} </Link>
                <button type='button' onClick={() => useParams((id) => id)}>Go to Tasks</button>
                <ul>{taskList}</ul>
            </div>   
        );
        
}


export default TaskList; 