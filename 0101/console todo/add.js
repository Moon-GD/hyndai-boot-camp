const todos = require('./todos');

function addlist(todoName, todoTags){
    todos["todos"].push({
        'name':todoName,
        'tags':todoTags,
        'status':"todo",
        "id":todos["todos"].length + 1
    });

    console.log(`${todoName} 1개가 추가됐습니다. (id: ${todos["todos"][todos["todos"].length - 1].id})`);
}

exports.addlist = addlist;