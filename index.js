const dob = document.querySelector("#dob");
const luckyNo = document.querySelector("#luckyNo");
const check = document.querySelector("#check");
const display = document.querySelector("#msg");
function getSumOfDob(dob){
    dob = dob.replaceAll("-","");
     let sum = 0;
     for(let i=0;i<dob.length;i++){
        sum = sum + Number(dob.charAt(i));

     }
     return sum;
}
function getAns(){

    let birth = dob.value;
    let numb = luckyNo.value;
    const a = getSumOfDob(birth);
    if(birth.length == 0 || numb.length == 0){
        display.innerText = "Kindly enter a valid value";
    }
    // console.log(birth,numb);
 
    // console.log(a);
    else if(a%numb == 0){
        display.innerText = "Yay It's a Lucky Number 💯"
    }
    else{
        display.innerText = "It won't define our luck 💯.You can try next time";
    }

}
check.addEventListener('click',getAns);
