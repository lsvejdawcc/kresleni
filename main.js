let cnv,ctx;
function poNacteni() {
    cnv = document.getElementById("platno");
    ctx = cnv.getContext("2d");

    setInterval(animace, 100);
}

let xKruh = 100;
let yKruh = 150;
function animace() {
    ctx.clearRect(0,0, cnv.width, cnv.height);

    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 4;
    ctx.moveTo(0,0);
    ctx.lineTo(200,100);
    ctx.lineTo(200,200);
    ctx.stroke();

    //obdelnik
    ctx.beginPath();
    ctx.rect(10,200, 40,20);
    //ctx.stroke();
    ctx.fill();

    //kruh
    xKruh = xKruh +2;
    yKruh = yKruh -1;
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.arc(xKruh,yKruh,20,0,2*Math.PI);
    ctx.fill();
}