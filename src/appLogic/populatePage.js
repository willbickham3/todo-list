import Task from "./task";
import Project from "./project";

function populatePage() {
    getTasks();
    projectAppender();
}


function getTasks() {
    let retrievedTasks = localStorage.getItem('tasks');
    if (retrievedTasks === null || retrievedTasks.length === 0) {
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

function projectAppender() {
    let retrievedProjects = localStorage.getItem('projects');
    if (retrievedProjects === null || retrievedProjects.length === 0) {
        return
    }
    else {
    retrievedProjects = JSON.parse(retrievedProjects);
    retrievedProjects.forEach(project => {
        let newProject = new Project(project);
        newProject.projectSelector();
        newProject.appendProject();
    })}
}

export default populatePage