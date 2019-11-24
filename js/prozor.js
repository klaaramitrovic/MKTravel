window.addEventListener('resize',update);
var x = window.document.getElementById("demo");
update();
function update (){
    x.innerHTML = "Širina prozora: " + window.innerWidth + ", visina: " + window.innerHeight + ".";
}

var newWindowObj = window.open("uslovi.pdf","newWindow","menubar=true,location=true,resizable=false,scrollbars=false,width=400,height=300,top=200,left=200");

function move(){
    newWindowObj.moveBy(50,0);
    newWindowObj.focus();
}
