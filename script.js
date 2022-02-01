// returns the range value whe the range slider is moved
function sliderInput(rangeVal) {
    document.querySelector('#rangeDisplay').value=rangeVal + '%'; 
}

 // Restart or Reset Calculator.
 function resetCalculator() {
  window.location.reload(true);
}

function compute()
{
  let pAmount = document.querySelector('#principal').value;
  pAmount = parseInt(pAmount); /*converts user input to a string, parses that string, then returns an integer or NaN */

  console.log(pAmount)

  if (pAmount <= 0) {         /*check if user entered a number greater than zero */
      alert('You have made an invalid entry.\n\nPlease enter a positive number.');
      document.querySelector('#principal').focus();
      
    } else if (isNaN(pAmount) ) {     /*check if user entered is not a Number */
      alert('The amount you entered is not a Number!\n\nPlease enter a positive number.');
      document.querySelector('#principal').focus();

    } else {     /*check if this the correct number you want to enter*/
      let userAnswer = prompt('The amount you entered is: '  + pAmount + '. \n\nIs that the amount you wanted to enter? If yes enter yes or y then click ok, and if not just click ok.\n\n');

      // convert all user answers to uppercase input to lower case
      let answer = userAnswer.toLowerCase();

      if(answer !== 'yes' && answer !== 'y' ) {
        document.querySelector('#principal').focus();

      } else {
        let interestRate = document.querySelector('#rate').value;
    
  
        let numYears = document.querySelector('#years').value;
        console.log(numYears)
      
        let interestYielded = (pAmount)*parseInt(interestRate)*parseInt(numYears)/100;
      
        let receivedAmount = pAmount + interestYielded;
      
        console.log(receivedAmount)
      
        currentYear = new Date().getFullYear();
        let year = parseInt(currentYear) + parseInt(numYears);
      
        console.log(year)
      
        // if user input is greater than zero then print message
        if (pAmount > 0) {
          // create output message
          let response = "If you deposite <span><mark>" + pAmount + "</mark></span>,<br> at an interest rate of <span><mark>" + interestRate + '%' +
          "</mark></span>.<br><br> You will recieve an amount of <span><mark>" + interestYielded +
          "</span></mark>,<br>in the year <span><mark>" + numYears + "</mark><span>.";
      
          console.log(response)
      
          // returns the variable response in the form of HTML content to element span with id "displayResult"
          document.querySelector('#displayResult').innerHTML = response;
        }
      }
  }

  
}
        