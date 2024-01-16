document.addEventListener('DOMContentLoaded', function() {
    // Wait for the DOM to be fully loaded before attaching event listeners

    // Get references to the buttons
    var clientScore = 0
    var rockButton = document.getElementById('main-div-rock-button');
    var paperButton = document.getElementById('main-div-paper-button');
    var scissorButton = document.getElementById('main-div-scissor-button');

    function gameEval(clientChoice) {

        var clientStatus //1 = won, 2 = tie, 3 = lost
        var cpuChoice
        var num = Math.floor(Math.random() * 3)
        var text

        if (num === 0) { //Cpu choose Rock
            
            if (clientChoice === "Rock") {
                text = "Cpu choose rock, the game is a tie"
                clientStatus = 2
            } else if (clientChoice === "Paper"){
                text = "Cpu choose rock, you win!"
                clientStatus = 1
            } else {
                text = "Cpu choose rock, you lose"
                clientStatus = 3
            }

        } else if (num === 1) { //Cpu choose paper

            if (clientChoice === "Rock") {
                text = "Cpu choose paper, you lose"
                clientStatus = 3
            } else if (clientChoice === "Paper"){
                text = "Cpu choose paper, it's a tie"
                clientStatus = 2
            } else {
                text = "Cpu choose paper, you win!"
                clientStatus = 1
            }
            
        } else { //Cpu choose scissor

            if (clientChoice === "Rock") {
                text = "Cpu choose scissor, you win!"
                clientStatus = 1
            } else if (clientChoice === "Paper"){
                text = "Cpu choose scissor, you lose"
                clientStatus = 3
            } else {
                text = "Cpu choose scissor, it's a tie"
                clientStatus = 2
            }
            
        }

        if (clientStatus === 1) {
            clientScore += 1
            document.getElementById("main-div-cputab-text").style.color = "Green"
            document.getElementById("main-div-clienttab-text").innerHTML = "Your score " + clientScore
        } else if (clientStatus === 2) {
            document.getElementById("main-div-cputab-text").style.color = "#EC8B49"
        } else {
            clientScore -= 1
            document.getElementById("main-div-cputab-text").style.color = "Red"
            document.getElementById("main-div-clienttab-text").innerHTML = "Your score " + clientScore
        }

        return text
    }

    // Add click event listeners
    rockButton.addEventListener('click', function() {

        // Handle click for the Rock button
        console.log('Rock button clicked!');

        document.getElementById("main-div-cputab-text").innerHTML = gameEval("Rock")
        
    });

    paperButton.addEventListener('click', function() {

        // Handle click for the Paper button
        console.log('Paper button clicked!');
        document.getElementById("main-div-cputab-text").innerHTML = gameEval("Paper")

    });

    scissorButton.addEventListener('click', function() {

        // Handle click for the Scissor button
        console.log('Scissor button clicked!');
        document.getElementById("main-div-cputab-text").innerHTML = gameEval("Scissor")

    });


    /* extra code for reference

        document.getElementById("main-div-cputab-text").innerHTML = "Pressed rock button";

    */

});
