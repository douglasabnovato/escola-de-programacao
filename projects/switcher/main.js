let element = document.body;
let modeDarkTheme = localStorage.getItem("modeDarkTheme");
let inputChecked = document.getElementsByClassName("chkSwitch");

console.log("Switcher dark");

if (modeDarkTheme) {
  element.classList.toggle("dark-mode");
  chkSwitch.checked = true;
}

function myFunction() {
  element.classList.toggle("dark-mode");

  if (element.classList.contains("dark-mode")) {
    localStorage.setItem("modeDarkTheme", true);
    inputChecked.checked = true;
  } else {
    localStorage.removeItem("modeDarkTheme");
    inputChecked.checked = false;
  }
}
