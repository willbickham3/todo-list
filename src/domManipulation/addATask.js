import createAnElement from "../domManipulation/elementCreater";
import { differenceInDays, format } from "date-fns";


function addATask(button) {
        button.addEventListener('click', () => {
            let taskInput = document.querySelector('.taskInput');
            let dateInput = document.querySelector('.dateInput')

            if (taskInput.value.trim() === '')
            {return}

            // Container under fieldset for tasks

            const divForTasks = document.createElement('div');
            divForTasks.classList.add('actual-container');

            // Actual title of task

            const taskDiv = document.createElement('div');
            taskDiv.classList.add('task');
            taskDiv.innerHTML = taskInput.value;

            // Button for deleting tasks

            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete');
            deleteBtn.innerHTML = "X";

            const date = new Date();
            const formatDate = new Date(dateInput.value);
            const dueDate = differenceInDays(formatDate, date)

            const dueDateValue = document.createElement('div');
            dueDateValue.innerHTML= `${dueDate}`;
            
            let taskContainer = document.querySelector('.to-do-list');
            divForTasks.append(taskDiv, dueDateValue, deleteBtn);
            taskContainer.append(divForTasks);
            taskInput.value = "";
            dateInput.value = "";
        })
    }

export default addATask