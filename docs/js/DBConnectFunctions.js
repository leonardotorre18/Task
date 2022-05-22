// Get Task in DBConnect and Render with HandleDom Class
const showTask = () => {
    const transaction = DBConnet.transaction('task', "readonly").objectStore('task')
    const cursor = transaction.openCursor();
    const data = []
    cursor.addEventListener("success", ()=> {
        if (cursor.result) {
            data.push({
                id: cursor.result.key,
                name: cursor.result.value.name,
                description: cursor.result.value.description
            })
            cursor.result.continue();
        }else{
            handleDOM.render(data);
        }
    })
    
}

// Add Task in IndexedDB
const addTask = data =>{
    const transaction = DBConnet.transaction('task', "readwrite").objectStore('task')
    transaction.add(data)
}
// Delete Task in IndexedDB and execute showTask
const deleteTask = (id) => {
    const transaction = DBConnet.transaction('task', "readwrite").objectStore('task')
    transaction.delete(id)
    showTask();
}