let COLORS = ["GREEN", "RED", "BLUE", "YELLOW", "PURPLE", "ORANGE", "PINK",
    "BROWN", "BLACK", "WHITE", "GREY", "CYAN"];

let ANIMALS = ["CAT", "DOG", "FISH", "BIRD", "LION", "TIGER", "BEAR", "WOLF",
    "ELEPHANT", "GIRAFFE", "ZEBRA", "KANGAROO"];
    
let COUNTRIES = ["FRANCE", "GERMANY", "SPAIN", "ITALY", "CANADA", "USA", "BRAZIL",
    "ARGENTINA", "INDIA", "CHINA", "JAPAN", "AUSTRALIA"];


function randomWord(type=COLORS) {
   switch (type) {
      case "ANIMALS":
        return ANIMALS[Math.floor(Math.random() * ANIMALS.length)];
      case "COUNTRIES":
        return COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)];
      case "COLORS":
        default:
         return COLORS[Math.floor(Math.random() * COLORS.length)];
   }
}

export {randomWord};