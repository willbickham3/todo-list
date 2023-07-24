import createAnElement from "./elementCreater";

function interfaceGen() {
    const documentBody = document.querySelector('body');
    const container = createAnElement('div', 'container', null);
    documentBody.appendChild(container);
    return container
}

export default interfaceGen