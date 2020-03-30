function authenticate() {
    var computerWeapon = randomizeChoice();
    var answer = retrieveAnswer();
   
    if(answer == "rock") {
        // 1-3 = "paper" 3-6 = "rock" 6-10 = "scissors"
        if(computerWeapon < 3) {
            computerAnswer = "paper";
            var state = "lose";
        }

        if(computerWeapon > 6) {
            computerAnswer = "scissors";
            var state = "win";
        }

        else if(computerWeapon > 3) {
            computerAnswer = "rock";
            var state = "tie";
        }
    }
    else if(answer == "scissors") {
        // 1-3 = "paper" 3-6 = "rock" 6-10 = "scissors"
        if(computerWeapon < 3) {
            computerAnswer = "paper";
            var state = "win";
        }

        if(computerWeapon > 6) {
            computerAnswer = "scissors";
            var state = "tie";
        }

        else if(computerWeapon > 3) {
            computerAnswer = "rock";
            var state = "lose";
        }
    }
    else if(answer == "paper") {
        // 1-3 = "paper" 3-6 = "rock" 6-10 = "scissors"
        if(computerWeapon < 3) {
            computerAnswer = "paper";
            var state = "tie";
        }

        if(computerWeapon > 6) {
            computerAnswer = "scissors";
            var state = "lose";
        }

        else if(computerWeapon > 3) {
            computerAnswer = "rock";
            var state = "win";
        }
    }
    if (state == undefined) {
        alertDanger();
    }
    else {
        var outcome = "The computer chose: " + computerAnswer + ", you " + state + ".";
        writeResults(outcome);
    }
}