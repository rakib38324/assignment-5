function getTheValueForUserInput(element){
    const Fild = document.getElementById(element);
    const String = Fild.value;
    const Amount = parseFloat(String)
    return Amount;
}

function getTheVakueOFPrevious(element){
    const fild = document.getElementById(element);
    const string = fild.innerText;
    const previousAmount = parseFloat(string);
    return previousAmount;
}

document.getElementById('CalculateFivePlayerSalary').addEventListener('click',function(){

    const Salary = getTheValueForUserInput('SalaryOfPlayer');
    const fivePlayerSalary = Salary * 5;
    
    const fild = document.getElementById('totalsalary');
    const priviousSalaryAmount = getTheVakueOFPrevious('totalsalary');

    const currentTotalSalaryAmount = priviousSalaryAmount + fivePlayerSalary;
    fild.innerText = currentTotalSalaryAmount;

})

document.getElementById('calculateTotalAmount').addEventListener('click',function(){
    const managerSalary = getTheValueForUserInput('managerSalary');
    const coachSalary = getTheValueForUserInput('coachSalary');
    const playerSalary = getTheVakueOFPrevious('totalsalary');
    const totalcost = getTheVakueOFPrevious('totalcost');

    const totalSalayAmount = managerSalary + coachSalary + playerSalary + totalcost;

    const fild = document.getElementById('totalcost');

    fild.innerText = totalSalayAmount;



})