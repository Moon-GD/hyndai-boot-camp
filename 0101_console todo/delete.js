const todos = require("./todos");

function idelete(idnum){
    for(let i = 0; i < todos["todos"].length; i++){
        if(todos["todos"][i].id == idnum){
            console.log(`${todos["todos"][i].name} ${todos["todos"][i].status}가 목록에서 삭제됐습니다`);
            todos["todos"].splice(i, 1);
        }
    }
}

exports.idelete = idelete;