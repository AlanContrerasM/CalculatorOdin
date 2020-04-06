//Create eventlistener for the buttons
const container = document.querySelector(".container");
const items = document.querySelectorAll(".item");
const displayWindow = document.querySelector(".display")
const resultWindow = document.querySelector("#result");
const opHistoryWindow = document.querySelector("#opHistory")

// Define variables to be used as global variables
let operation = [];
let errorIndicator = false;


//Create event listener for the buttons
for (let i = 0; i < items.length; i++) {
    items[i].onclick = function(e) {
        //Getting button info, id, innerhtml, and adding to the operation array
        const idBtn = e.target.id;
        const htmlBtn = e.target.innerHTML;
        console.log("pressed " + idBtn);
        operation.push(htmlBtn);


        //Listen for special buttons pressed
        if(idBtn == "del"){ 
            console.log("deleted last input")
            operation.pop();
            operation.pop();
        } else if(idBtn == "clear"){
            operation = [];
            addToOpHistoryWindow(operation.join(""));
        } else if(idBtn == "solve"){
            // Equals sign was pressed
            let result = pressEquals(operation);
            //check if the operation was a success
            if (errorIndicator){
                addToResultWindow("Wrong Operation");
            } else operation = result;
        }
        // Send the operation to the display checking if we have an error
        if(!errorIndicator){
            addToResultWindow(operation.join(""));
        } else errorIndicator = false; 
            

        // check for overflows, and create a scrollbar if true
        checkOverflows();
        
      
    }
  }


// Create a function for what happens when we press the equals button
function pressEquals(operation){
    // Delete equal sign from the array
    console.log("solve button was pressed");
    operation.pop();
    console.log("operation to be solved " + operation.join(""));
    //display operation history
    addToOpHistoryWindow(operation.join(""));
    let result;

    //Catching errors with the operation
    try {
        result = eval(operation.join(""));
        if(result%1 == 0){
            result = result.toFixed(0)
        } else{
            result = result.toFixed(4)
        }
        console.log(result + " all good");
        return result.split("");
      }
      catch(err) {
        console.log("Bad Operation")
        errorIndicator = true;
      } 

    


}

//addToWindows functions
function addToResultWindow(text){
    resultWindow.innerHTML = text;
}

function addToOpHistoryWindow(text){
    opHistoryWindow.innerHTML = text;
}

//create of delete scrollbar
function checkOverflows(){
    if (resultWindow.scrollWidth >  resultWindow.clientWidth) {
        console.log("we have an overflow, creating scroll")
        resultWindow.style.cssText = "overflow-x: scroll;"
    } else resultWindow.style.cssText = "overflow-x: none;"
    if (opHistoryWindow.scrollWidth >  opHistoryWindow.clientWidth) {
        console.log("we have an overflow, creating scroll")
        opHistoryWindow.style.cssText = "overflow-x: scroll;"
    } else opHistoryWindow.style.cssText = "overflow-x: none;"
}



//create basic calculator functions

function add(a,b) {return a+b};

function substract(a,b) {return a-b};

function multiply(a,b) {return a*b};

function divide(a,b) {return a/b};

function power(a,b) {return a**b};

function remainder(a,b) {return a%b};

//Create an operate function, takes an operator and two numbers

function operate(operator,a,b){
    let result;
    switch (operator) {
        case "add":
            console.log("adding "+ a + " and " + b);
            result = add(a,b)
            console.log(result)
            break;
        case "substract":
            console.log("substracting "+ a + " and " + b);
            result = substract(a,b)
            console.log(result)
            break;
        case "multiply":
            console.log("multiplying "+ a + " and " + b);
            result = multiply(a,b)
            console.log(result)
            break;
        case "divide":
            console.log("dividing "+ a + " by " + b);
            result = divide(a,b)
            console.log(result)
            break;
        case "power":
            console.log("power of "+ a + " to the " + b);
            result = power(a,b)
            console.log(result)
            break;
        case "remainder":
            console.log("the remainder of "+ a + " divided by " + b);
            result = remainder(a,b)
            console.log(result)
            break;
        default:
            console.log("No operator recognized");
        }

        if(result%1 != 0){
            result = parseFloat(result.toFixed(0))
        } else{
            result = parseFloat(result.toFixed(4))
        }
    return result;

}
