document.addEventListener('DOMContentLoaded', function() {
    // Wait for the DOM to be fully loaded before attaching event listeners

    // Get references to the buttons
    var rockButton = document.getElementById('main-div-rock-button');
    var paperButton = document.getElementById('main-div-paper-button');
    var scissorButton = document.getElementById('main-div-scissor-button');

    function gameEval(clientChoice) {

        var cpuChoice
        var num = Math.floor(Math.random() * 3)
        var text

        if (num === 0) { //Cpu choose Rock
            
            if (clientChoice === "Rock") {
                text = "Cpu choose rock, the game is a tie"
            } else if (clientChoice === "Paper"){
                text = "Cpu choose rock, you win!"
            } else {
                text = "Cpu choose rock, you lose"
            }

        } else if (num === 1) { //Cpu choose paper

            if (clientChoice === "Rock") {
                text = "Cpu choose paper, you lose"
            } else if (clientChoice === "Paper"){
                text = "Cpu choose paper, it's a tie"
            } else {
                text = "Cpu choose paper, you win!"
            }
            
        } else { //Cpu choose scissor

            if (clientChoice === "Rock") {
                text = "Cpu choose scissor, you win!"
            } else if (clientChoice === "Paper"){
                text = "Cpu choose scissor, you lose"
            } else {
                text = "Cpu choose scissor, it's a tie"
            }
            
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
