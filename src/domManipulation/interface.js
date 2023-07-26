import createAnElement from "./elementCreater";
import tasklist from "./tasklist";
import toDoBoard from "./todoboard";

function interfaceGen() {
    const documentBody = document.querySelector('body');
    const mainContainer = createAnElement('div', 'main-container', null, null);

    documentBody.prepend(createAnElement('header', 'header', null, null))
    documentBody.append(mainContainer, createAnElement('footer', 'footer', null, null));

    mainContainer.append(createAnElement('nav', 'nav', 'sub-container', null), createAnElement('div', 'to-do-container', 'sub-container', null))

    tasklist();
    toDoBoard();
}

export default interfaceGen