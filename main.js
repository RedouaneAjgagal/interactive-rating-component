const sumbit = document.getElementById("submit");
const rating = document.querySelector(".rating");
const thankYou = document.querySelector(".thank-you");
const btn = document.querySelectorAll(".btn");
const rate = document.getElementById("rate");
// Show thank you page & Hide rating page
sumbit.addEventListener("click", () => {
    thankYou.classList.remove("hidden");
    rating.style.display = "none";
})
// Add selected rating value on thank you page
btn.forEach(element => {
    element.addEventListener("click", () => {
        btn.innerHTML = element.innerHTML;
        rate.innerHTML = btn.innerHTML;
    })
});