function drawPyramid() {
    // first, clear the old content
    document.getElementById("pyramid").innerHTML = "";

    //Pull the brick symbol from html
    var brickSymbol = document.getElementById("symbol");
    var symbolBrick = brickSymbol.value;

    //Pull the height vaule from the slider
    var slideHeight = document.getElementById("slide");
    var height = slideHeight.value;

    // document.getElementById("heightValue").innerHTML = height;

    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp"; 
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += symbolBrick;
        }

        // make a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}