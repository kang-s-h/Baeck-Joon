const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0].split('');
    total = ""
    for(let i = 0;i<str.length;i++){
        if('a' <= str[i] && str[i] <= 'z'){
            total += str[i].toUpperCase();
            
        }else{
            total += str[i].toLowerCase();
            
        }
        
        
}
        console.log(total);
});