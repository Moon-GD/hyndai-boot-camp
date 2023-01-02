const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.setPrompt("명령하세요: ");
rl.prompt();
rl.on("line", (line) => {
    if(line == "exit"){
        rl.close();
    }
    else{
        const showRes = require('./show');
        let linetmp = line.split('$');
        if(linetmp[0]=='show'){
            showRes.show(linetmp[1]);
        }
        else{
            if(linetmp[0]=='delete'){
                const deleteRes = require('./delete');
                deleteRes.idelete(linetmp[1]);
            }
            else if(linetmp[0] === 'update') {
                const updateRes = require("./update");
                updateRes.update(linetmp[1], linetmp[2]);
            }
            else if(linetmp[0] === 'add'){
                const addRes = require("./add");
                addRes.addlist(linetmp[1], linetmp[2]);
            }
            showRes.show("all");
        }
        
    }
    rl.prompt();
});

rl.on("close",function(){
    process.exit();
})