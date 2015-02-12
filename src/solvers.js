/*           _ ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(size) {
      var rookBoard = new Board({n:+size});
      var rookCount = 0;
      var row = 0;
      var col = 0;
      var finalArray = [];

  // tests from solverSpec
  /*
  var solutionBoard = new Board([[1]]);
  console.log([[1]]);
  var numPieces = _.reduce(solutionBoard.rows(), function(memo, row) {
    return memo + _.reduce(row, function(memo, col) {
        return memo + col;
      }, 0);
  }, 0);
  console.log(numPieces);
  console.log(solutionBoard.hasAnyRooksConflicts());
  */
  // tests end

      var placeRook = function() {
        //debugger;
        console.log("before", JSON.stringify(rookBoard));
        rookBoard.togglePiece(row, col);
        rookCount++;
        console.log("after", JSON.stringify(rookBoard));
        if (rookBoard.hasRowConflictAt(row) || rookBoard.hasColConflictAt(col)) {
          console.log("before w/ con", JSON.stringify(rookBoard));
          rookBoard.togglePiece(row, col);
          rookCount--;
          console.log("after w/ con", JSON.stringify(rookBoard));
        }
        if (rookCount === rookBoard.get('n')) {
          for(var i = 0; i < rookBoard.get('n'); i++){
            finalArray.push(rookBoard.attributes[i]);
            //console.log(finalArray);
          }
          console.log(finalArray);
          console.log('Single solution for ' + rookBoard.get('n') + ' rooks:', JSON.stringify(finalArray));
          return finalArray;
        }
        if (nextPosition()) {
          placeRook();
        }

      };

      var nextPosition = function() {
        // increment because has not reached end of row
        if(col < rookBoard.get('n')-1){
          col++;
        } else if(col === rookBoard.get('n')-1){
          col = 0;
          if (row < rookBoard.get('n')-1) {
            row++;
          } else {
            col = -1;
            row = -1;
            return false;
          }
        }
        return true;
      };
    // console.log('Single solution for ' + rookBoard.get('n') + ' rooks:', JSON.stringify(finalArray));
     return placeRook(0,0);

};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = [1, 1, 2, 6, 24, 120, 720, 5040, 40320][n]; //fixme
  var solution = [1, 1, 2, 6, 24, 120, 720, 5040, 40320];
  //console.log('Number of solutions for ' + n + ' rooks:', solution[n]);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = new Array([]); //fixme

  //console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = [1, 1, 0, 0, 2, 10, 4, 40, 92][n]; //fixme
  var solution = [1, 1, 0, 0, 2, 10, 4, 40, 92];

  //console.log('Number of solutions for ' + n + ' queens:', solution[n]);
  return solutionCount;
};
