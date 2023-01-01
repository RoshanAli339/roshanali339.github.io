const text = document.querySelector(".sec-text");
const hi = document.querySelector("#hi");
const textLoad = () => {
  setTimeout(() => {
    hi.textContent = "Hi!";
    text.textContent = "Roshan Ali";
  }, 0);
  setTimeout(() => {
    hi.textContent = "";
    text.textContent = "a Student";
  }, 3000);
  setTimeout(() => {
    hi.textContent = "";
    text.textContent = "a Programmer";
  }, 6000);
  setTimeout(() => {
    hi.textContent = "";
    text.textContent = "a Web Developer";
  }, 9000); 
}

textLoad();
setInterval(textLoad, 12000);
console.log(hi.innerHTML);