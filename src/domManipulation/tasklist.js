import addATask from "./addATask";
import createAnElement from "./elementCreater";

function tasklist() {
    const tasklist = document.querySelector('.to-do-container');
    const fieldset = document.createElement('fieldset');

    const legend = document.createElement('legend');
    legend.innerHTML = 'Task List';

    const taskInp = document.createElement('input');
    taskInp.classList.add('taskInput');
    taskInp.type = 'text';
    taskInp.placeholder = ('Create a task...');

    const dateInput = document.createElement('input');
    dateInput.classList.add('dateInput');
    dateInput.type = 'date';

    const projectSelector = document.createElement('select');
    const blankOption = document.createElement('option');
    projectSelector.appendChild(blankOption)

    const taskBtn = document.createElement('button');
    taskBtn.classList.add('add-task');
    taskBtn.innerHTML = 'Create Task';
    taskBtn.addEventListener('click', addATask(taskBtn));

    tasklist.appendChild(fieldset);
    fieldset.append(legend, taskInp, dateInput, projectSelector, taskBtn);
}

export default tasklist