function HeadTailGame() {
const target = +prompt("Enter how many target you want.");
const limit = +prompt("Enter your limit. How many runs you'll play on a ball?");

if(isNaN(target) || isNaN(limit)){
    alert("Enter the number, if not, go and do your work.");
}else{
alert("Game Started | You are bating and computer is balling.");

let totalScore = 0;

while (totalScore < target) {
    const userNumber = +prompt("Enter your Number");

    const randomNumber = Math.random();
    const computerNumber = Math.ceil(randomNumber * limit);

    const isWicket = userNumber === computerNumber;
    if (isWicket) {
        alert("Computer number is : " + computerNumber);
        alert("Ohho, Out by Computer (Dumb Machine) 😞");
        break;
    } else {
        if (userNumber > limit){
            alert("You have crossed your limit! 😑");
            break;
        }else{
        totalScore += userNumber;
        if (totalScore >= target) {
            alert("Computer number is : " + computerNumber);
            alert("Hurrrayy! You won 🎉🥳🎊");
        } else {
            alert("Computer number is : " + computerNumber);
            alert("Your total is: " + totalScore);
        }
        }
    }
}
}
}

HeadTailGame();