let observerOption = {
  root: null,
  rootMargin: "0px 0px -200px 0px",
  threshold: 0.75,
};

// function scrollfunction() {}
let observerCallback = (observingTargets, observer) => {
  observingTargets.forEach((eachObservingTarget) => {
    if (eachObservingTarget.isIntersecting) {
      console.log("observerCallback", eachObservingTarget.target);
      eachObservingTarget.target.classList.add("triggered");
    } else {
      eachObservingTarget.target.classList.remove("triggered");
    }
  });
};

let observer = new IntersectionObserver(
  observerCallback,
  observerOption
);

let elems = document.querySelectorAll(".animTrigger");
console.log(elems);
// // 하드코딩
// observer.observe(elems[0]);
// observer.observe(elems[1]);
// observer.observe(elems[2]);
// observer.observe(elems[3]);
// ...
// // 조금 똑똑한 코딩
// observer.observe(html요소)
// for(let idx =0; i < idx < elems.length; idx++){
//     obsecer.observe(elems[idx]);
// }
// 있어보이는 코딩
elems.forEach((eachElem) => {
  observer.observe(eachElem);
});
