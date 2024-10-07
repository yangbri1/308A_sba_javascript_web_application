

// function inquiring user for input
export function user_input(pokemon_pic, poke_indx, gif_ary, img_ary){
    // BOM prompts user for an input
    let input = window.prompt(`Please type in "gif" or "image" to proceed`);
  
    let tries = 0;
    // declare variable limit to be the random poke_index number
    let limit = poke_indx;
  
    // continuously prompt user for either an "gif" or "image" if neither were given
    while(tries < limit){
      
      // converts input into lowercase & remove any excess whitespaces from front & back
      input = input.toLowerCase().trim();
  
      // if user asks for gif
      if(input === "gif"){
        pokemon_pic.src = gif_ary[poke_indx];
        break;
      }
      // if user asks for image
      else if(input == "image"){
        pokemon_pic.src = img_ary[poke_indx];
        break;
      }
      // otherwise ... 
      else{
        // re-prompts user for wanted input & notify them of attempts left
        input = prompt(`${limit - tries} attempts left, "gif" or "image" please`);
        // increment loop by 1 to continue the loop
        tries++;
      }
    }
    // if user runs out of tries
    if(tries === limit){
      alert(`🟥 ERROR 404 🟥`);
      // close out tab
      window.close();
    }
}

// function to check if input pokemon is the real deal to the chosen one
export function poke_guess(pokemon_pic, pokemon){
    // if the user input matches the shown Pokemon
    if(pokemon == poke_name){
  
      // capitalize Pokemon's name
      let poke_cap = poke_name[0].toUpperCase() + poke_name.substring(1);
  
      // display BOM window.alert() to user
      window.alert(`Congratulations!! Indeed it's a ${poke_cap}!! 🥳`);
  
      // removes any previus filter off of the image
      pokemon_pic.style.filter = "none";
      // pokemon_pic.classList.remove("blur");
      
    }
  
}