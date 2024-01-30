import axios from "axios";

async function fetchTaskDetails(taskId) {
    try {
        const returnedTask = await axios.get(`${import.meta.env.VITE_APP_API_URL}${import.meta.env.VITE_APP_API_KEY}/task/${taskId}.json`)
        return returnedTask.data
    } catch (error) {
        throw error
    }

}

export default fetchTaskDetails;