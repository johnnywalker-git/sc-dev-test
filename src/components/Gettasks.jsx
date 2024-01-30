import { useEffect, useState } from "react"
import fetchTasks from "../utilities/API/fetchTasks"
import fetchTaskDetails from "../utilities/API/fetchTaskDetails"
import addTaskCost from "../utilities/API/addTaskCost"
import getTaskDates from "../utilities/API/getTaskDates"

const Gettasks = () => {
    const [idInput, setIdInput] = useState("")
    const [allTasks, setAllTasks] = useState([])
    const [taskDates, setTaskDates] = useState([])
    const [taskSum, setTaskSum] = useState(0)

    function handleInput(e) {
        e.preventDefault()
        setIdInput(e.target.value)
    }

    useEffect(() => {

        const handleSubmit = async () => {
            try {
            const tasks = await fetchTasks("1043");
            const taskDetailsPromises = tasks.map((taskId) => {
                return fetchTaskDetails(taskId.id)
            })
            const taskDetails = await Promise.all(taskDetailsPromises)
            setAllTasks(taskDetails)
            const taskTotal = addTaskCost(taskDetails)
            setTaskSum(taskTotal.cost)
            const returnedTaskDates = getTaskDates(taskDetails)
            setTaskDates(returnedTaskDates)

            } catch (error) {
                throw error
            }
         }
         handleSubmit()
    }, [])
    console.log(taskSum)

    return <div>
        <form className="flex bg-blue-600 justify-center">
            <input type="text" onChange={(e) => {handleInput(e)}} value={idInput} required/>
            <button action="submit" className="button-38 h-5 text-center">Submit</button>
        </form>
        <div>
        <ul>
            {
            taskDates && taskDates.map((task) => {
                return <li>{task}</li>
            })
            }
        </ul>
        </div>
        <h1>Total: {taskSum}</h1>
    </div>
}

export default Gettasks;