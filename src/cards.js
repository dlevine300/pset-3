const ReadlineSync = require("readline-sync");
const PLAYING_CARD = ReadlineSync.question("\nEnter a playing card: ");

let Card = PLAYING_CARD.toLowerCase();
let Rank = Card.charAt(0);
let Suit = Card.charAt(1);

let RankString = null;
let SuitString = null;
let SkipFinalStep = false;


if (Card.length == 2) {
    switch (Rank) {
        case "2":
            RankString = "Two";
            break;
        case "3":
            RankString = "Three";
            break;
        case "4":
            RankString = "Four";
            break;
        case "5":
            RankString = "Five";
            break;
        case "6":
            RankString = "Six";
            break;
        case "7":
            RankString = "Seven";
            break;
        case "8":
            RankString = "Eight";
            break;
        case "9":
            RankString = "Nine";
            break;
        case "t":
            RankString = "Ten";
            break;
        case "j":
            RankString = "Jack";
            break;
        case "q":
            RankString = "Queen";
            break;
        case "k":
            RankString = "King";
            break;
        case "a":
            RankString = "Ace";
            break;
        default:
            SkipFinalStep = true;
            break;
    }

    switch (Suit) {
        case "c":
            SuitString = "Clubs";
            break;
        case "d":
            SuitString = "Diamonds";
            break;
        case "h":
            SuitString = "Hearts";
            break;
        case "s":
            SuitString = "Spades";
            break;
        default:
            SkipFinalStep = true;
            break;
    }

    if (SkipFinalStep == false) {
        console.log("\n" + RankString + " of " + SuitString + ".");
    }
    else {
        console.log("\nInvalid.");
        console.log("test");
    }
}
else {
    console.log("\nInvalid.")
}
