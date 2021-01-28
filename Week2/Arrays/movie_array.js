const favoriteMovie = window.prompt("what is your favorite movie?");

const movieArray = ["Blindspotting", "Beginners", "Pride and Prejudice", "Sorry to Bother You", "Lady Bird"];

movieArray.push(favoriteMovie);
console.log(movieArray);
console.log(movieArray.toString());