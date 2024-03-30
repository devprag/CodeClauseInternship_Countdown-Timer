// Converting string to required date format 
let deadline = new Date("April 17, 2024 11:55:00").getTime();

// To call defined function every second
let x = setInterval(function () {

// Getting current time in required format
let now = new Date().getTime();

// Calculating the difference
let t = deadline - now;

// Getting value of days, hours, minutes, seconds
let days = Math.floor(t / (1000 * 60 * 60 * 24));
let hours = Math.floor(
(t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor(
(t % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor(
(t % (1000 * 60)) / 1000);

// Output the remaining time
document.getElementById("demo").innerHTML =
days + "d " + hours + "h " + 
minutes + "m " + seconds + "s ";

// Output for over time
if (t < 0) {
clearInterval(x);
document.getElementById("demo")
   .innerHTML = "EXPIRED";
}
}, 1000);