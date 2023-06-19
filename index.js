


function calculate(){
    
   
    document.addEventListener("click", function(event){
     event.preventDefault()
     
    }
 
    )
 
     const hori = document.getElementById('hori').value;
     const horiAcross = document.getElementById('horiAcross').value;
     const vert = document.getElementById('vert').value;
     const moveChar = document.getElementById('moveChar').value;
     
     const firstTrigResult = Math.sqrt((hori*hori) +(vert*vert));
     const remainingMovement = moveChar - (parseFloat(horiAcross)+ firstTrigResult);
     const secondTrigResult = Math.sqrt((remainingMovement*remainingMovement) - (vert*vert));
     
     console.log(moveChar, hori, vert, horiAcross);
     
     console.log(firstTrigResult, remainingMovement, secondTrigResult)
     
     function removeInput(){
 
         const inputContainer = document.getElementById("input-container");
         
         setTimeout(()=>{
             inputContainer.style.opacity = "0";
             inputContainer.remove()
         }, 501);
     }
 
     document.addEventListener("click", removeInput()); 
 
     // const results = document.getElementById("results");
     const resultsText = document.getElementById("resultsText");
     resultsText.innerText =`distance from terrain ${secondTrigResult.toPrecision(3)}`;
     resultsText.style.opacity = '1';
     console.log(resultsText.value)
 
 
     
 
 }
 
 
 
 
 