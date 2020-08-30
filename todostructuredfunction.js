//Displays all the todo's stored in local storage//
let displayTodo=function(searchStr='')
{
    document.querySelector('#todo-div-area').innerHTML=''
       todoObjArray.forEach(function(todo){
           if(todo.text.toLowerCase().includes(searchStr.toLowerCase()))
           makeElement(todo)
       })

}

//fetches data from local storage and copies to todoObjArray //
let fetchStoredData=function()
{
    let localDataStored= JSON.parse(localStorage.getItem('todoObjArray'))
        if(localDataStored==null)
            return []
        else
           return localDataStored  
}


//Creates , adds data and append elements //
let makeElement=function(todo)
{
    let checkEl = document.createElement('input')
    let todoEl  = document.createElement('span')
    let buttonEl= document.createElement('button')

    checkEl.setAttribute('type','checkbox')

    //set up Check Box - listener & initiator
    checkEl.addEventListener('change',function(e)
        {
        todo.completed=e.target.checked
          saveLocalStorage()
          countIncompleteTodos()    
        })
        checkEl.checked=todo.completed
    
    
    //set up Delete note button - listener
    buttonEl.textContent='x'
    buttonEl.addEventListener('click',function(e){
        removeElement(todo.id)  //since "todo" is accessible here so we just put the listener here inside makeElement & 'e' is accessible you may or may not just use it also its not necessary to pass "e" as argument//
        saveLocalStorage()
        displayTodo()
        countIncompleteTodos()
    })

    todoEl.textContent=todo.text

    let commonDiv=document.createElement('div')

    commonDiv.appendChild(checkEl)
    commonDiv.appendChild(todoEl)
    commonDiv.appendChild(buttonEl)

    document.querySelector('#todo-div-area').appendChild(commonDiv)
    
}

//Removing element
const removeElement=function(id){
    let removingElementIndex=todoObjArray.findIndex(function(todo){
          return todo.id==id
    })
       todoObjArray.splice(removingElementIndex,1)   
}

//Save or update local storage
const saveLocalStorage=function(arrayOfData=todoObjArray){
    localStorage.setItem('todoObjArray',JSON.stringify(arrayOfData))
}

//showing correct count of Incomplete todos but needs reloads will fix later
let countIncompleteTodos=function()
{
    document.querySelector('#incomplete-todos-number').innerHTML=''
    let count=0
    todoObjArray.forEach(function(todo){
        if(!todo.completed)
        count++
            })

            let incompleteTodoLine=document.createElement('p')
            incompleteTodoLine.textContent=`There are ${count} incomplete Todo's`
            document.querySelector('#incomplete-todos-number').appendChild(incompleteTodoLine)
  
}

//Checkbox to see all incomplete todo's
let printIncompleteTodos=function(){
    document.querySelector('#todo-div-area').innerHTML=''
    todoObjArray.forEach(function(todo){
        if(!todo.completed)
        makeElement(todo)
    })
}

//sorting todo's -dropdown
let sortTodos=function(optionSelected){
    if(optionSelected=='ZtoA')
    {
        //statemnet
    }
    if(optionSelected=='AtoZ')
    {
        //statemnet
    }
    if(optionSelected=='IncLength')
    {
        //statemnet
    }
}