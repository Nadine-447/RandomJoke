const jokeContainer = document.getElementById("joke");//attach variable for joke to html element <p> with id "joke"
const btn = document.getElementById("btn");//attach variable for button with html element <button> with id "btn"

//site  with jokes https://sv443.net/jokeapi/v2/  -->try it out here(check flags, then copy URL)
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

//function for getting joke
let getJoke = () => {
    jokeContainer.classList.remove("fade");
    //The fetch() method is used to request data from a server. The request can be of any type of API that returns the data in JSON or XML. The fetch() method requires one parameter, the URL to request, and returns a promise
    fetch(url)
    .then(data => data.json())
    .then(item => {
        jokeContainer.textContent = `${item.joke}`;
        jokeContainer.classList.add("fade");
    });//The then method returns a new Promise , which allows for method chaining. 
}
btn.addEventListener("click",getJoke);
getJoke();