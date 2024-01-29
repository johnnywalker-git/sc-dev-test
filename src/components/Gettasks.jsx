import { useEffect, useState } from "react"
import fetchTasks from "../utilities/API/fetchTasks"
import fetchTaskDetails from "../utilities/API/fetchTaskDetails"
import addTaskCost from "../utilities/API/addTaskCost"
import getTaskDates from "../utilities/API/getTaskDates"

const Gettasks = () => {
    const [idInput, setIdInput] = useState("")
    const [allTasks, setAllTasks] = useState([])

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
            addTaskCost(taskDetails)
            getTaskDates(taskDetails)
            } catch (error) {
                throw error
            }
         }
         handleSubmit()
    }, [])



    return <div className="flex bg-blue-600 justify-center">
        <form>
            <input type="text" onChange={(e) => {handleInput(e)}} value={idInput} required/>
            <button action="submit" className="button-38 h-5 text-center">Submit</button>
        </form>
    </div>
}

export default Gettasks;