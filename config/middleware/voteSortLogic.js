// Sort Sequelize Query by the Items' voteScore
sortByItemScoreSum = function(results) {
  results.sort(function(a, b) {
    return b.dataValues.itemScore - a.dataValues.itemScore;
  });
};

// ==== Handlebars Helpers ==== //
plusMinusVoteCount = function(VotesObj) {
  var negativeVoteCount = 0;
  var positiveVoteCount = 0;
  for (var i = 0; i < VotesObj.length; i++) {
    var currentVoteVal = VotesObj[i].voteValue;

    if (currentVoteVal > 0) {
      positiveVoteCount++;
    } else {
      negativeVoteCount++;
    }
  }
  return (
    '<span id="up-vote__count">' +
    positiveVoteCount +
    '</span> / <span id="down-vote__count">' +
    negativeVoteCount +
    "</span>"
  );
};

applySelected = function(currentItemID, userVotes) {
  // search each vote object in userVotes to see if the currentItem's id matches that votes ItemId
  if (userVotes) {
    for (var i = 0; i < userVotes.length; i++) {
      if (currentItemID === userVotes[i].ItemId) {
        if (userVotes[i].voteValue === 1) {
          return "selected-up-vote";
        } else {
          return "selected-down-vote";
        }
      }
    }
  }
};

module.exports = [sortByItemScoreSum, plusMinusVoteCount, applySelected];
