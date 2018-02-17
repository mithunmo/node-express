console.log("starting notes");

module.exports.age = 25;
module.exports.addN = () => {
   console.log("add note"); 
};

var addNote = (title, body) => {
    console.log("Adding note");    
    console.log(title, body);
};

var getAll = () => {
    console.log("Getting all notes");
};

module.exports = {
    addNote: addNote,
    add: () => {
        return 1+3;
    },
    getAll
}