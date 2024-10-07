
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
        
    }
    // catch any thrown errors
    catch(error){

      // output any caught errors
      console.error(error);
    }
}



