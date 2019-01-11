var myUI;

myUI = {
    loadOut: () => {
        const express = require('express');
        const app = new express();

        app.get('/', function(request, response){
             response.sendfile('./src/html/index.html');
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
setTimeout(() => { console.log("...anyway, let's launch this program shall we?"); }, 1600);

setTimeout(() => { myUI.loadOut(); }, 3200);
