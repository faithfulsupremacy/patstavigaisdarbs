var mode = 1 //Tumšais režīms

function theme() {

    if (mode == 1) { //Tumšais režīms
        document.getElementById("themeButton").innerHTML = "Gaišais režīms";
        document.body.style.backgroundColor = "navy";   //1.html = midnightblue
        mode = 2
    } else { //Gaišais režīms
        document.getElementById("themeButton").innerHTML = "Tumšais režīms";
        document.body.style.backgroundColor = "gainsboro";
        mode = 1
    }
}