window.onload = function() {
    // Lyssna efter händelser
    let team = document.getElementsByClassName('team-member');
    for (let i=0; i < team.length; i++) {
        team[i].children[0].addEventListener("click", editTitle);

        for (let j=0; j < team[i].children.length; j++){
            let memberElem = team[i].children[j];
            memberElem.addEventListener("mouseover", effectOn);
            team[i].addEventListener("mouseout", effectOff);
        }
    
    }
    //console.log(team[0].children);
    
    //team[0].children[0].addEventListener("mouseover", effectOn);
    //team[0].children[0].addEventListener("mouseout", effectOff);
}
var editTitle = function(e) {
    // Ändra "team-title"
//console.log("triggered");

//console.log(e.target); // e.target == this
//1. prompt for new title
//2. update child using innerHTML
let newTitle = window.prompt("Vad är den nya titeln?");
this.parentElement.lastElementChild.innerHTML = newTitle;



};

function effectOn(id){
    // Rita en ram runt personen, kanske lite drop shadow?
    console.log("MouseOver");
    console.log(id);
    id.target.parentElement.classList.add("hovering");
}

function effectOff(id){
    // Stäng av effekten när musen inte längre är ovanför personen
    console.log("MouseOut");
    id.target.parentElement.classList.remove("hovering");
}
