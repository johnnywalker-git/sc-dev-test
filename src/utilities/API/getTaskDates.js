function getTaskDates(arrayOfTasks) {
    let dates = []
    arrayOfTasks.forEach((task) => {
        if(task.data[2].value === 'No') {
            dates.push(task.data[1].value)
        } 
    })
    return dates;
}

export default getTaskDates;