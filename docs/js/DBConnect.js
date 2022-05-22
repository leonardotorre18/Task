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