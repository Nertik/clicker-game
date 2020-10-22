let points = 0;
let pointsPerClick = 1;

function keyPressHandler(event) {
  if (event.code === "Space");
  increasePoints();
}
function increasePoints() {
  console.log("нажат пробел");
  //points = points + pointsPerClick;
  points += pointsPerClick;
  console.log(points);
  //let element = document.getElementById("points");
  //console.log(element);
  //element.innerText = points;
  document.getElementById("points").innerText = points;
}

document.addEventListener("keypress", keyPressHandler);

setInterval(increasePoints, 1000);

/*let user = {};

user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
console.log(user); */
