console.log("Hello World");

let Spacemission = prompt("A new technology allows you to travel to Space. Do you want to travel to _Saturn_ or a newly discovered _Star_? ");

if (Spacemission == "Saturn") {
    console.log("bla");
    Spacemission = prompt("The planet is lost and you feel lonely. Do you want to go _home_ or _stay_?");
} if (Spacemission == "Star") {
    Spacemission = prompt("The Star is beautiful and you meet a lot of friendly aliens, but you miss home. Do you want to go back to _earth_ or stay with the _aliens_?");
}


if (Spacemission == "home") {
    Spacemission=prompt("You go home and forget about your taumatizing expirience alone in space.");
    console.log("SaturnGoHome");
} else if (Spacemission == "stay") {
    Spacemission=prompt("You stay and find inner peace in the tranquility of the universe.");
    console.log("SaturnStay")
}

if (Spacemission == "aliens"){
    Spacemission=prompt("You become friends with the aliens and live a happy life on the Star. Unfortunally its a short life because the air on the Star is poisonous to humans.");
} else if (Spacemission == "earth"){
    Spacemission=prompt ("You go home and tell everyone about your discovery. A few people think you´re crazy but everytime you look to the stars you are remindet of a beautiful memory.");
}

