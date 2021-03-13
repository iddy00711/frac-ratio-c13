
const outputNumArr = [];
const inputNumArr = [];
const sampleArr = [];

function submitData(){
    
    const input = document.getElementById('num-input');
    console.log(calculateC13Fract(input.value) + ' here')
};

function calculateC13Fract(c13FractRatio){

    const c13_C12_V_Pdb_Standard = 0.0112372;

    console.log((c13FractRatio - c13_C12_V_Pdb_Standard)/c13_C12_V_Pdb_Standard)

    return Number.parseFloat(((c13FractRatio - c13_C12_V_Pdb_Standard)/c13_C12_V_Pdb_Standard)*1000).toPrecision(8);
};
function createTable(){

    const createTable = document.getElementById('create-table-container')

    createTable.style.opacity = '0';

    setTimeout(()=>{
        createTable.remove()
    }, 501)

    const inputNum = document.getElementById('table-input');
   

    const tableArr = [...Array(Number(inputNum.value)+1).keys()]

    tableArr.map((_, index)=>{
        const li = document.createElement('li');
        if(index===0){
            li.innerHTML = 'Number %'
        }
        else{

            const numInput = document.createElement('input')
            numInput.type = 'number';
            numInput.value = '0.0112372';
            numInput.step = '0.0000001'
            
            numInput.className = 'number';
            li.appendChild(numInput);
        }
        document.getElementById('number-list').appendChild(li);
    });
  

    
    

     tableArr.map((_, index)=>{
        const li = document.createElement('li');
        if(index===0){
            li.innerHTML = 'Sample'
        }
        else{

            const textInput = document.createElement('input');
            textInput.type = 'text';
            textInput.value = '';
            textInput.className = 'sample';
            li.appendChild(textInput);
        }
        document.getElementById('table-list').appendChild(li);
     });

     const button = document.createElement('button');
     button.innerText = 'calculate';
     button.id = 'cal-button'
     button.onclick = calculateTable;
     document.getElementById('table-container').appendChild(button)

    
};


function calculateTable(){
  
    const number = document.getElementsByClassName('number');
    

    for(let i=0; i<number.length; i++){
        
        inputNumArr.push(Number(number[i].value));
       outputNumArr.push(calculateC13Fract(Number(number[i].value)));
       number[i].value = calculateC13Fract(Number(number[i].value));
    };

    console.log(inputNumArr)


    // inputNumArr.map((_, index)=>{

    //             const li = document.createElement('li');
    //             if(index===0){
    //                 li.innerHTML = 'Output'
    //             }
    //             else{
            
    //                 const sample = document.createElement('li');
                    
    //                 sample.value = inputNumArr[index];
    //                 sample.className = 'number';

    //                 li.appendChild(sample);
    //             }
    //             document.getElementById('number-list-2').appendChild(li);
    //          });

    

    

    
};

// function createOutputTable(){

//     console.log(sampleArr)

//     inputNumArr.map((_, index)=>{
//         const div = document.createElement('li');
//         if(index===0){
//             li.innerHTML = 'Output'
//         }
//         else{
    
//             const sample = document.createElement('div');
            
//             sample.value = arr[i];
//             sample.className = 'sample';
//             li.appendChild(sample);
//         }
//         document.getElementById('number-list-2').appendChild(li);
//      });
// }

// createOutputTable();


