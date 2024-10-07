import * as helper from "./helper_function.mjs";

// obtain DOM element w/ id of "random"
const poke_pic =  document.getElementById("random_img");
// console.log(poke_pic);

// initialize an array of Pokemon images
const img_array = ['./images/bulbasaur.png', './images/charmander.png', './images/chikorita.png', './images/cyndaquil.png',
  './images/mudkip.png', './images/squirtle.png', './images/torchic.png', './images/totodile.png', './images/treecko.png'];

// declare an array of Pokemon gifs
const gif_array = ['./images/bulbasaur.gif', './images/charmander.gif', './images/chikorita.gif', './images/cyndaquil.gif',
  './images/mudkip.png', './images/squirtle.gif', './images/torchic.gif', './images/totodile.gif', './images/treecko.gif']

  // poke_index will be a random number b/t 0-8 (9 pokemons in array)
let poke_index = Math.floor(Math.random() * img_array.length);

// let poke_chosen = img_array[poke_index];

// using JavaScript built-in String prototype methods to retrieve the pokemon name
// access chosen relative path, get an array split by '/', pop() off & save last element
// now split by '.' and unshift() & save the first element
let poke_name = img_array[poke_index].split("/").pop().split(".").shift();

helper.user_input(poke_pic, poke_index, gif_array, img_array);

//create an "async" function so we can use "await" within
export async function pokeData(){
    // try-catch block for error handling
    try{
        // retrieve input element by ID from document DOM
        let pokemon_name = document.getElementById("pokemon_name").value.toLowerCase();
        
        // utilize HTTP GET method request fetch() function to receive some data
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`);
        // console.log(response);
        
        // if the HTTP request is not "200-299" or if response.ok property yields "false"
        if(!(response.ok)){
            // throw error to be catch
            throw new Error("Could not fetch resource");
        }

        // otherwise parse the data out into .json() format
        let data = await response.json();
        // console.log(data);
        
        // declare pokemon_sprite variable to take in front_default data from Pokemon API
        let pokemon_sprite = data.sprites.front_default;

        // grab DOM element w/ id of "pokemon_sprite"
        let pokemon_img = document.getElementById("pokemon_sprite");

        // switch src relative path to API's 
        pokemon_img.src = pokemon_sprite;

        // change the style from none to block sizing
        pokemon_img.style.display = "block";

        // invoke poke_guess() function 
        helper.poke_guess(poke_pic, pokemon_name);
        
        
    }
    // catch any thrown errors
    catch(error){

      // output any caught errors
      console.error(error);
    }
}

// console.log(pokeData());
// let img_array = []


// helper functions

// function user_input(poke_pic, poke_indx){
//   // BOM prompts user for an input
//   let input = window.prompt(`Please type in "gif" or "image" to proceed`);

//   let tries = 0;
//   // declare variable limit to be the random poke_index number
//   let limit = poke_indx;

//   // continuously prompt user for either an "gif" or "image" if neither were given
//   while(tries < limit){
    
//     // converts input into lowercase & remove any excess whitespaces from front & back
//     input = input.toLowerCase().trim();

//     // if user asks for gif
//     if(input === "gif"){
//       poke_pic.src = gif_array[poke_indx];
//       break;
//     }
//     // if user asks for image
//     else if(input == "image"){
//       poke_pic.src = img_array[poke_indx];
//       break;
//     }
//     // otherwise ... 
//     else{
//       // re-prompts user for wanted input & notify them of attempts left
//       input = prompt(`${limit - tries} attempts left, "gif" or "image" please`);
//       // increment loop by 1 to continue the loop
//       tries++;
//     }
//   }
//   // if user runs out of tries
//   if(tries === limit){
//     alert(`🟥 ERROR 404 🟥`);
//     // close out tab
//     window.close();
//   }
// }

// // function to check if input pokemon is the real deal to the chosen one
// function poke_guess(poke_pic, pokemon){
//   // if the user input matches the shown Pokemon
//   if(pokemon == poke_name){

//     // capitalize Pokemon's name
//     let poke_cap = poke_name[0].toUpperCase() + poke_name.substring(1);

//     // display BOM window.alert() to user
//     window.alert(`Congratulations!! Indeed it's a ${poke_cap}!! 🥳`);

//     // removes any previus filter off of the image
//     poke_pic.style.filter = "none";
//     // poke_pic.classList.remove("blur");
    
//   }

// }



