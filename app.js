
   // Create Dino Constructor

    dinosaur  = [];
    function dinosaur(species, weight, height, diet, where, when, fact){
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.where = where;
        this.when = when;
        this.fact = fact;
    }

// Create Dino Objects
   let buttonClick = document.getElementById('btn');

   buttonClick.onclick = function(){
        let dinos= [];
        const getDinoData = async () => {
        const fetchedData = await fetch("./dino.json");
        const data = await fetchedData.json();
        //console.log(data);
 //       console.log("hello");
        return data;
      };

      
 // Create Human Object
 function Human(name,feet,inches,weight,diet){
  this.name = name;
  this.height = (12 * feet)  + inches;  
  this.weight = weight;
  this.diet = diet;
 }

 let human  = (function () {
 let nameInput = document.getElementById("name").value;
 let feetInput = document.getElementById("feet").value;
 let inchesInput = document.getElementById("inches").value;
 let weightInput =  document.getElementById("weight").value;
 let dietSelect = document.getElementById("diet").value; 
 return new Human(nameInput,feetInput,inchesInput,weightInput,dietSelect);
})();

const createDinos = async () => {
dinos = await getDinoData(); // will return dino array


// return dinos;
let dinosaur = []; 

let dinosaurObject = {species: "", diet: "", weight: "", height:""};

let diet = document.getElementById('diet').value;

let count = 0;

dinos.Dinos.forEach(dino => {
  if (diet.toLowerCase() == dino.diet){
    dinosaurObject.species = dino.species;
    dinosaur[count] = dinosaurObject;
    count++;
  }
  
  console.log(dinosaur);

});


dinosaur.forEach(a => {
console.log("dinosaur object " + a.name);
});


function compareWeight(weight){
  if (human.weight > weight)
     return "Human weight is greater than ";
  else if (human.weight < weight)
     return "Human weight is less than ";
  else 
     return "Human weight is equal to ";
}

function compareHeight(height) {
  if (human.height > height)
     return "Human height is greater than ";
  else if (human.height < height)
     return "Human height is less than ";
  else 
     return "Human Height is equal";
}

function compareDiet(diet) {
  if (human.diet == diet)
     return "Human diet is same";
  return "Human diet is different";
}


document.getElementById('dino-compare').style.visibility = "hidden"; 


(function () {
    dinos.Dinos.forEach(dino => {
    const grid = document.querySelector("#grid");
    grid.innerHTML += `
    <div class="grid-item">
        <h3> ${dino.species} </h3>
        <img src="./"${changeLowerCase(dino.species)}.png" alt="" />
        <p>facts</p>    
    </div>
  `;
})
})();

function changeLowerCase(word) {
  return word.toLowerCase();
}


}

createDinos();

}


    //  Math.floor(Math.random() * arr.length)
     //console.log(human);
 

    // let dino = new dinosaur(1,2,3,4,5,6,7);
    // console.log(dino);
 

    // Create Dino Constructor


    // Create Dino Objects


    // Create Human Object

    // Use IIFE to get human data from form


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic