var mainDiv = null;

function init() {
  mainDiv = document.getElementById('main-content');
}

function changeContent(sender, content) {
  document.getElementsByClassName("menu-selected")[0].setAttribute("class", "");
  sender.setAttribute("class", "menu-selected");
  
  mainDiv.style.opacity = 0;
  
  setTimeout(function() { 
    mainDiv.innerHTML = document.getElementById(content).innerHTML;
    mainDiv.style.opacity = 1;
  }, 400);
}