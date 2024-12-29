//VARIABLES
//create variable for game container
let containerDiv = document.querySelector(".containerForGame");
// default number of grids (if no user input detected or beg of game)
let inputNum = 10;
let inputField;
let row;
let column;

//EVENT LISTENERS
// adds guiding text to number input selection
document.getElementById("boxInput").addEventListener("click", addGuidingText);
document.getElementById("submitButton").addEventListener("click", newGrid);

//FUNCTIONS
function gridOnPageLoad() {
  for (let i = 0; i < 10; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    containerDiv.appendChild(row);

    for (let j = 0; j < 10; j++) {
      let column = document.createElement("div");
      column.classList.add("column");
      row.appendChild(column);
    }
  }
}

//Function to clear grid from page load and then re-create new grade base on user input
function newGrid() {
  // get input from text box
  inputNum = document.getElementById("boxInput").value;

  // create new grid based on inputNum
  if (inputNum < 2 || inputNum > 99 || isNaN(inputNum)) {
    alert("Please enter a valid number between 2 and 99");
  } else {
    // remove previous classes of row and columns - creates the empty grid box again
    document.querySelectorAll(".row").forEach((el) => el.remove());
    document.querySelectorAll(".column").forEach((el) => el.remove());
    for (let k = 0; k < inputNum; k++) {
      let row = document.createElement("div");
      row.classList.add("row");
      containerDiv.appendChild(row);

      for (let l = 0; l < inputNum; l++) {
        let column = document.createElement("div");
        column.classList.add("column");
        row.appendChild(column);
      }
    }
  }
}

// function to add guiding text to number input selection
function addGuidingText() {
  document.getElementById("warningText").innerHTML =
    "Choose any number between 2 and 99!";
}

//FUNCTION CALLS
gridOnPageLoad();
