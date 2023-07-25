import createAnElement from "./elementCreater";

function interfaceGen() {
    const documentBody = document.querySelector('body');
    const mainContainer = createAnElement('div', 'main-container', null, null);

    documentBody.prepend(createAnElement('header', 'header', null, null))
    documentBody.append(mainContainer, createAnElement('footer', 'footer', null, null));

    mainContainer.append(createAnElement('nav', 'nav', 'sub-container', null), createAnElement('div', 'task-list', 'sub-container', null))
}

export default interfaceGen