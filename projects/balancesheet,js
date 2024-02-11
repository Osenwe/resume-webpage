const inputItems = {
    cash1: "0",
    cash2: "0",
    cash3: "0",
    cash4: "0",
    ar1: "0",
    ar2: "0",
    ar3: "0",
    ar4: "0",
    inv1: "0",
    inv2: "0",
    inv3: "0",
    inv4: "0",
    ppe1:  "0",
    ppe2:  "0",
    ppe3:  "0",
    ppe4:  "0",
    acppe1:"0",
    acppe2:"0",
    acppe3:"0",
    acppe4:"0",
    ap1: "0",
    ap2: "0",
    ap3: "0",
    ap4: "0",
    ur1 : "0",
    ur2 : "0",
    ur3 : "0",
    ur4 : "0",
    ltd1 : "0",
    ltd2 : "0",
    ltd3 : "0",
    ltd4 : "0",
    ec1: "0",
    ec2: "0",
    ec3: "0",
    ec4: "0",
    re1: "0",
    re2: "0",
    re2: "0",
    re4: "0"


}

function stringToArraySummed(stringNumbers){
    var numbers = stringNumbers.split(",").map(function(numString) {
        return parseFloat(numString.trim());
    }
    )


 const summed = numbers.reduce((acc, curVal) =>{
            return acc + curVal;
        })
    return summed;
    
}

function mouseOver(element){
    var inputId = element.id; 
    document.getElementById(inputId).value= inputItems[inputId];
    
}


function mouseOut(element){
    var inputId = element.id; 
    
    inputItems[inputId] = document.getElementById(inputId).value;
    var calculatedValue = stringToArraySummed(inputItems[inputId]);
    if (calculatedValue < 0) {
        document.getElementById(inputId).style.color = "red";
    }

    if ((inputId === "acppe1") || (inputId === "acppe2") || (inputId === "acppe3") || (inputId === "acppe4")){
        document.getElementById(inputId).style.color = "red";
    }
    document.getElementById(inputId).value = calculatedValue;
    assetCalc();
    liabilityTotal();
    balanced();
}


function assetCalc() {
    // Current Asset Calcs here
    let tcaElementsY1 = document.getElementsByClassName('tcay1');
    let tcaElementsY2 = document.getElementsByClassName('tcay2');
    let tcaElementsY3 = document.getElementsByClassName('tcay3');
    let tcaElementsY4 = document.getElementsByClassName('tcay4');
    console.log(tcaElementsY1);
    let totalTCAY1  = 0;
    let totalTCAY2  = 0;
    let totalTCAY3  = 0;
    let totalTCAY4  = 0;

    for (let i=0; i < tcaElementsY1.length; i++) {
        totalTCAY1 += stringToArraySummed(tcaElementsY1[i].value);
        totalTCAY2 += stringToArraySummed(tcaElementsY2[i].value);
        totalTCAY3 += stringToArraySummed(tcaElementsY3[i].value);
        totalTCAY4 += stringToArraySummed(tcaElementsY4[i].value);
    }
    
    document.getElementById('tca1').value = totalTCAY1;
    document.getElementById('tca2').value = totalTCAY2;
    document.getElementById('tca3').value = totalTCAY3;
    document.getElementById('tca4').value = totalTCAY4;


    // Non Current Assets Calc here
    document.getElementById("NCV1").value = document.getElementById("ppe1").value - document.getElementById("acppe1").value;
    document.getElementById("NCV2").value = document.getElementById("ppe2").value - document.getElementById("acppe2").value;
    document.getElementById("NCV3").value = document.getElementById("ppe3").value - document.getElementById("acppe3").value;
    document.getElementById("NCV4").value = document.getElementById("ppe4").value - document.getElementById("acppe4").value;

    // Total Assets here
    let totalAssetY1 = parseFloat(document.getElementById('tca1').value) + parseFloat(document.getElementById('NCV1').value);
    let totalAssetY2 = parseFloat(document.getElementById('tca2').value) + parseFloat(document.getElementById('NCV2').value);
    let totalAssetY3 = parseFloat(document.getElementById('tca3').value) + parseFloat(document.getElementById('NCV3').value);
    let totalAssetY4 = parseFloat(document.getElementById('tca4').value) + parseFloat(document.getElementById('NCV4').value);
    
    document.getElementById("TA1").value = totalAssetY1;
    document.getElementById("TA2").value = totalAssetY2;
    document.getElementById("TA3").value = totalAssetY3;
    document.getElementById("TA4").value = totalAssetY4;
}

function liabilityTotal(){
    // Year 1
let totalCurrentLiabilities1 = parseFloat(document.getElementById('ap1').value) + parseFloat(document.getElementById('ur1').value);
document.getElementById("TCL1").value = totalCurrentLiabilities1;

let totalLiabilities1 = parseFloat(document.getElementById('ltd1').value) + totalCurrentLiabilities1;
document.getElementById("TL1").value = totalLiabilities1;

// Year 2
let totalCurrentLiabilities2 = parseFloat(document.getElementById('ap2').value) + parseFloat(document.getElementById('ur2').value);
document.getElementById("TCL2").value = totalCurrentLiabilities2;

let totalLiabilities2 = parseFloat(document.getElementById('ltd2').value) + totalCurrentLiabilities2;
document.getElementById("TL2").value = totalLiabilities2;

// YEar 3
let totalCurrentLiabilities3 = parseFloat(document.getElementById('ap3').value) + parseFloat(document.getElementById('ur3').value);
document.getElementById("TCL3").value = totalCurrentLiabilities3;

let totalLiabilities3 = parseFloat(document.getElementById('ltd3').value) + totalCurrentLiabilities3;
document.getElementById("TL3").value = totalLiabilities3;

// Year 4
let totalCurrentLiabilities4 = parseFloat(document.getElementById('ap4').value) + parseFloat(document.getElementById('ur4').value);
document.getElementById("TCL4").value = totalCurrentLiabilities4;

let totalLiabilities4 = parseFloat(document.getElementById('ltd4').value) + totalCurrentLiabilities4;
document.getElementById("TL4").value = totalLiabilities4;

// EQUITY CALCS STARTS HERS
// Year 1
let totalShareHolderEquity1 = parseFloat(document.getElementById('ec1').value) + parseFloat(document.getElementById('re1').value);
let sumEquityLiability1 = totalShareHolderEquity1 + totalLiabilities1;
document.getElementById("TSE1").value = totalShareHolderEquity1;
document.getElementById("TLS1").value = sumEquityLiability1;

// Year 2
let totalShareHolderEquity2 = parseFloat(document.getElementById('ec2').value) + parseFloat(document.getElementById('re2').value);
let sumEquityLiability2 = totalShareHolderEquity2 + totalLiabilities2;
document.getElementById("TSE2").value = totalShareHolderEquity2;
document.getElementById("TLS2").value = sumEquityLiability2;

// Year 3
let totalShareHolderEquity3 = parseFloat(document.getElementById('ec3').value) + parseFloat(document.getElementById('re3').value);
let sumEquityLiability3 = totalShareHolderEquity3 + totalLiabilities3;
document.getElementById("TSE3").value = totalShareHolderEquity3;
document.getElementById("TLS3").value = sumEquityLiability3;

// Year 4
let totalShareHolderEquity4 = parseFloat(document.getElementById('ec4').value) + parseFloat(document.getElementById('re4').value);
let sumEquityLiability4 = totalShareHolderEquity4 + totalLiabilities4;
document.getElementById("TSE4").value = totalShareHolderEquity4;
document.getElementById("TLS4").value = sumEquityLiability4;

}


function balanced() {
    // We will use the accounting equation to check if the inputs are balanced
    let balanced1 = document.getElementById("TA1").value === document.getElementById("TLS1").value;
    let difference1 = Math.abs(document.getElementById("TA1").value - document.getElementById("TLS1").value);
    if (balanced1) {
        document.getElementById("bal1").value = `True| Difference: ${difference1}`;
    } else {
        document.getElementById("bal1").value = `False| Difference: ${difference1}`;
    }

    let balanced2 = document.getElementById("TA2").value === document.getElementById("TLS2").value;
    let difference2 = Math.abs(document.getElementById("TA2").value - document.getElementById("TLS2").value);
    if (balanced2) {
        document.getElementById("bal2").value = `True| Difference: ${difference2}`;
    } else {
        document.getElementById("bal2").value = `False| Difference: ${difference2}`;
    }

    let balanced3 = document.getElementById("TA3").value === document.getElementById("TLS3").value;
    let difference3 = Math.abs(document.getElementById("TA3").value - document.getElementById("TLS3").value);
    if (balanced3) {
        document.getElementById("bal3").value = `True| Difference: ${difference3}`;
    } else {
        document.getElementById("bal3").value = `False| Difference: ${difference3}`;
    }

    let balanced4 = document.getElementById("TA4").value === document.getElementById("TLS4").value;
    let difference4 = Math.abs(document.getElementById("TA4").value - document.getElementById("TLS4").value);
    if (balanced4) {
        document.getElementById("bal4").value = `True| Difference: ${difference4}`;
    } else {
        document.getElementById("bal4").value = `False| Difference: ${difference4}`;
    }


}

function reset() {
    let inputElements = document.getElementsByTagName("input");

    for (let i = 0; i < inputElements.length; i++) {
        if (inputElements[i].id !== "resetButton"){
        inputElements[i].value = 0;
        }
    }

    for (let key in inputItems) {
        if (inputItems.hasOwnProperty(key)) {
            inputItems[key] = "0";
        }
      }
}
