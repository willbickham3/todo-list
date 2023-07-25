// createAnElement takes 4 arguments (element that you want to create, class name, id (optional: can be set to null), string for innerHTML)

function createAnElement(element, classList, id, string) {
    const newEle = document.createElement(element);
    newEle.classList.add(classList);
    if (id) {
        newEle.setAttribute('id', id);
    }
    newEle.innerHTML = string;

    return newEle
}

export default createAnElement