const todos = require("./todos");

function update(id, changedStatus) {
    for(let i=0;i<todos["todos"].length;i++) {
        if(todos["todos"][i].id == id) {
            todos["todos"][i].status = changedStatus;
            break;
        }
    }
}

exports.update = update;