"use strict";
let form=document.querySelector('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    let height=parseInt(document.querySelector('#Height').value);
    // console.log(height)
    let weight=parseInt(document.querySelector('#Weight').value);
    let result=document.querySelector('#result');
    if(height==='' || height<0 || isNaN(height)){
        result.innerHTML=`Please give a valid height ${ height }`;
    }
    else if(weight==='' || weight<0 || isNaN(weight)){
        result.innerHTML=`Please give a valid weight ${ weight }`;
    }
    else{
      let bmi =  (weight/((height*height)/10000)).toFixed(2);
    //   Show resutl
    // result.innerHTML=`<span>${bmi}</span>`
    if(bmi<=18.6){
        result.innerHTML=`<span>Your are Under Weight ${bmi}</span>`;
    }
    else if (bmi>18.6 && bmi<=24.9) {
     result.innerHTML=`<span>Your are Normal ${bmi}</span>`;

        
    } else {
        
        result.innerHTML=`<span>Your are Over Weight ${bmi}</span>`;
    }
    }
});