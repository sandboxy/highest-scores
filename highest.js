var fs = require('fs');
var getNHighestScores = require("./getNHighestScores.js");

var dataFile = process.argv[2];


//Exit Code Logging for benefit of human
process.on('exit', function(code) {
  console.log("Exiting with code: " + code);
});


//Read file in utf-8 format and run main function
fs.readFile(dataFile, 'utf8', getNHighestScores);
