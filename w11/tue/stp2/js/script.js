let aCard = document.querySelector(".card");
console.log(aCard);
aCard.onclick = (e) => {
  console.log("target", e.target);
  console.log("currentTarget", e.currentTarget);
  e.currentTarget.classList.toggle("card-selected");
};

// let elem = document.getElementById("card1");
// // **elem.onclick = function(넣어줄 값) {함수식(과정)}
// // elem.onclick = function() {}
// elem.onclick = () => {
//   elem.classList.toggle("card-selected");
// };
