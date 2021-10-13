
const jokeEl = document.getElementById("joke");
const silly = document.getElementById("silly");
silly.addEventListener("click",generateJoke);
generateJoke();
 async function generateJoke(){
   const jokeRes =  await fetch("https://icanhazdadjoke.com/",{
       headers: {
           'Accept':'application/json'
       }
   });
   const joke = await jokeRes.json();
   console.log(joke);
   jokeEl.innerHTML = joke.joke;
}