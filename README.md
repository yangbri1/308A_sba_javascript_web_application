# Project Name
### Skill Based Assessment #4 --- <em> JavaScript Web Application </em>

- - - - 

## Project Description
### Create a small single-page web application, topic and content is up for grasp. Practice the concepts learned in class, make sure to meet the Absolute Minimum Value Requirements first and spruce it up afterwards.

#### 1. Using DOM properties, methods, and techniques in creating a web application that provides a dynamic user experience. 
#### 2. In addition, use BOM properties, methods, and techniques to facilatate creation of a dynamic web application. (BOM must be passed before DOM could do anything)
#### 3. Show proficiency with event-driven-programming and DOM events.
#### 4. Include form validations using any combination of built-in HTML validation attributes and DOM-event-driven JavaScript validations (ex. required)

- - - -

## Technologies used
### HTTP Requests (GET), API Key, fetch() function, asynchronous functions & await, promises
####

## DOM properties, methods, and techniques
### 
### BOM properties, methods, and techniques:
#### window.prompt(), window.alert(), window.close(), etc.

### Event-driven-programming & DOM events:
#### .getElementById(), .querySelectorAll(), .firstChild(), .createElement(), .append(), DocumentFragment, .innerHTML, .textContent, etc.

### Form validations:
#### minlength, maxlength, regex, required, etc.

### CSS inlined and external styling
#### filter:blur(), justify-content(), align-text, font-family, etc.

### JavaScript built-in objects, methods
#### Math.random(), .toLowerCase(), .toUpperCase(), .split(), .pop(), .shift(), etc.

### HTML String Manipulation
#### .substring(), .trim()

* Others: Github add, commits; JavaScript syntax, VSCode IDE

- - - -

## How to get started
### Functionality over form!!
### Found some interesting API's while checking them out but many of of them documentations were inadequate or requires constantly being logged in (private API). Spent too much time starting an idea but half-way through realizing the API is a no-go sadly. At the end, decided that simple is best and went with a popular API with extensive documentation to back things up.

- - - - 

## Acknowledgements
### All used materials are stored in the "reference" folder of this repo

- - - -

### API URL
#### https://pokeapi.co/about 

### API URL w/ Endpoint
#### https://pokeapi.co/api/v2/pokemon/

### CSS blur effect
#### https://www.w3schools.com/css/css3_images.asp#:~:text=Learn%20how%20to%20style%20images%20using%20CSS.

### Compatible color palettes for website
#### https://colorhunt.co/palettes/halloween

### Pokemon Images
#### https://bulbapedia.bulbagarden.net/wiki/Bulbasaur_(Pok%C3%A9mon)#/media/File:0001Bulbasaur.png

### Pokemon GIFs
#### https://tenor.com/view/treecko-pokemon-hey-hello-hi-gif-5483105 

### Emojis
#### https://emojipedia.org/

### Icons
#### https://icons8.com/icons/set/login

### Lecture Notes
#### https://ps-react-curriculum.herokuapp.com/308A/1/lesson/
#### https://ps-react-curriculum.herokuapp.com/308A/3/lesson/
#### https://ps-react-curriculum.herokuapp.com/308A/4/lesson/
#### https://ps-react-curriculum.herokuapp.com/308A/5/lesson/


- - - -

> <em> Opening the web application would prompt an window.prompt() requesting the user input either "gif" or "image" for their preferred choice. If the choice is neither "gif" nor "image", the user would be prompted again for one of those choices until they follow through or the number of tries goes out. When that happens, window.close() BOM command would close out the of the web application.

> In the case that the user finally agreed to proceed, there would now be a blurred image or gif presented at the middle of their screen. The selection was based off of the built-in Math.random() function acting as an integer for an array of relative paths leading to media files enclosed in the images directory. Thus, upon reload of the web application there may be a new image or gif that takes its spot.

> Above the image there is a search bar provided for the user to guess the pokemon off of the blurred silhouette. Entering a Pokemon's name sends a HTTP GET request using fetch() function to retrieve some data from the PokeAPI. Since we are using the endpoint of '.../pokemons/' it would yield with its respective picture. To use as comparison to the blurred image/gif.

> Once the correct Pokemon is inputted the image would be rid of its filter. Simultaneously, a window.alert() would congratulate the player on their work.

> Aside: GIFs may be slightly harder than stagnant images to guess.

> Underneath are some additional GIFs as well as a disclaimer for Nintendo. </em>


