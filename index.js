function deposit() {

let amount = document.querySelector("#cash").value;
let accountNum = document.querySelector("#num").value;
let accountName = document.querySelector("#nam").value;

alert("Deposit added Successfully");
alert("Balance: " + amount + " " + "AccountNumber: " + accountNum +" "+ "AccountName: "+ accountName ); 
}
document.querySelector(".btn1").addEventListener("click",deposit);


