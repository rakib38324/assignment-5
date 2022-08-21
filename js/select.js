function Get_The_Access(element){
    const getElementFild = document.getElementById(element);
    return getElementFild;
}


document.getElementById('all-players-card-id').addEventListener('click',function(){
    const selectPlayerFile = Get_The_Access('select-card');
    const createArray = document.createElement('ul')

    const playerTitle =document.getElementsByClassName('card-title')


    createArray.innerText = playerTitle;

})