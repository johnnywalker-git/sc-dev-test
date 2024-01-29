function addTaskCost(arrayOfTasks) {
    let totalCost = 0
    arrayOfTasks.forEach((task) => {
        if(task.data[2].value === 'No') {
            totalCost += parseInt(task.data[0].value)
        } 
    })
    return {"cost": totalCost}
}

export default addTaskCost;