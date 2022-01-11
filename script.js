const API_KEY = "ef0022da8734e11c7fa3b83e4238b9be";
const name = "naruto";
const URL = `https://animechan.vercel.app/api/quotes/anime?title=${name}`;

console.log("start");
fetch(URL)
  .then((response) => response.json())
  .then((data) => console.log(data));
console.log("end");
