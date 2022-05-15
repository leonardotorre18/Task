// "use strict";

const taskName = document.getElementById('name');
const taskDescription = document.getElementById('description');
var handleDOM = new HandleDOM('container');
var DBConnet;


const showTask = () => {
    const transaction = DBConnet.transaction('task', "readonly").objectStore('task')
    const cursor = transaction.openCursor();
    const data = []
    cursor.addEventListener("success", ()=> {
        if (cursor.result) {
            data.push(cursor.result.value)
            cursor.result.continue();
        }else{
            handleDOM.render(data);
        }
    })
    
}

// Connection with indexdDb
const DBRequest = window.indexedDB.open('DBTask',1);
DBRequest.addEventListener('upgradeneeded', ()=>{
    DBConnet = DBRequest.result;
    DBConnet.createObjectStore('task', {
        autoIncrement: true
    })
})
DBRequest.addEventListener('success', ()=>{
    DBConnet = DBRequest.result;
    showTask();
})




const addTask = data =>{
    const transaction = DBConnet.transaction('task', "readwrite").objectStore('task')
    transaction.add(data)
}


document.getElementById('form').addEventListener('submit', e => {
    if (taskName.value.trim().length == 0){

    } else {
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