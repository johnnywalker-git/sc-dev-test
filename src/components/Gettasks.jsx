import { useEffect, useState } from "react"
import fetchTasks from "../utilities/API/fetchTasks"
import fetchTaskDetails from "../utilities/API/fetchTaskDetails"
import addTaskCost from "../utilities/API/addTaskCost"
import getTaskDates from "../utilities/API/getTaskDates"
import { Icon } from '@iconify/react';


const Gettasks = () => {
    const [idInput, setIdInput] = useState("")
    const [allTasks, setAllTasks] = useState([])
    const [taskDates, setTaskDates] = useState([])
    const [taskSum, setTaskSum] = useState()
    const [errorState, setErrorState] = useState(false)
    const [requestFail, setRequestFail] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    function handleInput(e) {
        e.preventDefault()
        setIdInput(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!Number.isInteger(parseInt(idInput))) {
            setErrorState(true);
            return;
          } else{
            setErrorState(false)
          }
 
        try {
        const tasks = await fetchTasks(idInput);
        const taskDetailsPromises = tasks.map((taskId) => {
            return fetchTaskDetails(taskId.id)
        })
        const taskDetails = await Promise.all(taskDetailsPromises)
        setAllTasks(taskDetails)
        const taskTotal = addTaskCost(taskDetails)
        setTaskSum(taskTotal.cost)
        const returnedTaskDates = getTaskDates(taskDetails)
        setTaskDates(returnedTaskDates)
        setModalOpen(true)

        } catch (error) {
            setRequestFail(true)
            throw error
        }
     }

    return (
        <div className="bg-gradient-to-r from-slate-600 to-slate-400">
        <h2 className="flex justify-center pt-4 font-bold">Please enter a Status Id</h2>
        <form className="flex justify-center p-2 gap-1" onSubmit={(e) => {handleSubmit(e)}}>
            <input type="text" onChange={(e) => {handleInput(e)}} value={idInput} required className="rounded"/>
            <button action="submit" className="button-38 h-5 text-center">Submit</button>
        </form>
        <div>
        
        {errorState && 
            <div className="flex justify-center bg-red-600">
            <p className="justify-center items-center text-white">Please only enter numbers.</p>
            </div>
            }
        </div>
        {requestFail && 
            <div className="flex justify-center bg-red-600">
            <p className="justify-center items-center text-white">Request failed, please check number.</p>
            </div>
            }
        { modalOpen &&
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-slate-600 to-slate-400 p-10 rounded-md border shadow-xl">
           
        <ul className="flex justify-center flex-col items-center">
        <Icon icon="zondicons:close-solid" onClick={() => {setModalOpen(false)}} className="absolute top-0 right-0 m-4 cursor-pointer" color="white"/>
            {
            taskDates && taskDates.map((task, index) => {
                return <li key={index} className="text-white">{Math.floor(new Date(task).getTime() / 1000)}</li>
            })
        
            }
            { taskSum &&
                <p className="text-white font-bold">£{taskSum.toFixed(2)}</p>
            }
        {}
            
        </ul>
        </div>}
        </div>
        
        )
}

export default Gettasks;