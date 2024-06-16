// $("#menu").click(function () {
//   $(" nav .navigation ul").addClass("active");
//   console.log("menu");
// });
// $("#cross").click(function () {
//   $(" nav .navigation ul").removeClass("active");
// });
$(document).ready(function () {
  $("#menu").click(function () {
    $("nav .navigation ul").addClass("active");
  });

  $("#cross").click(function () {
    $("nav .navigation ul").removeClass("active");
  });
});

document.getElementById("more").addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("course").scrollIntoView({ behavior: "smooth" });
});

// countdown
var countDownDate = new Date("30 december, 2024 00:00:00").getTime();

var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days + " <br />Days";
  document.getElementById("hours").innerHTML = hours + " <br />Hours";
  document.getElementById("minutes").innerHTML = minutes + " <br />Minutes";
  document.getElementById("seconds").innerHTML = seconds + " <br />Seconds";

  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".reminder").innerHTML =
      "<p>Countdown finished!</p>";
  }
}, 1000);
// account creation
document.getElementById("lap").addEventListener("click", function (event) {
  event.preventDefault();
  alert("You have created an account!");
});
document.getElementById("n").addEventListener("click", function (event) {
  event.preventDefault();
  alert("You are subscribed");
});
document.getElementById("cookies").addEventListener("click", function (event) {
  event.preventDefault();
  alert("No cookies till now.");
});
// products
document.getElementById("product").addEventListener("click", function () {
  window.location.href = "product.html";
});
document.getElementById("reputation").addEventListener("click", function () {
  window.location.href = "reputation.html";
  console.log("not done");
});
document.getElementById("power").addEventListener("click", function () {
  window.location.href = "power.html";
});
document.getElementById("manage").addEventListener("click", function () {
  window.location.href = "power.html";
});
document.getElementById("market").addEventListener("click", function () {
  window.location.href = "market.html";
});
document.getElementById("career").addEventListener("click", function () {
  window.location.href = "carrer.html";
});
document.getElementById("teach").addEventListener("click", function () {
  window.location.href = "carrer.html";
});
document.getElementById("about").addEventListener("click", function () {
  window.location.href = "about.html";
});
document.getElementById("us").addEventListener("click", function () {
  window.location.href = "contact.html";
});
document.getElementById("support").addEventListener("click", function () {
  window.location.href = "contact.html#contact";
});
document.getElementById("blog").addEventListener("click", function () {
  window.location.href = "blog.html";
});
document.getElementById("invest").addEventListener("click", function () {
  window.location.href = "investors.html";
});
document.getElementById("privacy").addEventListener("click", function () {
  window.location.href = "private.html";
});
document.getElementById("m").addEventListener("click", function () {
  window.location.href = "contact.html#map";
});
document.getElementById("part").addEventListener("click", function () {
  window.location.href = "investors.html";
});
document.getElementById("Buisness").addEventListener("click", function () {
  window.location.href = "market.html";
});
document.getElementById("access").addEventListener("click", function () {
  window.location.href = "access.html";
});
document.getElementById("Growth").addEventListener("click", function () {
  window.location.href = "Growth.html";
});

// app link
const app = document.getElementById("app");

app.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default behavior of the link
  const playStoreUrl =
    "https://support.google.com/googleplay/answer/190860?hl=en"; // Replace with your app's Play Store URL
  window.open(playStoreUrl, "_blank"); // Open URL in a new tab
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("enrollm")
    .addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link behavior
      window.location.href = "form.html";
    });
});
