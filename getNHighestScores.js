var os = require('os');

var n = process.argv[3];

//File not found should exit with code 1
//This case is natively handled by node


var getNHighestScores = function getNHighestScores(error, data) {
  //Early exiting 
  if (error || isNaN(n)) {
    //Input formatting errors should exit with code 2
    process.exit(2);
  }

  var results = [];
  var dict = {};

  var sortedScores = data.split(os.EOL).map(function(el) {
    var i = el.indexOf(":");
    var score = JSON.parse(el.slice(0, i));
    var value = JSON.parse(el.slice(i + 2));

    dict[score] = value;
    return score;
  }).sort(function(a, b) {
    return b - a;
  });

  //loop thru the sortedScoresArray to get the scores and set the resultingArray
  for (var i = 0; i < n; i++) {
    var score = sortedScores[i];

    score && results.push({
      score: score,
      id: dict[score].id
    });

  }

  console.log(results);
  //Upon successful running, the program should exit with exit code 0
  process.exit(0);
};

module.exports = getNHighestScores;
