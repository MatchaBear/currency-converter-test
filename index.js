const currencyElementOne = document.getElementById("currency-one");
const currencyElementTwo = document.getElementById("currency-two");
const amountElementOne = document.getElementById("amount-one");
const amountElementTwo = document.getElementById("amount-two");

const rateElement = document.getElementById("rate");
// 'rate' is under the button

const swap = document.getElementById('swap');
// 'swap' is the button

function calculate() {
    const currencyOne = currencyElementOne.value;
    const currencyTwo = currencyElementTwo.value;

fetch(`https://api.exchangerate.host/convert?from=`+${currencyOne});

}