function Dalmatian (name) {
  this.name = name;

  this.bark = function() {
    console.log(`${this.name} barks!`);
  };
}

var d = Dalmatian("dog");
console.log(d.bark());



function Dalmatian (name) {
    this.name = name;
  }
  
  Dalmatian.prototype.bark = function() {
    console.log(`${this.name} barks!`);
  };

  var d = Dalmatian("dog");
  d.bark();
  



function Dog(age, weight, name) {
    this.age = age;
    this.weight = weight;
    this.name = name;

    this.bark = function() {
        console.log(`${this.name} barks!`);
      };
  }
  
  Dog.prototype.bark = function () {
      console.log(`${this.name} says woof!`);
  };
  
  dog1 = new Dog(2, 60, 'Java');
  
  dog2 = new Dog(4, 55, 'Jodi');
  
  dog1.bark();
  
  dog2.bark();

  // notes 234567ghg