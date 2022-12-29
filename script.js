const text = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Roshan Ali";
  }, 0);
  setTimeout(() => {
    text.textContent = "a Student";
  }, 3000);
  setTimeout(() => {
    text.textContent = "a Programmer";
  }, 6000);
  setTimeout(() => {
    text.textContent = "a Web Developer";
  }, 9000); 
}

textLoad();
setInterval(textLoad, 12000);