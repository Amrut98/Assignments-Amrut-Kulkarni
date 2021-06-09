//Q1
function greetUser(name: string): void{
    console.log(`Hello, ${name}`);
}
greetUser("Amrut");

//Q2
const a = 7;
if( a <= 6)
{
    let c = 4;
    console.log(c);
}
console.log(a);
console.log(c);
          
//Q3
let order = {
    id: 1,
    title: "paper",
    price: 200,
    printOrder() {},
    getPrice() {}
}
let copiedOrder = Object.assign(order);
console.log("Copied Order: ", copiedOrder);
        
//Q5.a
    function add(numOne = 20, numTwo = 39) {
    return numOne + numTwo;
}
//Q5.b
          let userFriends =function( message: string,  ...arrayOfFriend: string[]) {
    console.log(username);
    console.log(message = "List of Friends");
    for ( let x in arrayOfFriend){
        console.log(arrayOfFriend[x])
    }
}

let username = "Amrut";
userFriends( 'amrut', 'mayur');
          
 //Q5.b
   function printCapitalNames(username, ...friends) {
    console.log("Username: ", username);
    console.log("Friends: ", friends);
}
printCapitalNames("john", "frank", "dave", "mike");
          
//Q6.
   let laptopModel = "HP Pavilion";
let deskNo = 193;
let myName = "Amrut Kulkarni";
console.log(`This is to inform you about an issue with my laptop ${laptopModel} the space key is not working.
My name is ${myName}.
Desk Number ${deskNo}`);
          
 //Q7.a
 const z = [1,2,3,4];
const[a,b,c,d] = z;
console.log(c);
          
//Q7.b
let Organization = ["Prakash", "XYZ Infotech Park", "Pin: 400706", "Pune"]
let [fname, ...rest] = Organization;
 
console.log(fname);
console.log(rest[1]);
          
          
//Q8
class Account {
    constructor(id, userName, balance) {
        this._id = id;
        this._userName = userName;
        this._balance = balance;
    }
}
class SavingAccount extends Account {
    constructor(id, userName, balance, interest) {
        super(id, userName, balance);
        this._interest = interest;
    }
    totalBalance() {
        return (this._balance + this._interest);
    }
}
class CurrentAccount extends Account {
    constructor(id, userName, balance, cash_credit) {
        super(id, userName, balance);
        this._cash_credit = cash_credit;
    }
    totalBalance() {
        return (this._balance + this._cash_credit);
    }
}
let savingAccountOne = new SavingAccount("SA1", "john", 20000, 1300);
console.log(savingAccountOne.totalBalance());
var savingAccountTwo = new SavingAccount("SA2", "jules", 2000, 290);
console.log(savingAccountTwo.totalBalance());
var currentAccountOne = new CurrentAccount("CA1", "frank", 15000, 30000);
console.log(currentAccountOne.totalBalance());
var currentAccountTwo = new CurrentAccount("CA2", "dave", 21420, 42000);
console.log(currentAccountTwo.totalBalance());
