const fs=require("fs");

const path=require("path");
const TODO_FILE=path.join(__dirname,"todo.json");
console.log(TODO_FILE);

function readTodos(){
    const data=fs.readFileSync(TODO_FILE,"utf-8");
    //with utf data come in string and with json.parse it convert in js array
    return JSON.parse(data);
}

function writeTodos(todos){
    fs.writeFileSync(TODO_FILE,JSON.stringify(todos,null,2));
}

function addTodo(task){
    const todos=readTodos();

    const newTodo={
        id:Date.now(),
        task,
        done:false
    };
    todos.push(newTodo);
    writeTodos(todos);
    console.log("todo added",task);

}
//addTodo("Study Node.js");

function listTodos(){
    const todos=readTodos();

    if(todos.length===0){
        console.log("no todo found");
        return;
    }
    todos.forEach((todo,index)=>{
        const status=todo.done?"✅" :"❌";
        console.log(`${index+1}.${status}${todo.task}`);
    })
}

function markDone(id){
    const todos=readTodos();

    const todo=todo.find(todo=>{
        return todo.id===id;
    })
    if(!todo){
        console.log("not found");
        return ;
    }
    todo.done=true;
    writeTodos(todos);
    console.log("markdone");
}
