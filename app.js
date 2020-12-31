
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
        return data;
      };

 
let nameInput = document.getElementById("name").value;
let feetInput = document.getElementById("feet").value;
let inchesInput = document.getElementById("inches").value;
let weightInput =  document.getElementById("weight").value;
let dietSelect = document.getElementById("diet").value; 
           

 // Create Human Object
 function Human(name,feet,inches,weight,diet){
  this.species = "Human";
  this.name = name;
  this.height = (12 * feet)  + inches;  
  this.weight = weight;
  this.diet = diet;
 }

 let human = new Human(nameInput,feetInput,inchesInput,weightInput,dietSelect); 

const createDinos = async () => {
dinos = await getDinoData();          // will return dino array


let cnt =0;
let dinosaurs = [];

dinos.Dinos.forEach(dino => {
if (cnt == 4){
  dinosaurs.push(human); 
}
dinosaurs.push(dino);
cnt++;
});


function compareWeight(weight){
  if (human.weight > weight)
     return "Human weight is greater";
  else if (human.weight < weight)
     return "Human weight is less";
  else 
     return "Human weight is equal to ";
}

function compareHeight(height) {
  if (human.height > height)
     return "Human height is greater";
  else if (human.height < height)
     return "Human height is less";
  else 
     return "Human Height is equal";
}

function compareDiet(diet) {
  if (human.diet == diet)
     return "Human diet is same";
  return "Human diet is different";
}

document.getElementById('dino-compare').style.visibility = "hidden"; 

const grid = document.querySelector("#grid");

const getRandomFact = () => {
  const factArray = [
    'where',
    'when',
    'fact',
    'compareHeight',
    'compareDiet',
    'compareWeight',
  ];
  const randomIndex = Math.floor(Math.random() * factArray.length);
  const fact = factArray[randomIndex];
  return fact;
};

//let randomfact =  getRandomFact();
let fact="";

(function () {
    dinosaurs.forEach(dino => {   
      
   // console.log(dino.species);

    let randomfact = getRandomFact();

    if (randomfact == "compareWeight" ){
      fact = compareWeight(dino.weight);
    } else if (randomfact == "compareHeight"){
      fact = compareHeight(dino.height);
    } else if (randomfact == "compareDiet"){
      fact = compareDiet(dino.diet);
    } else {
      fact = dino[randomfact];
    }

    if (dino.species == 'Human'){
      grid.innerHTML += `
      <div class="grid-item">
          <h3> ${dino.species} </h3>
          <img src="images/human.png" alt="" />
          <div> </div> 
          <div> </div>
       </div>`;
    } else if (dino.species == "Pigeon") {
    grid.innerHTML += `
    <div class="grid-item">
        <h3> ${dino.species} </h3>
        <img src="images/${changeLowerCase(dino.species)+'.png'}" alt="" />
        <div  style="text-align:center; width:100%; white-space: nowrap; overflow: hidden;"> ${dino.fact} </div> 
        <div></div>
     </div>`;
    } else {
      grid.innerHTML += `
      <div class="grid-item">
          <h3> ${dino.species} </h3>
          <img src="images/${changeLowerCase(dino.species)+'.png'}" alt="" />
          <div id="fact" style="text-align:center; width:100%; white-space: nowrap; overflow: hidden;">${fact} </div> 
         <!-- <div  style="text-align:center; width:100%; white-space: nowrap; overflow: hidden;"> Weight:  ${dino.weight} </div> -->
       </div>`;
   }
;})
})();


function changeLowerCase(word) {
  return word.toLowerCase();
}

}

createDinos();

}


