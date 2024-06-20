// let count = 0;
// const counterElement = document.getElementById("count");
// function updateCounter() {
//   counterElement.innerText = count.toString().padStart(2, "0");
// }
// function incrementCounter() {
//   count++;
//   updateCounter();
// }
// setInterval(incrementCounter, 1000); // Increment every 1000 milliseconds (1 second)
// updateCounter();
// <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/000000/long-arrow-down.png" alt="long-arrow-down"/>
// let dg_1 = document.querySelector(`.digital-count-1`);
// let dg_2 = document.querySelector(`.digital-count-2`);
// let dg_3 = document.querySelector(`.digital-count-3`);
// let dg_4 = document.querySelector(`.digital-count-4`);
// let dg_5 = document.querySelector(`.digital-count-5`);
// let con = document.querySelector(`#stats`);
// let count_1 = 0;
// let count_2 = 0;
// let count_3 = 0;
// let count_4 = 0;
// let count_5 = 0;
// con.addEventListener(`mouseenter`, () => {
//   console.log(`onmouseenter`);
//   // 01 digital count
//   function updateCounter() {
//     dg_1.innerText = count_1.toString().padStart(2, "0");
//   }
//   function incrementCounter() {
//     if (count_1 < 3891) count_1++;
//     updateCounter();
//   }
//   setInterval(incrementCounter, 1);
// });
// con.addEventListener(`mouseenter`, () => {
//   // 02 digital count
//   function updateCounter() {
//     dg_2.innerText = count_2.toString().padStart(2, "0");
//   }
//   function incrementCounter() {
//     if (count_2 < 3891) count_2++;
//     updateCounter();
//   }
//   setInterval(incrementCounter, 1);
// });
// con.addEventListener(`mouseenter`, () => {
//   // 03 digital count
//   function updateCounter() {
//     dg_3.innerText = count_3.toString().padStart(2, "0");
//   }
//   function incrementCounter() {
//     if (count_3 < 3891) count_3++;
//     updateCounter();
//   }
//   setInterval(incrementCounter, 1);
// });
// con.addEventListener(`mouseenter`, () => {
//   // 04 digital count
//   function updateCounter() {
//     dg_4.innerText = count_4.toString().padStart(2, "0");
//   }
//   function incrementCounter() {
//     if (count_4 < 3891) count_4++;
//     updateCounter();
//   }
//   setInterval(incrementCounter, 1);
// });
// con.addEventListener(`mouseenter`, () => {
//   // 05 digital count
//   function updateCounter() {
//     dg_5.innerText = count_5.toString().padStart(2, "0");
//   }
//   function incrementCounter() {
//     if (count_5 < 3891) count_5++;
//     updateCounter();
//   }
//   setInterval(incrementCounter, 1);
// });
const btnNavEl = document.querySelector(".btn-mobile-nav");
const btnNavc = document.querySelector(".c-menu");
const btnNavo = document.querySelector(".o-menu");
const headerEl = document.querySelector("header");
btnNavEl.addEventListener("click", function() {
    headerEl.classList.toggle("nav-open");
    btnNavc.classList.toggle(`close`);
    btnNavo.classList.toggle(`open`);
    headerEl.setAttribute(`style`, `visibility:hidden;`);
});
btnNavc.addEventListener("click", function() {
    headerEl.classList.toggle("nav-open");
    btnNavc.classList.toggle(`close`);
    btnNavo.classList.toggle(`open`);
    headerEl.removeAttribute(`style`, `visibility:hidden;`);
});
function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth"
    });
}
// Attach event listeners to navigation links
const navLinks = document.querySelectorAll(".nav-link a");
navLinks.forEach((link)=>{
    link.addEventListener("click", (event)=>{
        event.preventDefault();
        const targetSectionId = link.getAttribute("href");
        scrollToSection(targetSectionId);
    });
});

//# sourceMappingURL=index.1c974c2f.js.map
