import axios from "axios";

async function fetchTaskDetails(taskId) {
    try {
        const returnedTask = await axios.get(`https://demonstration.swiftcase.co.uk/api/v2/kntlepq8watc93klowswd1tgdnopccm3/task/${taskId}.json`)
        return returnedTask.data
    } catch (error) {
        throw error
    }

}

export default fetchTaskDetails;