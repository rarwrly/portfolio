
const span = document.getElementsByClassName("close")[0];
const modal = document.getElementById("popModal");


function popModal(){
    setTimeout(function(){
        modal.style.display="block";
    }, 3000);
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

window.onload = popModal()
