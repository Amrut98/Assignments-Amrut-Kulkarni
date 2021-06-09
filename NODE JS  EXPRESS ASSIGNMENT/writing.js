//10.Writing on txt file.


const fs = require("fs");

fs.writeFile("main.txt", "hey ho! lets go",
    () => {
        console.log("The file was saved!");
    }
);