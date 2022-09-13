const dob = document.querySelector("#dob");
const luckyNo = document.querySelector("#luckyNo");
const check = document.querySelector("#check");
const display = document.querySelector("#msg");
const notice = document.querySelector("#notice");

function getSumOfDob(dob){
    dob = dob.replaceAll("-","");
     let sum = 0;
     for(let i=0;i<dob.length;i++){
        sum = sum + Number(dob.charAt(i));

     }
     return sum;
}
function displaymsg(msg,flag){
    if(flag == 0){
        display.innerText = msg;
        display.style.color = 'red';
    }
    else{
        display.innerText = msg;
        display.style.color = 'black';
    }
    
}
function getAns(){

    let birth = dob.value;
    let numb = luckyNo.value;
    const a = getSumOfDob(birth);
    if(birth.length == 0  && numb.length == 0 ){
        displaymsg("Birthday and lucky number values are blank,its is not valid",0);
    }
        else if(birth.length == 0 ){
        displaymsg("Birthday  value is balnk , it is not valid",0);
    }

        else if( numb.length == 0){
        displaymsg("Number value is blank, it is not valid ",0);
    }
    // console.log(birth,numb);
 
    // console.log(a);
    else if(a%numb == 0){
        displaymsg("Yay It's a Lucky Number 💯",1);
      
        }
    else{
        displaymsg("Your number is not lucky.It won't define our luck 💯.You can try next time",1);
        
    }

};

