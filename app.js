
   // Create Dino Constructor

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
     
      const createDinos = async () => {
         dinos = await getDinoData(); // will return dino array
       // return dinos;

       dinos.Dinos.forEach(dino => {
        console.log(dino.species);
      });

      }

    createDinos();

 // Create Human Object

 function Human(nameInput,feetInput,inchesInput,weightInput,dietSelect){
  this.name = nameInput;
  this.feet = feetInput; 
  this.inches = inchesInput;
  this.weightInput = weightInput;
  this.diet = dietSelect;
 }

 let nameInput = document.getElementById('name');
 let feetInput = document.getElementById('feet');
 let inchesInput = document.getElementById('inches');
 let weightInput =  document.getElementById('weight');
 let dietSelect = document.getElementById('diet'); 

let human = new Human(nameInput,feetInput,inchesInput,weightInput,dietSelect);

document.getElementById('dino-compare').style.visibility = "hidden"; 

    }

   

    


    let dino = new dinosaur(1,2,3,4,5,6,7);
    console.log(dino);
 
 
 

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