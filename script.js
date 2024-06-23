let result = document.getElementById("result");
let temp = "";

function insert(user_input) {
  if (user_input == "calculate") {
    result.innerHTML = eval(temp);
  } else {
    temp += user_input.innerHTML;
    result.innerHTML = temp;
  }
}
function clearInput() {
  temp = "";
  result.innerHTML = 0;
}
function deleteOne() {
  result.innerHTML = temp.substring(0, temp.length - 1);
}
