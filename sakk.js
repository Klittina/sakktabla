window.addEventListener("load", init, false);
function ID (elem){
    return document.getElementById(elem);
}
function CLASS(elem){
    return document.getElementsByClassName(elem);
}
function $(elem){
    return document.querySelectorAll(elem);
}
function init(){
    var tablazat = "<table id='jssakk'>";
    var fekete = $("sakktabla");
    for (let index = 0; index < 8; index++) {
        tablazat +="<tr>";
        for (let index = 0; index < 8; index++) {
            tablazat +="<th>";
            if (fekete %2==0){
                fekete.style.backgroundcolor = "lightgray";
            }else{
                fekete.style.backgroundcolor = "lightgray";
            }
            tablazat +="</th>";
            fekete++;
        }
        tablazat +="</tr>";
    }
    tablazat +="</table>";
    ID("sakktabla").innerHTML= tablazat;
}