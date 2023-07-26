// createAnElement takes 4 arguments (element that you want to create, class name, id (optional: can be set to null), string for innerHTML)

import createAnElement from "./elementCreater";

function taskcontainer() {
    const navContainer = document.querySelector('.nav');
    
    const navBar = createAnElement('div', 'nav-bar', null, null);
    const projectContainer = createAnElement('div', 'project-container', null, null);

    navContainer.append(navBar, projectContainer);
}

export default taskcontainer