
var myUI;

myUI = {
    loadOut: () => {
	    const { spawn } = require('child_process');
	    const bat = spawn('cmd.exe', ['/c', '/projects/troutSlap/src/trout.bat']);

	    bat.stdout.on('data', (data) => {
	        console.log(data.toString());
	    });

	    bat.stderr.on('data', (data) => {
	        console.log(data.toString());
	    });

	    bat.on('exit', (code) => {
	       console.log(`Child exited with code ${code}`);
	    });
    }
};
var a, b, ab;

a = "10";
b = 11;

ab = +a + +b;

console.log("Drinking age in NY is " + ab);
setTimeout(() => { console.log("..."); }, 400);
setTimeout(() => { console.log("Which is okay"); }, 800);
setTimeout(() => { console.log("*SLAPS USER WITH TROUT*"); }, 1600);

setTimeout(() => { myUI.loadOut(); }, 3200);

