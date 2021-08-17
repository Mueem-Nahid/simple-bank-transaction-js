
let disableButton;

//--------------------Deposit------------------

document.getElementById("deposite-btn").addEventListener("click", function(){
    var depositeValue = parseInt(document.getElementById("deposite").value);
    var depositeDisplay = parseInt(document.getElementById("deposite-amount").innerText);
    var totalDeposite=0;

    if(depositeValue && depositeValue>0)
    {
        totalDeposite= depositeValue+depositeDisplay;
        document.getElementById("deposite-amount").innerText = totalDeposite;
        
        deposite.value='';

        //update balance
        var balanceDisplay = parseInt(document.getElementById("balance-amount").innerText);
        var updatedBalance = balanceDisplay+depositeValue;
        document.getElementById("balance-amount").innerText = updatedBalance;

        disableButton = updatedBalance;

        document.getElementById("withdraw-btn").disabled = false;
        document.getElementById("withdraw-btn").style.background='rgba(99, 102, 241, var(--tw-bg-opacity))';
    }
    else{
        alert("Input a positive deposite value.");
        deposite.value='';
    }
})

//----------------WithDraw-----------------------

document.getElementById("withdraw-btn").addEventListener("click", function(){
    var withdrawValue = parseInt(document.getElementById("withdraw").value);
    var withdrawDisplay = parseInt(document.getElementById("withdraw-amount").innerText);
    var totalWithdraw=0;

    var balanceDisplay = parseInt(document.getElementById("balance-amount").innerText);
    
    if(withdrawValue && withdrawValue>0)
    {
        if(withdrawValue>balanceDisplay)
        {
            alert('Not enough balance to withdraw!!!');
        }
        else{
            totalWithdraw= withdrawValue+withdrawDisplay;
            document.getElementById("withdraw-amount").innerText = totalWithdraw;
            
            withdraw.value='';

            //update balance
            
            var updatedBalance = balanceDisplay-withdrawValue;
            document.getElementById("balance-amount").innerText = updatedBalance;

            disableButton = updatedBalance;

            if(disableButton == 0)
            {
                document.getElementById("withdraw-btn").disabled = true;
                document.getElementById("withdraw-btn").style.background='gray';
            }
        }
    }
    else{
        alert("Input a positive withdraw value.");
        withdraw.value='';
    }
})