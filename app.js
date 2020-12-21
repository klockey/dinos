
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

 
 function Human(nameInput,feetInput,inchesInput,weightInput,dietSelect){
  this.name = nameInput;
  this.feet = feetInput; 
  this.inches = inchesInput;
  this.weightInput = weightInput;
  this.diet = dietSelect;
 }

let human  = (function () {
 let nameInput = document.getElementById('name').value;
 let feetInput = document.getElementById('feet').value;
 let inchesInput = document.getElementById('inches').value;
 let weightInput =  document.getElementById('weight').value;
 let dietSelect = document.getElementById('diet').value; 

return new Human(nameInput,feetInput,inchesInput,weightInput,dietSelect);

})();


const createDinos = async () => {
  dinos = await getDinoData(); // will return dino array
// return dinos;

herbavor = []; 
omnivoir = [];
carnivor = [];

dinos.Dinos.forEach(dino => {
//   console.log(dino.species);
if (dino.diet == 'herbavor'){
    herbavor.push(dino);
}else if(dino.diet == 'omnivor'){
    omnivor.push(dino);
}else if(dino.diet == 'carnivor'){
    carnivor.push(dino);
}
});


console.log(herbavor);
}

//Math.floor(Math.random() * arr.length)


createDinos();

//console.log(human);

// document.getElementById('dino-compare').style.visibility = "hidden"; 

}

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