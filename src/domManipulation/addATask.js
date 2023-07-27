import createAnElement from "../domManipulation/elementCreater";
import task from "../appLogic/task";


function addATask(button) {
        button.addEventListener('click', () => {
            let taskInput = document.querySelector('.taskInput');
            let dateInput = document.querySelector('.dateInput');

            const newTask = new task(taskInput.value, dateInput.value);


            // Container under fieldset for tasks
            const divForTasks = createAnElement('div', 'actual-container', null, null);

            // Button for deleting tasks

                
            let taskContainer = document.querySelector('.to-do-list');
            taskContainer.append(divForTasks);
            taskInput.value = "";
            dateInput.value = "";
            newTask.appendItAll();

        })
        }

export default addATask