const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function getInput() {
    reader.question("명령어를 입력하세요 : ", (line) => {
    
        if(line == 'exit') {
            reader.close();
    
            reader.on("close",function(){
                process.exit();
            })
        }
        else {
            console.log("출력 부분 : ", line)
            getInput();
        }
    })   
}

getInput();