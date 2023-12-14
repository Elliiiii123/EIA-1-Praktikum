

let stories = ["A new technology allows you to travel to Space. Do you want to travel to Saturn or a newly discovered _Star_? ",
               "The planet is lost and you feel lonely. Do you want to go <span>home</span> or <span>stay</span>?",
               "The Star is beautiful and you meet a lot of friendly aliens, but you miss home. Do you want to go back to <span>earth</span> or stay with the <span>aliens</span>?",
               "You go home and forget about your taumatizing expirience alone in space.",
                "You stay and find inner peace in the tranquility of the universe.",
                "You become friends with the aliens and live a happy life on the Star. Unfortunally its a short life because the air on the Star is poisonous to humans.",
                "You go home and tell everyone about your discovery. A few people think you´re crazy but everytime you look to the stars you are remindet of a beautiful memory.",
                "Wrong Input, please reload and type in the blue marked words"
]              


let state = 0;

const input = document.querySelector(".input")
const output = document.getElementById("output");


input.addEventListener("keydown", function (event){
    if(event.key == "Enter" && state == 0) {
        console.log("Test")
        if (input.value == "Saturn") {
        output.innerHTML = stories[1]
        state++
        } else if (input.value == "Star") {
        output.innerHTML = stories[2]
        state++
        }/*else if (input.value !==("Saturn"||"Star")) {
        output.innerHTML = stories [7] das klappt nicht:()
        }*/
        
        input.value = ""
    }
})

input.addEventListener("keydown", function (event){
    if(event.key == "Enter" && state == 1) {
        console.log("Test")
        if (input.value == "home") {
        output.innerHTML = stories[3]
        state ++
        } else if (input.value == "stay") {
        output.innerHTML = stories[4]
        state++
        }
        /*else if(input.value !=("home"||"stay")) {
        output.innerHTML = stories[7]
        }*/
        if (input.value == "earth") {
        output.innerHTML = stories[6]
        state++
        } else if (input.value == "aliens") {
        output.innerHTML = stories[5]
        state++
        }/*else if(input.value != ("earth" || "aliens")) {
        output.innerHTML = stories [7]
        }*/
        input.value = ""
    }
})



input.addEventListener("keydown", function (event){
    if(event.key == "Enter" && state == 2) {
        document.querySelector("div").style.visibility = "hidden"
    }

})
