const fs = require("fs");
const os = require("os");
const notes = require("./notes.js");
const _ = require("lodash");
const yargs = require("yargs");
// fs.appendFile("greeting.txt","hello world", (err) => {
//     if(err){
//         console.log("Error can't write");
//     } else {
//         console.log("File written");
//     }
// });

// console.log(os.userInfo());
// console.log(notes.age);
// notes.addNote();
// console.log(_.isString(1));

// Node app
var command = process.argv[2];
var argv = yargs.argv;

console.log(argv);

if(command === "add"){
    notes.addNote(argv.title, argv.body);
    console.log(notes.add());
} else if ( command === "list"){
    notes.getAll();
} else if ( command === "read"){
    console.log("Fetch node");
} else if ( command === "remove"){
    console.log("remove nodes");
} else {
    console.log("Not recognized");
}
