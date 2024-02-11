class CreditCard {
    /* This class has static methods thus no need for a constructor */
    static inputValidation(creditCardNumber){
        let numberToString = creditCardNumber.toString();

        // Remove any dash or space
        let cardNumber = numberToString.replace(/[-\s]/g, '')

        if (isNaN(creditCardNumber) || cardNumber.length < 15 || cardNumber.length > 16){
            return "Invalid input. Please enter numeric values .";
        } else {
            if (/^\d+$/.test(cardNumber)){
                alert("Your credit card number contain a non digit character!!")
            } else{
            alert(`${CreditCard.cardType(cardNumber)} card detected!!!`)
            }
        }
    }

    static numberToArray(creditCardNumber){
        /* This function converts any number to an array, each item is a single digit */
        let arr = []
        
        let numberToString = creditCardNumber.toString();

        // Remove any dash or space
        let cardNumber = numberToString.replace(/[-\s]/g, '')
        
        // Now we have a pure string of only numbers
        // We iterate, convert to number and add to the arr array
        for (let i = 0; i < numberToString.length; i++) {
            arr.push(parseInt(cardNumber[i]));
        }
        return arr;
    
    }
    
    static cardType(cardNumber) {
        cardNumber = cardNumber.replace(/[-\s]/g, '');

    // Regular expessions for different card types
    const patterns = {
        visa: /^4/,
        mastercard: /^5[1-5]/,
        amex: /^3[47]/,
        discover: /^6(?:011|5[0-9]{2})/,
        dinersclub: /^3(?:0[0-5]|[68][0-9])[0-9]/,
        jcb: /^(?:2131|1800|35\d{3})\d{11}/,
        unionpay: /^62/,
        maestro: /^(5[06-8]|6\d)\d{10,17}/,
        mir: /^22(?:0[0-4]|[1-9][0-9])\d{12}/
    };

    // Iterate over patterns to check for matching 
    for (const [type, pattern] of Object.entries(patterns)) {
        if (pattern.test(cardNumber)) {
            return type;
        }
    }

    // If no pattern matches, return unknown card
    return 'unknown card';
    }
  

    static creditCardValidator (creditCardNumber) {
        /* This function does the actual validation using luhn algorithm*/
    
        let arr = CreditCard.numberToArray(creditCardNumber);
    
        // Here ill reverse array so itll be easy to work on
        let reversedArray = arr.reverse()
        //console.log(reversedArray)
       const arrToCheck = reversedArray.map((num, indx) => {
         let even = (indx %  2) === 0;
         let doubledNum = num * 2;
         let greaterThanNine = num * 2 > 9;
         
         /*even ? console.log(true) : console.log(false)
         even ? greaterThanNine ?  console.log(doubledNum - 9, true) :  console.log(doubledNum,)  :  console.log(num) */
      
        return !even ? greaterThanNine ?  doubledNum - 9 :  doubledNum  :  num
       } )
       
       const summed = arrToCheck.reduce((acc, curVal) => {
         return acc + curVal;
       })
        return summed;
      }

  }

  function clickValidate() {
    let cardNumberField = document.getElementById("cardNo").value;

    if (CreditCard.creditCardValidator(cardNumberField) % 10 !== 0) {
        document.getElementById("result").value = "Invalid Card Number";
    } else {
    const outputField = document.getElementById("result");

    outputField.value = ` Valid ${CreditCard.cardType(cardNumberField)} Card Number`;
    }
  }

  
//let cardNumberField = document.getElementById("cardNo").value;
    
//document.getElementById("result").value = CreditCard.creditCardValidator(cardNumberField);
//alert(cardNumberField);

//<script src="portfolio.js"></script>
