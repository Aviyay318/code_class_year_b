import {useState} from "react";
import "./TodoList.css"


function ToDoList(){
    const [task,setTask]=useState("")
    const [tasks,setTasks]=useState([])
    const [index,setIndex]=useState(null)

    const addTask=()=>{
        if (index===null){
            setTasks([...tasks,task])
        }else{
            const tempTasks =[...tasks];
            tempTasks[index] = task
            setTasks(tempTasks)
            setIndex(null)
        }
        setTask("")
    }

    const editTask=(i)=>{
        setIndex(i)
        setTask(tasks[i])
    }

    const deleteTask=(iToDelete)=>{
        setTasks(tasks.filter((task,i)=>i!==iToDelete))
    }

    return(
        <div>
            <h1>To Do List</h1>
            <input value={task}
                   placeholder={"enter task"}
                   onChange={(e)=>setTask(e.target.value)}
            />
            <button disabled={task.trim()===""} onClick={addTask}>{index===null?"add":"edit"}</button>

            <h2>Task to do:</h2>

            {
                tasks.length>0?
                    <ol>
                        {
                            tasks.map((task,i)=>{
                                return(
                                    <li key={i}>
                                        {i+1} )  {task}
                                        <button onClick={()=>editTask(i)}>edit</button>
                                        <button onClick={()=>deleteTask(i)}>delete</button>
                                    </li>
                                )
                            })
                        }
                    </ol>
                    :
                    <div>אין משימות ממתינות </div>

            }

        </div>

    )
}
export default ToDoList;