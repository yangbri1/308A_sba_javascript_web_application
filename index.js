
let tries = 0;
let limit = 5;
// initialize an array of Pokemon images
const img_array = ['images\bulbasaur.png', 'images\charmander.png', 'images\chikorita.png', 'images\cyndaquil.png',
  'images\mudkip.png', 'images\squirtle.png', 'images\torchic.png', 'images\totodile.png', 'images\treecko.png'];

  // poke_index will be a random number b/t 0-8 (9 pokemons in array)
let poke_index = Math.floor(Math.random() * img_array.length);

while(tries < limit){
  // BOM prompts user for an input
  let input = window.prompt(`Please type in "gif" or "image" to proceed`);
  // converts input into lowercase & remove any excess whitespaces from front & back
  input = input.toLowerCase().trim();
  // if user asks for gif
  if(input === "gif"){

  }
  else if(input == "image"){
    img_array[poke_index]
  }
  tries++;
}
//create an "async" function so we can use "await" within
async function pokeData(){
    // try-catch block for error handling
    try{
        // retrieve input element by ID from document DOM
        let pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        
        // utilize HTTP GET method request fetch() function to receive some data
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        // console.log(response);
        
        // if the HTTP request is not "200-299" or if response.ok property yields "false"
        if(!(response.ok)){
            // throw error to be catch
            throw new Error("Could not fetch resource");
        }

        // otherwise parse the data out into .json() format
        let data = await response.json();
        // console.log(data);
        
        // declare pokemonSprite variable to take in front_default data from Pokemon API
        let pokemonSprite = data.sprites.front_default;

        // grab DOM element w/ id of "pokemonSprite"
        let imgElement = document.getElementById("pokemonSprite");

        // switch src relative path to API's 
        imgElement.src = pokemonSprite;

        // change the style from none to block sizing
        imgElement.style.display = "block";

        // invoke poke_guess() function 
        poke_guess(pokemonName);
        
        
        
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

function poke_guess(pokemon){
  // if the user input matches the shown Pokemon
  if(pokemon == "charmander"){
    // obtain DOM element w/ id of "random"
    let poke_pic =  document.getElementById("random_img");
    // console.log(poke_pic);
    // display BOM window.alert() to user
    window.alert("Congratulations!! 🥳");
    // removes any previus filter off of the image
    poke_pic.style.filter = "none";
    // poke_pic.classList.remove("blur");
  }

}



