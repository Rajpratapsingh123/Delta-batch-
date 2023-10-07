let favMovie=("Iron man");
let guess =prompt("Enter movie name");

while(guess != favMovie  && guess != "quit"){
   
    guess= prompt("Wrong Answer : Try again");
}
if(favMovie==guess){
console.log(alert("congrats"));
}