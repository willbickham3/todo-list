import createAnElement from "../domManipulation/elementCreater";

let projects = [];

class Project {
    constructor(projectID) {
        this.projectName = projectID
    }

    appendProject() {
        const projectName = createAnElement('button', 'project', `${this.projectName}`, `${this.projectName}`);
        document.querySelector('.project-container').append(projectName);
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
            document.querySelector('.project-container').append(project)
        })
    }

    doAllTheThings() {
        this.arrayPush();
        this.appendProject();
        this.projectSelector();
        this.projectStoring();
    }
}

export default Project