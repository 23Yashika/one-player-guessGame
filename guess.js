
let random = Math.floor(Math.random() * 20);

function check() {
  let ug = document.getElementById("gn").value;
  let dis = document.getElementById("d");

  ug = Number(ug);
  if (ug < 1 || ug > 20) {
    dis.innerHTML = "Enter no. between 1 to 20";
  } else if (ug < random) {
    dis.innerHTML = "Too low! Try again";
  } else if (ug > random) {
    dis.innerHTML = "Too high! Try again";
  } else {
    dis.innerHTML = "Correct! You guessed the number! Winner";
  }
}
