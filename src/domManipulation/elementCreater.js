function createAnElement(element, classList, string) {
    const newEle = document.createElement(element);
    newEle.classList.add(classList);
    newEle.innerHTML = string;

    return newEle
}

export default createAnElement