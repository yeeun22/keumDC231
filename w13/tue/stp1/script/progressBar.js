const indicator = document.querySelector(".indicator");
const progressTarget = document.querySelector("main");

const progressBar = () => {
  const progressTargetBCR = progressTarget.getBoundingClientRect();
  const progress =
    1 - progressTargetBCR.bottom / progressTargetBCR.height;
  console.log(progress);
  if (progress >= 0 && progress <= 1) {
    indicator.style.cssText = "transform: scaleX(" + progress + ")";
  }
};

// document.onscroll = () => {
//     우리가 실행할 함수 구문 작성 or 함수를 갖다놓는다.
// }

// // 이벤트 리스너 추가하는 법 1
// document.onscroll = () => {
//   progressBar();
// };

// 이벤트 리스너 추가하는 법 2
document.addEventListener("scroll", progressBar);
