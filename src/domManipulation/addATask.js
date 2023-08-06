import Task from "../appLogic/task";

function addATask(button) {
        button.addEventListener('click', () => {
            let taskInput = document.querySelector('.taskInput');
            let dateInput = document.querySelector('.dateInput');
            let projectInput = document.querySelector('select');

            let taskManager = localStorage.getItem('tasks');
            taskManager = JSON.parse(taskManager);

            if (taskManager.some(tasks => tasks.title === taskInput.value)) {
                alert('Title already exists! Please select a new one!');
                return
            }            
            else {
                let newTask = new Task(taskInput.value, dateInput.value, projectInput.value);
                if (taskInput.value == '') 
                {return}
                taskInput.value = "";
                dateInput.value = "";
                newTask.appendItAll();
            }
})}

export default addATask