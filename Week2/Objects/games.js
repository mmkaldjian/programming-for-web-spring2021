const games = window.prompt("I have four games in my collection. Pick a number between 1 and 4, and I'll tell you about that game!");

const myGames = [
    { game: "Cribbage", numberOfPlayers: 2, format: "a board, cards and pegs", description: "is a card game that involves playing and grouping cards in combinations which gain points." },
    { game: "Parcheesi", numberOfPlayers: 4, format: "a board", description: "is a board game in which players move their three or four pieces around the board, attempting to get all of their pieces home before any other player." },
    { game: "Monopoly Deal", numberOfPlayers: 3, format: "cards", description: "is the shortened card version of the classic Monopoly game, in which players collect sets of properties with different colors." },
    { game: "Twister", numberOfPlayers: 5, format: "a floor mat", description: "is a game of physical skill in which players maneuver their limbs on colored dots on a large plastic mat on the floor." },
];


console.log("You selected " + myGames[games - 1].game + ", which is a " + myGames[games - 1].numberOfPlayers + " player game" + " and is played using " + myGames[games - 1].format + ". It " + myGames[games - 1].description);