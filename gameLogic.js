var gameData = require('./gameData.js');

function getCorrectCommand() {
    var fromStartToCommon = gameData.gameData.splitStart.length - gameData.gameData.commonPath.length;
    var fromCommonToEnd = gameData.gameData.splitEnd.slice(gameData.gameData.commonPath.length);
    var wholePath = [];
    for (var i = 0; i < fromStartToCommon; i++){
        wholePath[i] = '../';
    }
    wholePath = wholePath.concat(fromCommonToEnd);

    console.log('start ' + gameData.gameData.splitStart.length, 'common ' + gameData.gameData.commonPath.length, 'end ' + fromCommonToEnd);
    console.log(wholePath);
    //dass wir das noch erleben duerfen!
}

getCorrectCommand();
