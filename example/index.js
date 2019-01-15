const readline = require('readline');
const L298N = require('../l298n.js');
//bcm code
let l298n = new L298N(17,27,22,null,null,null);
l298n.setSpeed(l298n.NO1,20);

const rl = readline.createInterface({
	    input: process.stdin,
	    output: process.stdout
});
rl.on('line', function (input) {
    if (input === 'quit()') {
        rl.close();
    } else if (input === 'f') {
	    l298n.forward(l298n.NO1);
    } else if (input === 'b') {
	    l298n.backward(l298n.NO1)
    } else if (input === 't') {
	    l298n.stop(l298n.NO1);
    } else {
	    l298n.setSpeed(l298n.NO1,parseInt(input));
    }
});

process.on("SIGINT", function(){
    l298n.stop(l298n.NO1);
    console.log('shutdown!');
    process.exit(0);
});
