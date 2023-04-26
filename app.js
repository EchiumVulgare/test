const developer = {
  name: "Alex",
  surname: "Prybysh",
  age: 30,
  skills: ["JavaScript", "TypeScrip", "CSS"],
  isMaried: false,
  addAge() {
    this.age++;
    console.log(this);
  },
};

developer.addAge();

// for (let key in developer) {
//   console.log(key, developer[key]);
// }

// const numbers = [1, 2, 3, 4, 5, 6];

// for (let number of numbers) {
//   console.log(number);
// }
