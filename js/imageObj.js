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
let coinCuaNum = parseInt(coinCua);
let coinGa = document.getElementById("coinGa").textContent;
let coinGaNum = parseInt(coinGa);
let coinCa = document.getElementById("coinCa").textContent;
let coinCaNum = parseInt(coinCa);
let coinBau = document.getElementById("coinBau").textContent;
let coinBauNum = parseInt(coinBau);
let coinTom = document.getElementById("coinTom").textContent;
let coinTomNum = parseInt(coinTom);


let checkImgNai = new ImageObj("nai", imgNai, status, coinNaiNum);
let checkImgCua = new ImageObj("cua", imgCua, status, coinCuaNum);
let checkImgGa = new ImageObj("ga", imgGa, status, coinGaNum);
let checkImgCa = new ImageObj("ca", imgCa, status, coinCaNum);
let checkImgBau = new ImageObj("bau", imgBau, status, coinBauNum);
let checkImgTom = new ImageObj("tom", imgTom, status, coinTomNum);

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