"use strict";

const taskName = document.getElementById('name');
const taskDescription = document.getElementById('description');
var handleDOM = new HandleDOM('taskContainer');
var DBConnet;


document.getElementById('form').addEventListener('submit', e => {
    if (taskName.value.trim().length !== 0){
        const data = {
                name: taskName.value.trim(),
                description: taskDescription.value.trim()
            }
        addTask(data)
        showTask();

        taskName.value = '';
        taskDescription.value = '';
        
    }
    e.preventDefault();
})