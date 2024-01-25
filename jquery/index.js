// $("h1").css("color", "red");
// $("h1").text("Bye");
// $("button").text("Don't Click Me");
// $("button").text("<em>Hey</em>");

// for (let i = 0; i < 5; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", function () {
//     document.querySelector("h1").style.color = "purple";
//   });
// }

// $("button").click(() => {
//   $("h1").css("color", "red");
// });

$("body").keypress(function (event) {
  console.log(event.key);
});

$(document).keydown(function (event) {
  $("h1").text(event.key);
});

$("h1").on("mouseover", function () {
  $("h1").css("color", "purple");
});

$("button").click(function (event) {
  $("h1").fadeIn();
});

$("button").click(function (event) {
  $("h1").animate({ opacity: 0.5 });
});
