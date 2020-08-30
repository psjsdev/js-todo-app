let todoObjArray=fetchStoredData()  
countIncompleteTodos()                
displayTodo()

//Add new todo
document.querySelector('#add-new-todo-form').addEventListener('submit',function(event)
{
    event.preventDefault()
    let inputData=event.target.elements.newTodo.value

    todoObjArray.push({
        text:inputData,
        completed:false,
        id:uuidv4()
    })
    saveLocalStorage()
    displayTodo()
    countIncompleteTodos()
    event.target.elements.newTodo.value=''
    
})

//live search
document.querySelector('#live-search-bar').addEventListener('input',function(event)
{
    displayTodo(event.target.value)
})

//incomplete todo list
document.querySelector('#checkbox-for-incomplete-todo-list').addEventListener('change',function(event){
    if(event.target.checked)
      printIncompleteTodos()
      else
      displayTodo()
})

//sort todo - dropdown
//document.querySelector('#drop-down').addEventListener('change',function(event){
//  sortTodos(event.target.value)
//})

