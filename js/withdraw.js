//step-1 add event listener to the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function () {
    //step-2 get the withdraw amount from withdraw input field 
    // for input field use .value to get the inside input field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

     // step-7 clear the withdraw field
     withdrawField.value = '';

    if(isNaN(newWithdrawAmount)){
        alert('Please Provide a valid number');
        return;
    }

    // step-3 get the current deposit total
    // for non-input(element other than input,textarea)use innerText to get the text
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);



    // step-5 get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if(newWithdrawAmount>previousBalanceTotal){
        alert('baap er bank eto taka nai');
        return;
    }

    // step-4 add numbers to set the total deposit
    const currentWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;
    // set deposit total
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step-6 calculate current total balance
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    // set balance total
    balanceTotalElement.innerText = currentBalanceTotal;





})