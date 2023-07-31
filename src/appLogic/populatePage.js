import Task from "./task";

function populatePage() {
    let retrievedTasks = localStorage.getItem('tasks');
    if (retrievedTasks == []) {
        return
    }
    else {
    retrievedTasks = JSON.parse(retrievedTasks);
    retrievedTasks.forEach(tasks => {
        let task = new Task(tasks.title, tasks.dueDate, '');
        task.appendItAll();
    })
}

}

export default populatePage