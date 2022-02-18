//handle deposit button
document.getElementById('deposit-button').addEventListener('click', function(){
    //get the amount deposited
    const depositedInput = document.getElementById('deposit-input');
    const depositAmount = depositedInput.value;
    console.log(depositAmount);

    const depositTotal = document.getElementById('deposit-total');
    depositTotal.innerText = parseFloat(depositTotal.innerText) + parseFloat(depositAmount);
    console.log('Total deposit = ', depositTotal.innerText)

    //clear deposit input field
    depositedInput.value = '';

    //update balance
    const balanceTotal = document.getElementById('balance-total');
    balanceTotal.innerText = parseFloat(balanceTotal.innerText)+parseFloat(depositAmount);
    console.log('New Balance = ', balanceTotal.innerText)
});

//handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function(){
    //get the amount deposited
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = withdrawInput.value;
    console.log(withdrawAmount);

    const withdrawTotal = document.getElementById('withdraw-total');
    withdrawTotal.innerText = parseFloat(withdrawTotal.innerText) + parseFloat(withdrawAmount);
    console.log('Total withdraw = ', withdrawTotal.innerText)

    //clear withdraw input field
    withdrawInput.value = '';

    //update balance
    const balanceTotal = document.getElementById('balance-total');
    balanceTotal.innerText = parseFloat(balanceTotal.innerText)-parseFloat(withdrawAmount);
    console.log('New Balance = ', balanceTotal.innerText)
});

