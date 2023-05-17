var mode = 1 //Tumšais režīms
var labaFrame = parent.frames['laba'];
var labaFrameDocument = labaFrame.document;
//var apaksaFrameDocument = 

function theme() {

    if (mode == 1) { //Tumšais režīms
        document.getElementById("themeButton").innerHTML = "Gaišais režīms";
        document.body.style.backgroundColor = "navy";   //1.html = midnightblue
        labaFrameDocument.body.style.backgroundColor = 'midnightblue';
        mode = 2
    } else { //Gaišais režīms
        document.getElementById("themeButton").innerHTML = "Tumšais režīms";
        document.body.style.backgroundColor = "gainsboro";
        labaFrameDocument.body.style.backgroundColor = 'aliceblue';
        mode = 1
    }
}
//313131 202020 (3.)
//454545 4c4c4c (1.)