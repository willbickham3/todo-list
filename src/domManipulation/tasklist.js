import createAnElement from "./elementCreater";

function tasklist() {
    const tasklist = document.querySelector('.to-do-container');
    const fieldset = document.createElement('fieldset');

    const legend = document.createElement('legend');
    legend.innerHTML = 'Task List';
    const taskInp = document.createElement('input');
    taskInp.placeholder = ('Create a task...');
    const taskBtn = document.createElement('button');
    taskBtn.innerHTML = 'Create Task';

    if (taskInp) {
        taskBtn.addEventListener('click', () => {
            console.log(`${taskInp.value}`)
            location.reload()
        })
    }

    tasklist.appendChild(fieldset);
    fieldset.append(legend, taskInp, taskBtn);
}

export default tasklist