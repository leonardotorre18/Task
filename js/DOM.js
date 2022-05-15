class HandleDOM {
    container 
    constructor(id) {
        this.container = document.getElementById(id);
    }

 
    createStructure (name, content){
        const task = document.createElement('div');
        const body = document.createElement('div');
        const title = document.createElement('h3');
        const description = document.createElement('p');
        const button = document.createElement('button');

        task.classList.add('task');
        body.classList.add('body');

        title.classList.add('title');
        title.innerHTML = name;

        description.classList.add('description');
        description.innerHTML = content;

        button.classList.add('deleteButton');
        button.innerHTML = "Eliminar";

        body.appendChild(title);
        body.appendChild(description);

        task.appendChild(body);
        task.appendChild(button);

        return task;
    }

    render(data) {
        this.container.innerHTML = '';
        const fragment = document.createDocumentFragment();
        data.forEach(d => {
            fragment.appendChild(this.createStructure(d.name, d.description));
        });
        this.container.appendChild(fragment)
        
    }

}