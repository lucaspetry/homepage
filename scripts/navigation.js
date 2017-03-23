var currentContent = null;

function changeContent(newContentId) {
  if(currentContent != null) {
    currentContent.style.display = 'none';
    currentContent.style.visibility = 'hidden';
  }
  
  currentContent = document.getElementById(newContentId);
  currentContent.style.display = 'block';
  currentContent.style.visibility = 'visible';
}