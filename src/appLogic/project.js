import createAnElement from "../domManipulation/elementCreater";
import tasklist from "../domManipulation/tasklist";
import Task from "./task";

let projects = [];

class Project {
    constructor(projectID) {
        this.projectName = projectID
    }

    appendProject() {
        const projectName = createAnElement('button', 'project', `${this.projectName}`, `${this.projectName}`);
        document.querySelector('.project-container').append(projectName);
        projectName.append(this.removeProject());
        projectName.addEventListener('click', () => {
            let tasks = document.querySelectorAll('.task');
            let taskManager = localStorage.getItem('tasks');
            taskManager = JSON.parse(taskManager);
            tasks.forEach(taskdiv => {
                    taskdiv.remove();
            })
            taskManager.forEach(element => {
                let taskItem = new Task(element.title, element.dueDate, element.project)
                if (element.project === this.projectName) {
                    taskItem.appendALittle();
                }
            })
        })
        return projectName
    }

    projectSelector() {
        const projectmaker = document.querySelector('select');
        const newOption = document.createElement('option');
        const optionText = document.createTextNode(`${this.projectName}`);
        newOption.appendChild(optionText);
        projectmaker.appendChild(newOption);
        return { projectmaker, newOption, optionText }
    }

    arrayPush() {
        const storedProjects = localStorage.getItem('projects');
        if (storedProjects) {
            projects = JSON.parse(storedProjects)
        }
        projects.push(this.projectName);
        localStorage.setItem('projects', JSON.stringify(projects));
        console.log(projects)
        return { storedProjects, projects }
    }

    projectStoring() {
        let storeProjects = JSON.stringify(projects);
        localStorage.setItem('projects', storeProjects);
        return storeProjects
    }

    projectAppender() {
        let retrievedProjects = localStorage.getItem('projects');
        if (retrievedProjects) {
            projects = JSON.parse(retrievedProjects);
        }
        projects.forEach(project => {
            if (project.project === this.projectName) {
                let newTask = new Task(project.title, project.dueDate, project.project, project.priority);
                newTask.appendALittle();
            }
        })
    }

    removeProject() {
        const deleteBtn = createAnElement('button', 'delete-project', null, 'X');
        deleteBtn.addEventListener('click', () => {
            const parent = deleteBtn.parentElement;
            parent.remove();
            projects = projects.filter(project => !(project.projectID === this.projectID));
            this.projectStoring();
        })
        return deleteBtn
    }

    doAllTheThings() {
        this.arrayPush();
        this.appendProject();
        this.projectSelector();
        this.projectStoring();
    }
}

export default Project