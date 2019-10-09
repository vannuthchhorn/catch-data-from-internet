const url="https://jsonplaceholder.typicode.com/todos";
fetch(url)
.then(resp => resp.json())
.then(data =>{
    const todos = document.querySelector('#todos');
        data.forEach(item =>{
            if (item.id) {
                todos.innerHTML +=`
                <ul class="list-group mt-4 ">
                    <li class="list-group-item  bg-warning btn-dark">${item.id}</li>
                    <li class="list-group-item bg-success btn-dark">${item.title}</li>
                    <li class="list-group-item text-secondary btn-dark bg-danger">${item.completed}</li>
                </ul>
                `;
            }
        } )
})
.catch( () => console.error("Cannot allow to request"))
.finally( () =>console.log("Can request"))