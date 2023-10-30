let input = document.querySelector("input");
let btn = document.querySelectorAll("button");
let result = " ";
let arr = Array.from(btn);
arr.forEach((btn) => {
  btn.addEventListener("click", (el) => {
    if (el.target.innerHTML == "=") {
      result = eval(result);
      input.value = result;
    } else if (el.target.innerHTML == "AC") {
      result = 0;
      input.value = result;
    } else if (el.target.innerHTML == "DEL") {
      result = result.substring(0, result.length - 1);
      input.value = result;
    } else {
      result += el.target.innerHTML;
      input.value = result;
    }
  });
});
