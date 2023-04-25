function theme() {
    document.getElementById("themeButton").innerHTML = "Gaišais režīms";

    var targetFrame = window.frames["laba"];
    var targetBody = targetFrame.document.body;
    targetBody.style.backgroundColor = "red";

    //document.getElementsById("laba").style.backgroundColor = "black";
}