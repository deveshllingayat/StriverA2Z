/* Programming languages have some conditional / decision-making statements that execute when some specific condition is fulfilled.

Switch-case is one of the ways to implement them.

In a menu-driven program, the user is given a set of choices of things to do (the menu) and then is asked to select a menu item.

There are 2 choices in the menu:
Choice 1 is to find the area of a circle having radius 'r'.
Choice 2 is to find the area of a rectangle having dimensions 'l' and 'b'. */

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const circle = (radius) => {
  radius = Number(radius);
  return Math.PI * radius * radius;
};

const rectangle = (l, b) => {
  l = Number(l);
  b = Number(b);
  return l * b;
};

//  *readline.question is an async function
readline.question(
  "Choose 1. Area of circle, 2. Area of rectangle: ",
  (choice) => {
    choice = Number(choice);

    switch (choice) {
      case 1: {
        readline.question("Enter radius of circle: ", (radius) => {
          console.log(circle(radius));
          readline.close();
        });
        break;
      }
      case 2: {
        readline.question("Enter length: ", (length) => {
          readline.question("Enter breadth: ", (breadth) => {
            let l = Number(length);
            let b = Number(breadth);
            console.log(rectangle(l, b));
            readline.close();
          });
        });
        break;
      }
      default: {
        console.log("Invalid choice");
        readline.close();
        break;
      }
    }
  }
);
