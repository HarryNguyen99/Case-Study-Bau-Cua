class ImageObj {
    constructor(id, image, status, coin) {
        this.id = id;
        this.image = image;
        this.status = status;
        this.coin = coin;

        this.getstatus = function () {
            return this.status = false;
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
let coinNaiNum = parseInt(coinNai);
let coinCua = document.getElementById("coinCua").textContent;
let coinCuaNum = parseInt(coinNai);
let coinGa = document.getElementById("coinGa").textContent;
let coinGaNum = parseInt(coinNai);
let coinCa = document.getElementById("coinCa").textContent;
let coinCaNum = parseInt(coinNai);
let coinBau = document.getElementById("coinBau").textContent;
let coinBauNum = parseInt(coinNai);
let coinTom = document.getElementById("coinTom").textContent;
let coinTomNum = parseInt(coinNai);


let checkImgNai = new ImageObj("nai", imgNai, status, coinNai);
let checkImgCua = new ImageObj("cua", imgCua, status, coinCua);
let checkImgGa = new ImageObj("ga", imgGa, status, coinGa);
let checkImgCa = new ImageObj("ca", imgCa, status, coinCa);
let checkImgBau = new ImageObj("bau", imgBau, status, coinBau);
let checkImgTom = new ImageObj("tom", imgTom, status, coinTom);

let arrayObj = [checkImgNai, checkImgCua, checkImgGa, checkImgCa, checkImgBau, checkImgTom];

function statusImg(id) {
    for (let i = 0; i < arrayObj.length; i++) {
        let test = arrayObj[i].id;
        if (id === arrayObj[i].id) {
            arrayObj[i].status = true;
        } else {
            arrayObj[i].getstatus();
        }
    }
}