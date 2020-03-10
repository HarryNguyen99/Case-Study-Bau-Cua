class ImageObj {
    constructor(id, image, status, coin) {
        this.id = id;
        this.image = image;
        this.status = status;
        this.coin = coin;

        this.getstatus = function () {
            return this.status = "false";
        };

    }
}

let imgNai = document.getElementById("nai");
let imgCua = document.getElementById("cua");
let imgGa = document.getElementById("ga");
let imgCa = document.getElementById("ca");
let imgBau = document.getElementById("bau");
let imgTom = document.getElementById("tom");

let coinNai = document.getElementById("coinNai").textContent;
let coinCua = document.getElementById("coinCua").textContent;
let coinGa = document.getElementById("coinGa").textContent;
let coinCa = document.getElementById("coinCa").textContent;
let coinBau = document.getElementById("coinBau").textContent;
let coinTom = document.getElementById("coinTom").textContent;


let checkImgNai = new ImageObj("nai", imgNai, status, coinNai);
let checkImgCua = new ImageObj("cua", imgCua, status, coinCua);
let checkImgGa = new ImageObj("ga", imgGa, status, coinGa);
let checkImgCa = new ImageObj("ca", imgCa, status, coinCa);
let checkImgBau = new ImageObj("bau", imgBau, status, coinBau);
let checkImgTom = new ImageObj("tom", imgTom, status, coinTom);



function statusImg(checkImgNaiObj, checkImgCuaObj, checkImgGaObj, checkImgCaObj, checkImgBauObj, checkImgTomObj ) {
    checkImgNaiObj.status = "true";
    checkImgBauObj.status = "false";
    checkImgGaObj.status = "false";
    checkImgCaObj.status = "false";
    checkImgTomObj.status = "false";
    checkImgCuaObj.status = "false";
    conveImgNai = checkImgNai.getstatus();
    conveImgNai = status;
    // console.log(conveImgNai + "nai");
}


