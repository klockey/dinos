// Create Dino Constructor
/**
 * @param {string} species
 * @param {number} weight
 * @param {number} height
 * @param {string} diet
 * @param {string} where
 * @param {string} when
 * @param {string} fact
 */
function dinosaur(species, weight, height, diet, where, when, fact) {
  this.species = species;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
  this.where = where;
  this.when = when;
  this.fact = fact;
}

// Create Dino Objects by clicking button
const buttonClick = document.getElementById("btn");

/**
 * click the button and get json object from dino.json in an async manner
 */
buttonClick.onclick = function () {
  let dinos = [];
  const getDinoData = async () => {
    const fetchedData = await fetch("./dino.json");
    const data = await fetchedData.json();
    return data;
  };

  // constructor for Human object
  function Human(name, feet, inches, weight, diet) {
    this.species = "Human";
    this.name = name;
    this.height = 12 * feet + inches;
    this.weight = weight;
    this.diet = diet;
  }

  /**
   * IIFE to get form data to create human
   */
  const human = (function () {
    const nameInput = document.getElementById("name").value;
    const feetInput = document.getElementById("feet").value;
    const inchesInput = document.getElementById("inches").value;
    const weightInput = document.getElementById("weight").value;
    const dietSelect = document.getElementById("diet").value;
    return new Human(
      nameInput,
      feetInput,
      inchesInput,
      weightInput,
      dietSelect
    );
  })();

  /**
   *  function to get dino object
   */
  const createDinos = async () => {
    dinos = await getDinoData(); 

    let cnt = 0;
    let dinosaurs = [];

    /**
     * make a new dinosaur array with 8 dinosaur objects and 1 human object making 9 new objects 
     */
    dinos.Dinos.forEach((dino) => {
      if (cnt == 4) {
        dinosaurs.push(human); // 1 human object
      }
      dinosaurs.push(
        new dinosaur(
          dino.species,
          dino.weight,
          dino.height,
          dino.diet,
          dino.where,
          dino.when,
          dino.fact
        )
      ); // 8 dinosaur objects
      cnt++;
    });

    /**
     *
     * @param {number} weight
     */

    function compareWeight(weight) {
      if (human.weight > weight) return "Human weight is greater";
      if (human.weight < weight) return "Human weight is less";
      return "Human weight is equal to ";
    }

    /**
     *
     * @param {number} height
     */
    function compareHeight(height) {
      if (human.height > height) return "Human height is greater";
      if (human.height < height) return "Human height is less";
      return "Human Height is equal";
    }
    /**
     *
     * @param {string} diet
     */

    function compareDiet(diet) {
      if (human.diet == diet) return "Human diet is same";
      return "Human diet is different";
    }

    /**
     * make the form invisible
     */
    document.getElementById("dino-compare").style.display = "none";

    /**
     * get javascript equivalent grid of DOM grid
     */
    const grid = document.querySelector("#grid");

    /**
     * get RandomFact category
     */
    const getRandomFact = () => {
      const factArray = [
        "where",
        "when",
        "fact",
        "compareHeight",
        "compareDiet",
        "compareWeight",
      ];
      const randomIndex = Math.floor(Math.random() * factArray.length);
      const fact = factArray[randomIndex];
      return fact;
    };

    let fact = "";

    /**
     * function determines tiles placement and characteristics
     */
    (function () {
      dinosaurs.forEach((dino) => {
        let randomfact = getRandomFact();

        if (dino.species == "Human") {
          fact = "";
        } else if (dino.species == "Pigeon") {
          fact = dino.fact;
        } else if (randomfact == "compareWeight") {
          fact = compareWeight(dino.weight);
        } else if (randomfact == "compareHeight") {
          fact = compareHeight(dino.height);
        } else if (randomfact == "compareDiet") {
          fact = compareDiet(dino.diet);
        } else {
          fact = dino[randomfact];
        }
        grid.innerHTML += returnGrid(dino.species, fact);
      });
    })();

    /**
     * returns a grid item with species and fact
     * @param {string} species
     * @param {string} fact
     */
    function returnGrid(species, fact) {
      return `
      <div class="grid-item">
          <h3> ${species} </h3>
          <img src="images/${
            changeLowerCase(species) + ".png"
          }" alt="" />       
          <div id="fact" style="text-align:center; width:100%; white-space: nowrap; overflow: hidden;">${fact} </div> 
       </div>`;
    }

    /**
     *
     * @param {string} word
     */
    function changeLowerCase(word) {
      return word.toLowerCase();
    }
  };

  /**
   * call the async function that holds main functions to create tiles
   */
  createDinos();
};
