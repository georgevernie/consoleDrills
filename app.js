let myResume ={
    myName:"Herbert Hoover",
    myField:"Career: Lumberjack / Woodsman",
    whoAmI: "Desciption: Foreman and manager with an excellent attitude.",
    interest0:"* Climbing",
    interest1:"* Grinding Axes",
    interest2:"* Fire Fighting",
    interest3:"* Carpentry",
    interest4:"* Frog Racing",
    interest5:"* Barrel Rolls",
    pastPositions1:"Lumberjack at Logs LLC responsible for making sure they got down river all right.",
    pastPositions2:"Worked as an instore salesman and shelf stocker as kid.",
    pastPositions3:"Worked in newspaper sales before that.",
}
let skill=["Explosives", "Log Jam Clearing","Riding", "Accounting", "Stool Making"];
let bool= false;

let name = myResume.myName.toUpperCase();
displayPosition('Name: ' + name, myResume.myField,myResume.whoAmI);
console.log("\n");
displayPosition('My Interests: ' + '\n\n' + myResume.interest0, myResume.interest1,myResume.interest2);
displayPosition(myResume.interest3, myResume.interest4, myResume.interest5 + '\n\n');
displayPosition('My Previous Experience: \n\n' + myResume.pastPositions1, myResume.pastPositions2, myResume.pastPositions3 +"\n\n");
console.log("My Skills: \n\n")
displaySkill(skill, bool);

function displayPosition(companyName, jobTitle, Description){
    console.log(companyName);
    console.log(jobTitle);
    console.log(Description);
}

function displaySkill(name, bool){
    for(let i= 0; i < skill.length; i++){
        name= skill[i];
        if(name == "Riding" || name == "Stool Making"){
            bool = true;
            console.log("BAM: " + skill[i]);
        }
        else{
            bool = false;
            console.log(skill[i]);
        }
    }
}