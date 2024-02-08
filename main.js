const sange = ["Vancouver", "Colder Than Ice", "Firewalker", "Fuzzy", "Rocket Man", "Teleharmonic", "Everything Is Connected", "Don't Give Up The Ghost", "Life On Mars", "Tambourine Man"];

const liste = document.querySelector("ul");

sange.forEach(lavPlayList);

function lavPlayList(sang) {
  liste.innerHTML += "<li>" + sang + "</li>";
}
