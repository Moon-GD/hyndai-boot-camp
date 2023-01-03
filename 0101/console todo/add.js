const todos = require('./todos')["todos"];

function addlist(todoName, todoTags){
    todos.push({
        'name':todoName,
        'tags':todoTags,
        'status':"todo",
        "id":todos.length + 1
    });

    console.log(`${todoName} 1개가 추가됐습니다. (id: ${todos[todos.length - 1].id})`);
}

exports.addlist = addlist;