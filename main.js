let cnv,ctx;
let obr = new Image(); //ten samy prvek jako HTML <img ...
obr.src = "./mimon.png";

function poNacteni() {
    cnv = document.getElementById("platno");
    ctx = cnv.getContext("2d");

    setInterval(animace, 30);
}

let xKruh = 100;
let yKruh = 150;
let rKruh = 20;
let dxKruh = -4;
let dyKruh = -1;

let xObr = 250;
let yObr = 180;
let wObr = 40;
let hObr = 40;
let uhelObr = 0;

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
    xKruh = xKruh + dxKruh;
    yKruh = yKruh + dyKruh;
    if (xKruh - rKruh <= 0) {
        dxKruh = -1 * dxKruh;
    }
    if (xKruh + rKruh >= cnv.width) {
        dxKruh = -1 * dxKruh;
    }
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.arc(xKruh,yKruh,rKruh,0,2*Math.PI);
    ctx.fill();

    //obrazek
    xObr = xObr + 1;
    yObr = yObr - 2;
    wObr = wObr -1;
    hObr = hObr -1;
    uhelObr = uhelObr + 5; //ve stupnich
    ctx.save(); //ulozim nastaveni platna
    ctx.translate(xObr,yObr); //nastavim nove nulove souradnice
    ctx.rotate((uhelObr/360) * 2*Math.PI);
    ctx.drawImage(obr, -wObr/2, -hObr/2, wObr, hObr);
    ctx.restore(); //obnovim ulozene nastaveni platna
}