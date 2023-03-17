// information page
var einsBTN = document.getElementById("first");
var zweiBTN = document.getElementById("second");
var dreiBTN = document.getElementById("third");
var vierBTN = document.getElementById("fourth");

var eins = document.getElementById("i1");
var zwei = document.getElementById("i2");
var drei = document.getElementById("i3");
var vier = document.getElementById("i4");

document.getElementById("first").addEventListener("click", function() {
  document.getElementById("i1").style.display = "flex";
  document.getElementById("i2").style.display = "none";
  document.getElementById("i3").style.display = "none";
  document.getElementById("i4").style.display = "none";


});

zweiBTN.addEventListener("click", function() {
  document.getElementById("i1").style.display = "none";
  document.getElementById("i2").style.display = "flex";
  document.getElementById("i3").style.display = "none";
  document.getElementById("i4").style.display = "none";
});

dreiBTN.addEventListener("click", function() {
  document.getElementById("i1").style.display = "none";
  document.getElementById("i2").style.display = "none";
  document.getElementById("i3").style.display = "flex";
  document.getElementById("i4").style.display = "none";
});

vierBTN.addEventListener("click", function() {
  document.getElementById("i1").style.display = "none";
  document.getElementById("i2").style.display = "none";
  document.getElementById("i3").style.display = "none";
  document.getElementById("i4").style.display = "flex";
});