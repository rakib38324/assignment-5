const nameArray = [];

function display(Name){

    const table = getElement('playerName');

    table.innerHTML = '';
    for(let i=0; i< Name.length; i++){
        
        const Name= nameArray[i].PlayerName;
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <tr>
            <th>${i+1}</th>
            <th>${Name}</th>
         </tr>
        `;

        if(i<5){
            table.appendChild(tr);
            
        }

        else{
            alert("You Cannot Select more than five.");
             
        }

       

        
    }
}




function addToBox(element){
    const PlayerName = element.parentNode.children[0].innerText;
   
    const nameObj ={
        PlayerName: PlayerName
    }
    
    nameArray.push(nameObj);

    display(nameArray);
    
    
    
}
