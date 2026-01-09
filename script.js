//task 1

function formatFullName(firstName, lastName) {

    if(!firstName || !lastName){
        return "Invalid input"
        console.log("Invalid inputInvalid name input");
    }
  const capitalize = input => input && input[0].toUpperCase() + input.slice(1);

  const formattedFirstName = capitalize(firstName);
  const formattedLastName = capitalize(lastName);


  return formattedLastName + ", " + formattedFirstName;
}


console.log(formatFullName("quinn", "shannon"));


//task 2

function calculateTotalCost(price, quantity, taxRate) {
  if (
    price !== null && price !== '' && typeof price === "number" &&
    quantity !== null  && quantity !== '' && typeof quantity === "number" &&
    taxRate !== null && taxRate !== '' && typeof taxRate === "number" &&
  
    Number(price) > 0 && //has to be bigger than 0
    Number(quantity) > 0 && //has to be bigger than 0
    Number(taxRate) >= 0 //tax can be zero
  ) {
    return Number(price) * Number(quantity) * (1 + Number(taxRate));
  } else {
    return "invalid input";
  }
}

console.log(calculateTotalCost( 3,"dd",0.07));

//Task 3
function checkEligibility(age, isEmployed){
    if(age > 18 && isEmployed === true){
        console.log("Eligible for the program")
    }else if(age > 18 && isEmployed === false){
        console.log("Eligible with condition, please review infomation")
    }else{
        console.log("Not eligible for the program!")
    }

}

checkEligibility(18, "unemployed");