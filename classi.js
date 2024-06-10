// creo la classe User
class User {
  constructor(name, lastName, age, location) {
    this.firstName = name;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  isOlderUser(compareAge) {
    if (this.age > compareAge.age) {
      return `${this.firstName} è più vecchio di ${compareAge.firstName}`;
    } else {
      return `${this.firstName} è più giovane di ${compareAge.firstName}`; // aggiunto else perché altrimenti mi ritornava undefined
    }
  }
}

const user1 = new User("Aldo", "Baglio", 40, "Palermo");
const user2 = new User("Giacomo", "Poretti", 42, "Milano");
const user3 = new User("Giovanni", "Storti", 45, "Genova");

//console.log(user1);
//console.log(user2);
//console.log(user3);

console.log(user1.isOlderUser(user2));
console.log(user1.isOlderUser(user3));
console.log(user2.isOlderUser(user1));
console.log(user2.isOlderUser(user3));
console.log(user3.isOlderUser(user1));
console.log(user3.isOlderUser(user2));

// creo la classe Pet
let petForm = [];
const form = document.querySelector("form");

class Pet {
  constructor(pet, owner, specie, razza) {
    this.petName = pet;
    this.ownerName = owner;
    this.species = specie;
    this.breed = razza;
  }
  isSameOwner(compareOwner) {
    if (this.ownerName === compareOwner.ownerName) {
      return `${this.petName} e ${compareOwner.petName} hanno lo stesso padrone: ${this.ownerName}`;
    }
  }
}
form.onsubmit = function (event) {
  event.preventDefault();
  console.log("submit");
  const nomeAnimale = document.getElementById("namePet").value;
  const nomeProp = document.getElementById("ownerPet").value;
  const specie = document.getElementById("specie").value;
  const razza = document.getElementById("razza").value;
  const animal = new Pet(`${nomeAnimale}, ${nomeProp}, ${specie}, ${razza}`);
  petForm.push(animal);
  console.log(petForm);
  //console.log(animal.ownerName.isSameOwner(compareOwner.ownerName));
  form.reset();
};
