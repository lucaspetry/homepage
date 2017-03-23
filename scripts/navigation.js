var mainDiv = null;

function changeContent(newContentId) {
  mainDiv.style.opacity = 0;
  
  setTimeout(function() { 
    mainDiv.innerHTML = document.getElementById(newContentId).innerHTML;
    mainDiv.style.opacity = 1;
  }, 400);
}

function init() {
  mainDiv = document.getElementById('main');
}