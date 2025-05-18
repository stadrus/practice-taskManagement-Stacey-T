import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import TaskDetails from './component/TaskDetail';


  // <button onClick={() => setTasks((tasks) => tasks)}>
  //   To-Dos {tasks}
  // </button>

function App() {
  

  return (
      <div>
        <header />
        <h1>Task List</h1>
        <BrowserRouter>
            <Routes>
              <>
                <Route path= "/tasks/:id" element = {<TaskDetails />} 
              />
              </>
            </Routes>
        </BrowserRouter>

      </div>
      
  );
}

export default App
