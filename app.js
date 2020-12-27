
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
let herbavor = []; 
let omnivor = [];
let carnivor = [];
let herbavorObject = {name: "", type: "", weight: "", height:""};
let omnivorObject = {name: "", type: "", weight: "", height:""};
let carnivorObject = {name: "", type: "", weight: "", height:""};



dinos.Dinos.forEach(dino => {
if (dino.diet == "herbavor"){
  herbavorObject.name = dino.name;
  herbavorObject.type = dino.species;
  herbavorObject.weight = compareWeight(dino.weight);
  herbavorObject.height = compareHeight(dino.height);
  herbavor.push(herbavorObject);
}else if(dino.diet == "omnivor"){
  omnivorObject.name = dino.name;
  omnivorObject.type = dino.species;
  omnivorObject.weight = compareWeight(dino.weight);
  omnivorObject.height = compareHeight(dino.height);
  omnivor.push(dino);
}else if(dino.diet == "carnivor"){
  carnivorObject.name = dino.name;
  carnivorObject.type = dino.species;
  carnivorObject.weight = compareWeight(dino.weight);
  carnivorObject.height = compareHeight(dino.height);
  carnivor.push(dino);
}
});

console.log(carnivorObject);


function compareWeight(weight){
 // console.log(weight);
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

document.getElementById('dino-compare').style.visibility = "hidden"; 

//console.log(dinos.Dinos);

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

console.log(herbavor);
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