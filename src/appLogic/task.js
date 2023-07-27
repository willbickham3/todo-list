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
            const taskDiv = createAnElement('div', 'task', null, `${this.title}`);
            return taskDiv
        }

        appendDate() {
            const dueDateValue = createAnElement('div', 'due-date')

            const today = new Date();
            const formatDate = new Date(this.dueDate);
            const dateDue = differenceInDays(formatDate, today)
            const hoursDifference = differenceInHours(formatDate, today);

            if (this.dueDate == '') {
                dueDateValue.innerHTML = "";
                return dueDateValue
            }

            else if (dateDue < 1) {
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

        appendItAll() {
            const divForTasks = document.querySelector('.actual-container');
            divForTasks.append(this.appendTitle(), this.appendDate())
        }
}

export default Task