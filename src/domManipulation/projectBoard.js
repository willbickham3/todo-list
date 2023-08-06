import Project from "../appLogic/project";
import createAnElement from "./elementCreater";
import { getTasks } from "../appLogic/populatePage";

let projects = [];

function projectBoard() {
    const navBar = document.querySelector('.nav-bar');
    const projectContainer = document.querySelector('.project-container');

    const homeScreen = createAnElement('button', 'home-page', null, 'Home');
    const today = createAnElement('div', 'today', null, `Today`);
    const tomorrow = createAnElement('div', 'tomorrow', null, 'Tomorrow');

    const projectCreater = createAnElement('h1', 'projects', null, 'Projects');
    const createNewProject = createAnElement('button', 'make-a-project', null, '+ add a project!');

    navBar.append(homeScreen);
    projectContainer.append(projectCreater, createNewProject);

    homeScreen.addEventListener('click', () => {
        let tasks = document.querySelectorAll('.task');
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (tasks.length !== storedTasks.length) {
            tasks.forEach(task => {task.remove()});
            getTasks();
        }
    })

    createNewProject.addEventListener('click', () => {
        let projects = localStorage.getItem('projects');
        projects = JSON.parse(projects);
        const newProject = prompt('Name of Project', )
    if (newProject !== null && newProject.trim() !== '') {
        if (projects.includes(newProject)) {
            alert('Title already in use! Please select a new one.');
            return
        }
        else {
        let project = new Project(newProject);
        project.doAllTheThings();
        }
    }
    })
}

export default projectBoard