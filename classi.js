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
