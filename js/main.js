window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop >= 900) {
    document.getElementById("header").classList.add("stick");
  } else {
    document.getElementById("header").classList.remove("stick");
  }
}