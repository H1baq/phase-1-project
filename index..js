DOMcontedLoad.addEventListener
document.getElementById("social-media-nav")
.addEventListener("click", function(event){
    event.preventDefault();
    var socialmediafooter= document.getElementById("social-media-footer");
    if (socialmediafooter.style.display === "none" || socialmediafooter.style.display === "") {
        socialmediafooter.style.display = "block";
    } else {
        socialmediafooter.style.display = "none";
    }

});