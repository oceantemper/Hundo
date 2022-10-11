//get starting values from screen
//controller function
function getValues() {
  //get the values from the page
  let startValue = document.getElementById("startValue").value;
  let endValue = document.getElementById("endValue").value;

  //parse the values in to integers
  startValue = parseInt(startValue);
  endValue = parseInt(endValue);
  if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
    //generates the numbers based on the number of user input
    let numbers = generateNumbers(startValue, endValue);

    /// display results on the page
    displayNumbers(numbers);
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Only integers are allowed for Hundo",
    });
  }
}

function generateNumbers(startValue, endValue) {
  let numbers = [];

  for (let i = startValue; i <= endValue; i++) {
    numbers.push(i);
  }
  return numbers;
}

function displayNumbers(numbers) {
  let className = "even";
  let templateRows = "";

  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    ///4 % 2 = 0, 5 % 2 = 1. The % operator gives the remainder of division

    if (number % 2 == 0) {
      className = "even";
    } else {
      className = "odd";
    }
    // ` =  template literal
    templateRows += `<tr><td class="${className}">${number}</td></tr> `;
  }
  document.getElementById("results").innerHTML = templateRows;
}
