let navbar = document.getElementById("navbar");
console.log("navbar: ", navbar);

let edit = document.getElementById("edit");
let signers = document.getElementById("signers");
let thanks = document.getElementById("thanks");

console.log(window.location.pathname);

window.addEventListener("scroll", () => {
  console.log(window.location.hash);
});

if (window.location.pathname === "#main") {
  console.log("thanks!!");
  signers.classList.remove("underline");
  // edit.classList.remove("underline");
  // thanks.classList.add("underline");
} else if (window.location.pathname === "/signers") {
  console.log("signers!!");
  signers.classList.add("underline");
  edit.classList.remove("underline");
  thanks.classList.remove("underline");
} else if (window.location.pathname === "/edit") {
  console.log("edit!!");
  signers.classList.remove("underline");
  edit.classList.add("underline");
  thanks.classList.remove("underline");
}
