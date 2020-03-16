

function showText (){
  let text = document.getElementById('bText');
  let bImg = document.getElementById('bImg');
  
  bImg.style.display = 'none';
  text.style.display = 'block';
  text.style.opacity = 1;
  let btn = document.getElementById("textBtn");
  btn.innerHTML = "CLICK THE TEXT ABOVE"
}