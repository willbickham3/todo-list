import createAnElement from "./elementCreater";

function projectBoard() {
    const navBar = document.querySelector('.nav-bar');
    const projectContainer = document.querySelector('.project-container');

    const homeScreen = createAnElement('div', 'home-page', null, 'Home');
    const today = createAnElement('div', 'today', null, `Today`);
    const tomorrow = createAnElement('div', 'tomorrow', null, 'Tomorrow');

    const projectCreater = createAnElement('h1', 'projects', null, 'Projects');
    const createNewProject = createAnElement('button', 'make-a-project', null, '+ add a project!');

    navBar.append(homeScreen, today, tomorrow);
    projectContainer.append(projectCreater, createNewProject);

    createNewProject.addEventListener('click', () => {
        projectMaker();
    })
}

function projectMaker() {
    const projectmaker = document.querySelector('select');
    const newProject = prompt('Name of Project', )
    if (newProject !== null && newProject.trim() !== '') {
        const newOption = document.createElement('option');
        const optionText = document.createTextNode(`${newProject}`);
        newOption.appendChild(optionText);
        projectmaker.appendChild(newOption)
        const projectName = createAnElement('button', 'project', `${newProject}`, `${newProject}`);
        document.querySelector('.project-container').append(projectName);
    }
}

export default projectBoard