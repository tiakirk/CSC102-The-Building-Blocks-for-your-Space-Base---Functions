//wk1-2 countdown timer should ran 10....1 then blastoff
function startCountdown() {
    var count = 10;

    document.getElementById("countdownTimer").innerHTML = count;
    count = count - 1;

    setTimeout(function () {
        //after 1 sec, will run code in here
        //the countdowntimer should display 10
        document.getElementById("countdownTimer").innerHTML = count;
        //decrese the count by 1
        count = count - 1;
    }, 1000); //set the time as 1 sec
    //the countdown should display 10
    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 2000); //set the time as 2 sec
    //the countdown should display 9
    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 3000); //set the time as 3 sec
    //the countdown should display 8
    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 4000); //set the time as 4 sec
    //the countdown should display 7
    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 5000); //set the time as 5 sec
    //the countdown should display 6

    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 6000); //set the time as 6 sec
    //the countdown should display 5
    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 7000); //set the time as 7 sec
    //the countdown should display 4
    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 8000); //set the time as 8 sec
    //the countdown should display 3
    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 9000); //set the time as 9 sec
    //the countdown should display 2
    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 10000); //set the time as 10 sec
    //the countdown should display 1

    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = "Blastoff!!!";
    }, 10000);
}
//the final were it shows Blastoff!!!

//function to play claps
function playCraps() {
    console.log("playCraps has started");
    var die1;
    die1 = Math.ceil(Math.random() * 6);
    //Will give you a number between 1-6
    document.getElementById("die1Results").innerHTML = "The value of die1 is: "+ die1;
    var die2;
    die2 = Math.ceil(Math.random() * 20);
    // Will give you a number between 1-20
    
    document.getElementById("die2Results").innerHTML = "The value of die2 is: "+ die2;
    var dieSum = die1 + die2;
    //
    document.getElementById("sumResults").innerHTML = "The sum of plus die1 plus die2 is: "+ dieSum;
    if (dieSum == 7 ||  dieSum == 11) { 
    // The The sum of plus die1 plus die2 is: "+ dieSum;
    
    document.getElementById("crapsResults").innerHTML = "Craps! You Lose!!!";
    //die1 == die2 is a test for doubles, die2 % 2 ==0 is a test for evens
    } else if (die1 == die2 && die2 % 2 ==0) {
    document.getElementById("crapsResult").innerHTML = "Hurray!! Doubles! You Win!!";
// If you hit doubles you will win
} else {
    document.getElementById("crapsResult").innerHTML = "Please try again.";
}//You have to try again

}