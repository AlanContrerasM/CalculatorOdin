// return parseFloat(fahrenheit.toFixed(1));
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