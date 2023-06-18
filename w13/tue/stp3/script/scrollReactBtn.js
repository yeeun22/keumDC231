const observingTargets = document.querySelectorAll("main section");
// console.log(observingTargets);

const whenTargetInView = (entities) => {
  entities.forEach((eachEntity) => {
    if (eachEntity.isIntersecting) {
      console.log("isIn!", eachEntity.target);
    } else {
      console.log("isOut!", eachEntity.target);
    }
  });
};

const observer = new IntersectionObserver(whenTargetInView, {});

observingTargets.forEach((eachTarget) => {
  observer.observe(eachTarget);
});
