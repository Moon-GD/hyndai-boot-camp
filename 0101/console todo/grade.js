const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

reader.setPrompt('명령하세요: ("exit" to fisnish) ');
reader.prompt();

reader.on("line", (line) => {
    if(line == "exit"){
        reader.close();
    }
    else{
        const showRes = require('./show');
        
        // 사용자 input 파싱하여 배열 저장
        let inputWords = line.split('$');

        // show
        if(inputWords[0]=='show'){
            showRes.show(inputWords[1]);
        }
        else{
            // 보완 사항 : 이상한 입력 값이 들어와도 show$all 이 수행된다
            // delete
            if(inputWords[0]=='delete'){
                const deleteRes = require('./delete');
                deleteRes.idelete(inputWords[1]);
            }
            // update
            else if(inputWords[0] === 'update') {
                const updateRes = require("./update");
                updateRes.update(inputWords[1], inputWords[2]);
            }
            // add
            else if(inputWords[0] === 'add'){
                const addRes = require("./add");
                addRes.addlist(inputWords[1], inputWords[2]);
            }
            showRes.show("all");
        }
        
    }
    reader.prompt();
});

reader.on("close",function(){
    process.exit();
})