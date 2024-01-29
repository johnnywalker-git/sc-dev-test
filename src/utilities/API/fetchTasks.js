import axios from "axios"

async function fetchTasks(statusCode) {
    
    try {
        const returnedTasks = await axios.get(`${import.meta.env.VITE_APP_API_URL}${import.meta.env.VITE_APP_API_KEY}/status/${statusCode}.json`)
        return returnedTasks.data.task_ids
    } catch (error) {
        throw error
    }
}

export default fetchTasks;