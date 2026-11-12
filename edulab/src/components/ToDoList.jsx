import {useState} from "react";
import "./TodoList.css"


function ToDoList(){
    const [task,setTask]=useState("")
    const [tasks,setTasks]=useState([5,6])


    const addTask=()=>{

    }

    // const print=()=>{
    // return(
    //     <div>hi</div>
    // )
    // }

    return(
        <div>
            <h1>ToDoList</h1>
            <input value={task}
                   onChange={(e)=>setTask(e.target.value)}
            />
            <button onClick={addTask}>add</button>
            {/*{print()}*/}
            <h2>Task to do:</h2>
            {/*<p>אם כן:</p>*/}
            {/*{*/}
            {/*    tasks.length>0&&<p>yes</p>*/}
            {/*}*/}
            {/*<p>מה קורה שכן מה קורה שלא</p>*/}
            {
                tasks.length>0?
                    <div>
                        {
                            tasks.map((task,i)=>{
                                return(
                                    <p key={i}>
                                        {i+1} )  {task}
                                    </p>
                                )
                            })
                        }
                    </div>
                    :
                    <div>אין משימות ממתינות </div>

            }
        </div>

    )
}
export default ToDoList;