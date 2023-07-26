import createAnElement from "./elementCreater";

// createAnElement takes 4 arguments (element that you want to create, class name, id (optional: can be set to null), string for innerHTML)


function toDoBoard() {
    const toDoBoard = document.querySelector('.to-do-container');

    const list = createAnElement('div', 'to-do-list', null, null)

    toDoBoard.appendChild(list);
}

export default toDoBoard