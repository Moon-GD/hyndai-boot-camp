const todos = require("./todos")["todos"];

function show(toCount) {
    let todoList = [];
    let doingList = [];
    let doneList = [];
    

    for(let i=0;i<todos.length;i++) {
        if(todos[i].status === "todo") {
            todoList.push(`${todos[i].name}, ${todos[i].id}번`)
        }
        else if(todos[i].status === "doing") {
            doingList.push(`${todos[i].name}, ${todos[i].id}번`)
        }
        else if(todos[i].status === "done") {
            doneList.push(`${todos[i].name}, ${todos[i].id}번`)
        }
    }

    if(toCount === "all") {
        console.log(`현재 상태 : todo : ${todoList.length}개, doing : ${doingList.length}개, done : ${doneList.length}개`);
    }
    else if(toCount === "todo") {
        process.stdout.write(`todo리스트 : 총${todoList.length}건 : `);
        
        for(let i=0;i<todoList.length;i++) {
            process.stdout.write(`'${todoList[i]}'`);

            if(i != todoList.length - 1) {
                process.stdout.write(' , ')
            }
        }

        console.log('')
    }
    else if(toCount === "doing") {
        process.stdout.write(`doing리스트 : 총${doingList.length}건 : `);
        
        for(let i=0;i<doingList.length;i++) {
            process.stdout.write(`'${doingList[i]}'`);

            if(i != todoList.length - 1) {
                process.stdout.write(' , ')
            }
        }

        console.log('')
    }
    else if(toCount === "done") {
        process.stdout.write(`done리스트 : 총${doneList.length}건 : `);
        
        for(let i=0;i<doneList.length;i++) {
            process.stdout.write(`'${doneList[i]}'`);

            if(i != todoList.length - 1) {
                process.stdout.write(' , ')
            }
        }

        console.log('')
    }
}

exports.show = show;