function showSkill(title, desc){
  document.getElementById("skillTitle").textContent = title;
  document.getElementById("skillDesc").textContent = desc;
  document.getElementById("skillModal").style.display = "flex";
}

function closeModal(){
  document.getElementById("skillModal").style.display = "none";
}

window.onclick = function(e){
  const modal = document.getElementById("skillModal");
  if(e.target === modal){
    modal.style.display = "none";
  }
}
