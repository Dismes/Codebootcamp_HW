var content;
var fs = require('fs');
var userinput = process.argv.slice(2);
// First I want to read the file
fs.readFile('bank.txt', 'utf8',function read(err, data) {
    if (err) {
        throw err;
    }
    content = data;



    // Invoke the next step here however you like
    //console.log(content);   // Put all of the code here (not the best solution)
    console.log(content);
    trueContent = content.split(",");
    processFile(userinput,trueContent); // Or put the next step in a function and invoke it
});

function processFile(a,b) {
    console.log(a);

    switch (a[0]) {
        case 'deposit':
            break;
        case 'total':
        ReadTotal(b);
            break;
        case 'withdraw':
            break;
        case 'lotto':
            break;
    }
}

function deposit(a){

}

function ReadTotal(b){
console.log(b[0]);
}