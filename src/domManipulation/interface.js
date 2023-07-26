import createAnElement from "./elementCreater";
import taskcontainer from "./taskcontainer";
import toDoBoard from "./todoboard";
import tasklist from "./tasklist";

function interfaceGen() {
    const documentBody = document.querySelector('body');
    const mainContainer = createAnElement('div', 'main-container', null, null);

    documentBody.prepend(createAnElement('header', 'header', null, null))
    documentBody.append(mainContainer, createAnElement('footer', 'footer', null, null));

    mainContainer.append(createAnElement('nav', 'nav', 'sub-container', null), createAnElement('div', 'to-do-container', 'sub-container', null))

    taskcontainer();
    toDoBoard();
    tasklist();
}

export default interfaceGen