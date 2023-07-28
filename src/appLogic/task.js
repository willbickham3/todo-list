import createAnElement from "../domManipulation/elementCreater";
import { differenceInDays, differenceInHours, format } from "date-fns";

class Task {
    constructor(title, dueDate, project, priority) {
        this.title = title;
        this.dueDate = dueDate;
        this.project = project;
        this.priority = priority;
    }
        
    
        appendTitle() {
            if (this.title.trim() === '') {
                return
            }
            const taskDiv = createAnElement('div', 'task-name', null, `${this.title}`);
            taskDiv.addEventListener('click', () => {
                const newTitle = prompt('Update Task Name:', this.title);
                if (newTitle !== null && newTitle.trim() !== '') {
                    this.title = newTitle;
                    taskDiv.innerHTML = newTitle;
                }
            })
            return taskDiv
        }

        appendDate() {
            const dueDateValue = createAnElement('div', 'due-date')

            if (this.dueDate == '') {
                dueDateValue.innerHTML = '';
                return dueDateValue;
            }

            const today = new Date();
            const formatDate = new Date(this.dueDate);
            const dateDue = differenceInDays(formatDate, today)
            const hoursDifference = differenceInHours(formatDate, today);

            if (dateDue < 1) {
                dueDateValue.innerHTML = `~${hoursDifference} Hours`;
                return dueDateValue
            }
            else if (dateDue >= 2) {
                dueDateValue.innerHTML = `Coming up in ~${dateDue} days`;
                return dueDateValue
            }
            else {dueDateValue.innerHTML= `Coming up in ~${dateDue} day`;
            return dueDateValue
        }
    }

        removeTask() {
            const deleteBtn = createAnElement('button', 'delete', null, 'Remove Task');
            deleteBtn.addEventListener('click', () => {
                const parent = deleteBtn.parentElement;
                parent.remove();
            })
            return deleteBtn
        }

        appendItAll() {
            const toDoList = document.querySelector('.to-do-list');
            const taskList = createAnElement('div', 'task', null, null);
            toDoList.appendChild(taskList);
            taskList.append(this.appendTitle(), this.appendDate(), this.removeTask())
        }
}

export default Task