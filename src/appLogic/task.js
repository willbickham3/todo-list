import createAnElement from "../domManipulation/elementCreater";
import { differenceInDays, differenceInHours, format } from "date-fns";

let taskManager = [];

class Task {
    constructor(title, dueDate, project, priority) {
        this.title = title;
        this.dueDate = dueDate;
        if (!project) {this.project == null}
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
                    const index = taskManager.findIndex(task => task.title === this.title);
                    taskManager[index].title = newTitle;
                    this.title = newTitle;
                    taskDiv.innerHTML = newTitle;
                    this.localStoring();
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

        titleChecker() {
            let dupedTitle = taskManager.some(task => task.title === this.title);
            if (dupedTitle) {
                alert('Please choose different title!');
            }
            return !dupedTitle;
        }

        removeTask() {
            const deleteBtn = createAnElement('button', 'delete', null, 'Remove Task');
            deleteBtn.addEventListener('click', () => {
                const parent = deleteBtn.parentElement;
                parent.remove();
                taskManager = taskManager.filter(task => !(task.title === this.title && task.dueDate === this.dueDate && task.project === this.project));
                this.localStoring();
            })
            return deleteBtn
        }

        localStoring() {
            const storedTasks = JSON.stringify(taskManager);
            localStorage.setItem('tasks', storedTasks);
            return storedTasks
        }

        // localRetrieval() {
        //     if (taskManager) {
        //     const retrievedTasks = JSON.parse(localStorage.getItem('tasks'));
        //     return retrievedTasks 
        //     }
        //     else {
        //         return
        //     }
        // }

        localClear() {
            localStorage.clear();
        }

        appendALittle() {
            const toDoList = document.querySelector('.to-do-list');
            const projectName = createAnElement('h1', 'project-name', null, `${this.project}`);
            const taskList = createAnElement('div', 'task', `${this.project}`, null);
            toDoList.appendChild(taskList);
            taskList.append(this.appendTitle(), this.appendDate(), this.removeTask())
        }
        

        appendItAll() {
            this.appendALittle();
            taskManager.push(this);
            this.localStoring();
        
    }
}

export default Task