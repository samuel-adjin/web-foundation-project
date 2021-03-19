
var myarr = [];

function deposit() {

let amount = document.querySelector("#cash").value;
let accountNum = document.querySelector("#num").value;
let accountName = document.querySelector("#nam").value;



 var total = 0;
myarr.push(Number(document.querySelector("#cash").value));
for(i=0; i<myarr.length;i++){
    total =  myarr[i] + total;
}
alert("Deposit added Successfully");
alert("Balance: " + total + " " + "AccountNumber: " + accountNum +" "+ "AccountName: "+ accountName );
}
document.querySelector(".btn1").addEventListener("click",deposit);



