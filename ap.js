let btn = document.querySelector(".btn");
let quote = document.querySelector("#quote");
const myqoutes = [
  `“Self-discipline is when your conscience tells you to do something and you don’t talk back.”
  \n — W. K. Hope`,
  `“Do not throw stone at someones's when you know yours is made of glass.”
  \n — Smokes`,
  `“Empty your mind. Be formless. Shapeless. Like water. 
  You put water into a cup, it becomes the cup. You put water into a bottle, it becomes the bottle. You put it in a teapot, it becomes the teapot. Water can flow, or it can crash. Be water, my friend.”
  \n — Bruce lee`,
  `“Keep your face always toward the sunshine and shadows will fall behind you.” \n —Walt Whitman`,
  `“You can have it all. Just not all at once.”\n —Oprah Winfrey`,
  `“We cannot solve problems with the kind of thinking we employed when we came up with them.”\n — Albert Einstein`,
  `“The enemy is fear. We think it is hate; but, it is fear.”\n — Mahatma Gandhi`,
  `“The family is the first essential cell of human society.”\n — Pope John XXIII`,
  `“Any fool can know. The point is to understand.”\n ― Albert Einstein`,
  `“The only true wisdom is in knowing you know nothing.”\n ― Socrates`,
];

btn.addEventListener("click", function () {
  let randomQuotes = myqoutes[Math.floor(Math.random() * myqoutes.length)];
  quote.innerHTML = randomQuotes;
});
