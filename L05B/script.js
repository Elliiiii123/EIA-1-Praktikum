console.log("Hello World");

let myArray = ["A new technology allows you to travel to Space. Do you want to travel to _Saturn_ or a newly discovered _Star_? ",
               "The planet is lost and you feel lonely. Do you want to go _home_ or _stay_?",
               "The Star is beautiful and you meet a lot of friendly aliens, but you miss home. Do you want to go back to _earth_ or stay with the _aliens_?",
               "You go home and forget about your taumatizing expirience alone in space.",
                "You stay and find inner peace in the tranquility of the universe.",
                "You become friends with the aliens and live a happy life on the Star. Unfortunally its a short life because the air on the Star is poisonous to humans.",
                "You go home and tell everyone about your discovery. A few people think you´re crazy but everytime you look to the stars you are remindet of a beautiful memory.",
            ]              

let Spacemission = prompt(myArray[0]);



if (Spacemission == "Saturn") {
    console.log("bla");
    Spacemission = PromptAn(myArray[1]);
} if (Spacemission == "Star") {
    Spacemission = prompt(myArray[2]);
}


if (Spacemission == "home") {
    Spacemission=prompt(myArray[3]);
    console.log("SaturnGoHome");
} else if (Spacemission == "stay") {
    Spacemission=prompt(myArray[4]);
    console.log("SaturnStay")
}

if (Spacemission == "aliens"){
    Spacemission=prompt(myArray[5]);
} else if (Spacemission == "earth"){
    Spacemission=prompt (myArray[6]);
}

function rocketSpeed(distance,time) {
let speed=distance/time;
return speed
}


console.log("Rocket Speed:" +
rocketSpeed (1.2000000000, 5110.006) + "kmh"
)

function PromptAn (story){
    return prompt(story)
}