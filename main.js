let main = document.getElementsByClassName("main");

setInterval(function () {
  if (main[0].innerHTML === "Developer &nbsp;") {
    main[0].innerHTML = "Designer &nbsp;";
  } else main[0].innerHTML = "Developer &nbsp;";
}, 4000);
