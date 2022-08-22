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
    const fivePlayerSalary = Salary * playerNumber;
    
    const fild = document.getElementById('totalsalary');
    const priviousSalaryAmount = getTheVakueOFPrevious('totalsalary');

    const currentTotalSalaryAmount = priviousSalaryAmount + fivePlayerSalary;
    fild.innerText = currentTotalSalaryAmount;

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