const generateBtn = document.querySelector(".generate");
const uniqueBtn = document.querySelector(".unique");
const token = document.querySelector(".token");
const copy = document.querySelector(".copy");
let clicked = 0;
let unique = "ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

generateBtn.addEventListener("click", () => {
  let uniqueToken = "";
  for (let i = 0; i < 20; i++) {
    const random = Math.floor(Math.random() * unique.length);
    uniqueToken += unique[random];
  }

  token.innerHTML = uniqueToken;

  clicked++;
  if (clicked == 1) {
    clipBoardText(" token for the day");
    generateBtn.disabled = true;
  }
});
uniqueBtn.addEventListener("click", function (e) {
  const getToken = e.target.parentElement.children[2].innerHTML;
  navigator.clipboard.writeText(getToken);
  clipBoardText("Copied to clipboard");
});

//show clipboard text

function clipBoardText(text) {
  copy.innerHTML = text;
  setTimeout(() => {
    copy.innerHTML = "";
  }, 2000);
}
