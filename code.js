function playCraps() {
    console.log("playCraps() function started");
    var die1 = Math.ceil(Math.random() * 6); //Generates a random decimal number between 0 and 1 excluding 1, multiplies the result by 6, then rounds it to the ceiling.
    var die2 = Math.ceil(Math.random() * 6);
    var sum = die1 + die2; //Now we add both dice to get a sum.
    document.getElementById("die1Res").innerHTML = "Die 1 = " + die1; //Adds the first die to this string.
    document.getElementById("die2Res").innerHTML = "Die 2 = " + die2; //Adds the second die to this string.
    document.getElementById("sumRes").innerHTML = "Die 2 = " + sum; //Adds the sum to this string.
    if (sum == 7 || sum == 11) { //Either the sum of the 2 dice must be 7 or 11 to lose.
        loss++;
        document.getElementById("lossRes").innerHTML = loss;
        document.getElementById("finalRes").innerHTML = "CRAPS - you lose!";
    }
    else if (die1 == die2 && die1 % 2 == 0) { //If the 2 dice are even numbers and are exactly the same, then we won.
        wins++;
        document.getElementById("winsRes").innerHTML = wins;
        document.getElementById("finalRes").innerHTML = "DOUBLES - you win!";
    }
    else //Neither conditions are met, draw.
    {
        tie++;
        document.getElementById("tieRes").innerHTML = tie;
        document.getElementById("finalRes").innerHTML =
            "Draw - You neither won nor lost. Please try again."; //Despite having a second line, theres no error, plus theres a terminator to fully end the line.
    }
}

function blastOff() {
    var curTime = 50;
    document.getElementById("countdownTimer").innerHTML = curTime;
    setTimeout(function () {
        curTime -= 5;
        document.getElementById("countdownTimer").innerHTML = curTime;
    }, 5000);
    setTimeout(function () {
        curTime -= 5;
        document.getElementById("countdownTimer").innerHTML = curTime;
    }, 10000);
    setTimeout(function () {
        curTime -= 5;
        document.getElementById("countdownTimer").innerHTML = curTime;
    }, 15000);
    setTimeout(function () {
        curTime -= 5;
        document.getElementById("countdownTimer").innerHTML = curTime;
    }, 20000);
    setTimeout(function () {
        curTime -= 5;
        document.getElementById("countdownTimer").innerHTML = curTime;
    }, 25000);
    setTimeout(function () {
        curTime -= 5;
        document.getElementById("countdownTimer").innerHTML = curTime;
    }, 30000);
    setTimeout(function () {
        curTime -= 5;
        document.getElementById("countdownTimer").innerHTML = curTime;
    }, 35000);
    setTimeout(function () {
        curTime -= 5;
        document.getElementById("countdownTimer").innerHTML = curTime;
    }, 40000);
    setTimeout(function () {
        curTime -= 5;
        document.getElementById("countdownTimer").innerHTML = curTime;
    }, 45000);
    setTimeout(function () {
        curTime -= 5;
        document.getElementById("countdownTimer").innerHTML = "Blast off";
    }, 50000);
}

function btrBlastOff()
{
    console.log("btrBlastOff() started.");
    var currTime = 50;
    for (var i = 0; i < 11; i++)
    {
        setTimeout(function() {
            if (currTime >= 25)
            {
                document.getElementById("countdownTimer").innerHTML = currTime;
            }
            else if (currTime == 0)
            {
                document.getElementById("countdownTimer").innerHTML = "Blast off!";
            }
            else
            {
                document.getElementById("countdownTimer").innerHTML = 
                "WARNING: Less than ½ way to launch, time left = " + currTime;
            }
            currTime-=5;
        }, i * 5000);
    }
}

function start()
{
    console.log("start() function started");
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}

function fStop()
{
    console.log("fStop() function started");
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}

function playStation()
{
    console.log("playStation() started");
    mySound = new sound("us-lab-background.mp3");
    mySound.play();
}

function sound(srcFile)
{
    this.sound = document.createElement("audio");
    this.sound.src = srcFile;
    //this.sound.setAttribute("preload", "audio");
    //this.sound.setAttribute("controls", "none");
    //this.sound.style.display = "none";
    //document.body.appendChild(this.sound);
    this.play = function()
    {
        this.sound.play();
    }
    this.stop = function()
    {
        this.sound.stop();
    }
}