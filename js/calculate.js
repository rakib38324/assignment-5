function getTheValueForUserInput(element){
    const Fild = getElement(element);
    const String = Fild.value;
    Fild.value='';
    const Amount = parseFloat(String)
    return Amount;
}

function getTheVakueOFPrevious(element){
    const fild = getElement(element);
    const string = fild.innerText;
    const previousAmount = parseFloat(string);
    return previousAmount;
}

document.getElementById('CalculateFivePlayerSalary').addEventListener('click',function(){

    
    const Salary = getTheValueForUserInput('SalaryOfPlayer');

    if(isNaN(Salary)){
        alert("Please Enter Amount");
        return ;
    }

    const playerNumber = nameArray.length;
    console.log(playerNumber);
    const fild = document.getElementById('totalsalary');
    const priviousSalaryAmount = getTheVakueOFPrevious('totalsalary');

// I use  this "if else" condition because when i want to select more then 5 players but it is show an 
// alarm, every thing is okey. BUt major problem is when i calculate the salary array give me 6, 
// because i click the select button and it can not display but array lenght give me 6. for this reason  
// i use this condition

    if(playerNumber == 6){
        const fivePlayerSalary = Salary * 5;
        const currentTotalSalaryAmount = priviousSalaryAmount + fivePlayerSalary;
    fild.innerText = currentTotalSalaryAmount;
    }

    else{
    const fivePlayerSalary = Salary * playerNumber;
    const currentTotalSalaryAmount = priviousSalaryAmount + fivePlayerSalary;
    fild.innerText = currentTotalSalaryAmount;
    }
    

    

})

document.getElementById('calculateTotalAmount').addEventListener('click',function(){
   
    
    const managerSalary = getTheValueForUserInput('managerSalary');

    if(isNaN(managerSalary)){
        alert("Please Enter Amount");
        return ;
    }

    const coachSalary = getTheValueForUserInput('coachSalary');

    if(isNaN(coachSalary)){
        alert("Please Enter Amount");
        return ;
    }

    const playerSalary = getTheVakueOFPrevious('totalsalary');
    const totalcost = getTheVakueOFPrevious('totalcost');

    const totalSalayAmount = managerSalary + coachSalary + playerSalary + totalcost;

    const fild = document.getElementById('totalcost');

    fild.innerText = totalSalayAmount;



})