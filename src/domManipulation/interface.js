// Import statements to import functions and components from other modules
import createAnElement from "./elementCreater"; // Importing the createAnElement function from the 'elementCreater' module
import taskcontainer from "./taskcontainer"; // Importing the 'taskcontainer' function from the 'taskcontainer' module
import toDoBoard from "./todoboard"; // Importing the 'toDoBoard' function from the 'todoboard' module
import tasklist from "./tasklist"; // Importing the 'tasklist' function from the 'tasklist' module
import projectBoard from "./projectBoard"; // Importing the 'projectBoard' function from the 'projectBoard' module
import populatePage from "../appLogic/populatePage"; // Importing the 'populatePage' function from the 'appLogic/populatePage' module

function interfaceGen() {
    const documentBody = document.querySelector('body');

    // Creating the main container element with a class 'main-container'
    const mainContainer = createAnElement('div', 'main-container', null, null);

    // Adding header and footer elements to the document body
    documentBody.prepend(createAnElement('header', 'header', null, null));
    documentBody.append(mainContainer, createAnElement('footer', 'footer', null, null));

    // Adding sub-containers 'nav' and 'to-do-container' to the main container
    mainContainer.append(createAnElement('nav', 'nav', 'sub-container', null), createAnElement('div', 'to-do-container', 'sub-container', null));


    // Calling functions to populate the different sections of the interface
    taskcontainer(); // Populating the main body
    projectBoard(); // Populates the project board section of the interface; Also establishes clickEvent for createProject button
    tasklist(); // Handles creation of tasklist section of interface where the tasks are created and displayed
    toDoBoard(); // Creates div that tasks will be appended to
    populatePage(); // Handles what the page looks like on load
}

export default interfaceGen