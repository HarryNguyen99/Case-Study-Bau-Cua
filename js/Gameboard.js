// bàn cược
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

checkImgNai.id = 1;
checkImgCua.id = 2;
checkImgGa.id = 3;
checkImgCa.id = 4;
checkImgBau.id = 5;
checkImgTom.id = 6;

let arrayObj = [checkImgNai, checkImgCua, checkImgGa, checkImgCa, checkImgBau, checkImgTom];

function statusImg(id) {
    for (let i = 0; i < arrayObj.length; i++) {
        if (id === arrayObj[i].name) {
            arrayObj[i].status = true;
        } else {
            arrayObj[i].getstatus();
        }
    }
    chipCoinNai = 0;
    chipCoinCua = 0;
    chipCoinGa = 0;
    chipCoinCa = 0;
    chipCoinBau = 0;
    chipCoinTom = 0;
}

// lắc xí ngầu
let xiNgau1 = new Dice();
let xiNgau2 = new Dice();
let xiNgau3 = new Dice();

function rollDice() {
    let time = 45;
    let image = ["image/nai.jpg", "image/cua.jpg", "image/ga.jpg",
        "image/ca.jpg", "image/bau.jpg", "image/tom.jpg"];

    let timeValue = setInterval(function () {
        xiNgau1.getRanNum();
        document.getElementById("xiNgau1").src = image [xiNgau1.ranNum];
        xiNgau2.getRanNum();
        document.getElementById("xiNgau2").src = image [xiNgau2.ranNum];
        xiNgau3.getRanNum();
        document.getElementById("xiNgau3").src = image [xiNgau3.ranNum];
        time = time - 1;
        if (time <= 0) {
            clearInterval(timeValue);
            checkWin(checkImgNai.id-1, coinNaiNum);
            checkWin(checkImgCua.id-1, coinCuaNum);
            checkWin(checkImgGa.id-1, coinGaNum);
            checkWin(checkImgCa.id-1, coinCaNum);
            checkWin(checkImgBau.id-1, coinBauNum);
            checkWin(checkImgTom.id-1, coinTomNum);
        }
    }, 50);
}

// check win
function checkWin(obj, coin) {
        if (xiNgau1.ranNum === obj){
            totalM += (coin * 2);
            console.log(totalM);
            document.getElementById("money").innerHTML = totalM;
        }
        if (xiNgau2.ranNum === obj){
            totalM += (coin * 2);
            console.log(totalM);
            document.getElementById("money").innerHTML = totalM;
        }
        if (xiNgau3.ranNum === obj){
            totalM += (coin * 2);
            console.log(totalM);
            document.getElementById("money").innerHTML = totalM;
        }
        if ((xiNgau1.ranNum !== obj)  && (xiNgau2.ranNum !== obj)  && (xiNgau3.ranNum !== obj)){
        }

}

// chơi tiếp
function showCoin() {
    chipCoinNai = 0;
    chipCoinCua = 0;
    chipCoinGa = 0;
    chipCoinCa = 0;
    chipCoinBau = 0;
    chipCoinTom = 0;
    document.getElementById("coinNai").innerHTML = "0";
    document.getElementById("coinCua").innerHTML = "0";
    document.getElementById("coinGa").innerHTML = "0";
    document.getElementById("coinCa").innerHTML = "0";
    document.getElementById("coinBau").innerHTML = "0";
    document.getElementById("coinTom").innerHTML = "0";

}
function refresh() {
    location.reload();
}
