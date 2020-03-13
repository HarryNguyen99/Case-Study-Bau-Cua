class Chipplus {
    constructor(img1, img2, img3, img4, img5, img6) {
        this.img1 = img1;
        this.img2 = img2;
        this.img3 = img3;
        this.img4 = img4;
        this.img5 = img5;
        this.img6 = img6;

        this.getImg1 = function () {
            return this.img1 = 50;
        }
        this.getImg2 = function () {
            return this.img2 = 100;
        }
        this.getImg3 = function () {
            return this.img3 = 200;
        }
        this.getImg4 = function () {
            return this.img4 = 500;
        }
        this.getImg5 = function () {
            return this.img5 = 1000;
        }
        this.getImg6 = function () {
            return this.img6 = 2000;
        }
    }
}

let chipImg1 = document.getElementById("chip50");
let chipImg2 = document.getElementById("chip100");
let chipImg3 = document.getElementById("chip200");
let chipImg4 = document.getElementById("chip500");
let chipImg5 = document.getElementById("chip1000");
let chipImg6 = document.getElementById("chip2000");

let chipCoin = new Chipplus(chipImg1, chipImg2, chipImg3, chipImg4, chipImg5, chipImg6);

let chipCoinNai = 0, chipCoinCua = 0, chipCoinGa = 0, chipCoinCa = 0, chipCoinBau = 0, chipCoinTom = 0;
let minus = 0;

function chipPlus1() {
    for (let i = 0; i < arrayObj.length; i++) {
        if (arrayObj[i].status === false) {
        } else {
            if (arrayObj[i].name === "nai") {
                chipCoinNai += chipCoin.getImg1();
                document.getElementById("coinNai").innerHTML = chipCoinNai;
                coinNaiNum = chipCoinNai;
                minus = totalM -= 50;
                document.getElementById("money").innerHTML = minus;
                break;
            } else if (arrayObj[i].name === "cua") {
                chipCoinCua += chipCoin.getImg1();
                document.getElementById("coinCua").innerHTML = chipCoinCua;
                coinCuaNum = chipCoinCua;
                minus = totalM -= 50;
                document.getElementById("money").innerHTML = minus;
                break;
            } else if (arrayObj[i].name === "ga") {
                chipCoinGa += chipCoin.getImg1();
                document.getElementById("coinGa").innerHTML = chipCoinGa;
                coinGaNum = chipCoinGa;
                minus = totalM -= 50;
                document.getElementById("money").innerHTML = minus;
                break;
            } else if (arrayObj[i].name === "ca") {
                chipCoinCa += chipCoin.getImg1();
                document.getElementById("coinCa").innerHTML = chipCoinCa;
                coinCaNum = chipCoinCa;
                minus = totalM -= 50;
                document.getElementById("money").innerHTML = minus;
                break;
            } else if (arrayObj[i].name === "bau") {
                chipCoinBau += chipCoin.getImg1();
                document.getElementById("coinBau").innerHTML = chipCoinBau;
                coinBauNum = chipCoinBau;
                minus = totalM -= 50;
                document.getElementById("money").innerHTML = minus;
                break;
            } else if (arrayObj[i].name === "tom") {
                chipCoinTom += chipCoin.getImg1();
                document.getElementById("coinTom").innerHTML = chipCoinTom;
                coinTomNum = chipCoinTom;
                minus = totalM -= 50;
                document.getElementById("money").innerHTML = minus;
                break;
            }
        }
    }
}

function chipPlus2() {
    for (let i = 0; i < arrayObj.length; i++) {
        if (arrayObj[i].status === false) {
        } else {
            if (arrayObj[i].name === "nai") {
                chipCoinNai += chipCoin.getImg2();
                document.getElementById("coinNai").innerHTML = chipCoinNai;
                coinNaiNum = chipCoinNai;
                minus = totalM -= 100;
                document.getElementById("money").innerHTML = minus;
                break;
            } else if (arrayObj[i].name === "cua") {
                chipCoinCua += chipCoin.getImg2();
                document.getElementById("coinCua").innerHTML = chipCoinCua;
                coinCuaNum = chipCoinCua;
                minus = totalM -= 100;
                document.getElementById("money").innerHTML = minus;
                break;
            } else if (arrayObj[i].name === "ga") {
                chipCoinGa += chipCoin.getImg2();
                document.getElementById("coinGa").innerHTML = chipCoinGa;
                coinGaNum = chipCoinGa;
                minus = totalM -= 100;
                document.getElementById("money").innerHTML = minus;
                break;
            } else if (arrayObj[i].name === "ca") {
                chipCoinCa += chipCoin.getImg2();
                document.getElementById("coinCa").innerHTML = chipCoinCa;
                coinCaNum = chipCoinCa;
                minus = totalM -= 100;
                document.getElementById("money").innerHTML = minus;
                break;
            } else if (arrayObj[i].name === "bau") {
                chipCoinBau += chipCoin.getImg2();
                document.getElementById("coinBau").innerHTML = chipCoinBau;
                coinBauNum = chipCoinBau;
                minus = totalM -= 100;
                document.getElementById("money").innerHTML = minus;
                break;
            } else if (arrayObj[i].name === "tom") {
                chipCoinTom += chipCoin.getImg2();
                document.getElementById("coinTom").innerHTML = chipCoinTom;
                coinTomNum = chipCoinTom;
                minus = totalM -= 100;
                document.getElementById("money").innerHTML = minus;
                break;
            }
        }
    }
}

function chipPlus3() {
    for (let i = 0; i < arrayObj.length; i++) {
        if (arrayObj[i].status === false) {
        } else {
            if (arrayObj[i].name === "nai") {
                chipCoinNai += chipCoin.getImg3();
                document.getElementById("coinNai").innerHTML = chipCoinNai;
                coinNaiNum = chipCoinNai;
                minus = totalM -= 200;
                document.getElementById("money").innerHTML = minus;
                break;
            } else if (arrayObj[i].name === "cua") {
                chipCoinCua += chipCoin.getImg3();
                document.getElementById("coinCua").innerHTML = chipCoinCua;
                coinCuaNum = chipCoinCua;
                minus = totalM -= 200;
                document.getElementById("money").innerHTML = minus;
                break;
            } else if (arrayObj[i].name === "ga") {
                chipCoinGa += chipCoin.getImg3();
                document.getElementById("coinGa").innerHTML = chipCoinGa;
                coinGaNum = chipCoinGa;
                minus = totalM -= 200;
                document.getElementById("money").innerHTML = minus;
                break;
            } else if (arrayObj[i].name === "ca") {
                chipCoinCa += chipCoin.getImg3();
                document.getElementById("coinCa").innerHTML = chipCoinCa;
                coinCaNum = chipCoinCa;
                minus = totalM -= 200;
                document.getElementById("money").innerHTML = minus;
                break;
            } else if (arrayObj[i].name === "bau") {
                chipCoinBau += chipCoin.getImg3();
                document.getElementById("coinBau").innerHTML = chipCoinBau;
                coinBauNum = chipCoinBau;
                minus = totalM -= 200;
                document.getElementById("money").innerHTML = minus;
                break;
            } else if (arrayObj[i].name === "tom") {
                chipCoinTom += chipCoin.getImg3();
                document.getElementById("coinTom").innerHTML = chipCoinTom;
                coinTomNum = chipCoinTom;
                minus = totalM -= 200;
                document.getElementById("money").innerHTML = minus;
                break;
            }
        }
    }
}

function chipPlus4() {
    for (let i = 0; i < arrayObj.length; i++) {
        if (arrayObj[i].status === false) {
        } else {
            if (arrayObj[i].name === "nai") {
                chipCoinNai += chipCoin.getImg4();
                document.getElementById("coinNai").innerHTML = chipCoinNai;
                coinNaiNum = chipCoinNai;
                minus = totalM -= 500;
                document.getElementById("money").innerHTML = minus;
                break;
            } else if (arrayObj[i].name === "cua") {
                chipCoinCua += chipCoin.getImg4();
                document.getElementById("coinCua").innerHTML = chipCoinCua;
                coinCuaNum = chipCoinCua;
                minus = totalM -= 500;
                document.getElementById("money").innerHTML = minus;
                break;
            } else if (arrayObj[i].name === "ga") {
                chipCoinGa += chipCoin.getImg4();
                document.getElementById("coinGa").innerHTML = chipCoinGa;
                coinGaNum = chipCoinGa;
                minus = totalM -= 500;
                document.getElementById("money").innerHTML = minus;
                break;
            } else if (arrayObj[i].name === "ca") {
                chipCoinCa += chipCoin.getImg4();
                document.getElementById("coinCa").innerHTML = chipCoinCa;
                coinCaNum = chipCoinCa;
                minus = totalM -= 500;
                document.getElementById("money").innerHTML = minus;
                break;
            } else if (arrayObj[i].name === "bau") {
                chipCoinBau += chipCoin.getImg4();
                document.getElementById("coinBau").innerHTML = chipCoinBau;
                coinBauNum = chipCoinBau;
                minus = totalM -= 500;
                document.getElementById("money").innerHTML = minus;
                break;
            } else if (arrayObj[i].name === "tom") {
                chipCoinTom += chipCoin.getImg4();
                document.getElementById("coinTom").innerHTML = chipCoinTom;
                coinTomNum = chipCoinTom;
                minus = totalM -= 500;
                document.getElementById("money").innerHTML = minus;
                break;
            }
        }
    }
}

function chipPlus5() {
    for (let i = 0; i < arrayObj.length; i++) {
        if (arrayObj[i].status === false) {
        } else {
            if (arrayObj[i].name === "nai") {
                chipCoinNai += chipCoin.getImg5();
                document.getElementById("coinNai").innerHTML = chipCoinNai;
                coinNaiNum = chipCoinNai;
                minus = totalM -= 1000;
                document.getElementById("money").innerHTML = minus;
                break;
            } else if (arrayObj[i].name === "cua") {
                chipCoinCua += chipCoin.getImg5();
                document.getElementById("coinCua").innerHTML = chipCoinCua;
                coinCuaiNum = chipCoinCua;
                minus = totalM -= 1000;
                document.getElementById("money").innerHTML = minus;
                break;
            } else if (arrayObj[i].name === "ga") {
                chipCoinGa += chipCoin.getImg5();
                document.getElementById("coinGa").innerHTML = chipCoinGa;
                coinGaNum = chipCoinGa;
                minus = totalM -= 1000;
                document.getElementById("money").innerHTML = minus;
                break;
            } else if (arrayObj[i].name === "ca") {
                chipCoinCa += chipCoin.getImg5();
                document.getElementById("coinCa").innerHTML = chipCoinCa;
                coinCaNum = chipCoinCa;
                minus = totalM -= 1000;
                document.getElementById("money").innerHTML = minus;
                break;
            } else if (arrayObj[i].name === "bau") {
                chipCoinBau += chipCoin.getImg5();
                document.getElementById("coinBau").innerHTML = chipCoinBau;
                coinBauNum = chipCoinBau;
                minus = totalM -= 1000;
                document.getElementById("money").innerHTML = minus;
                break;
            } else if (arrayObj[i].name === "tom") {
                chipCoinTom += chipCoin.getImg5();
                document.getElementById("coinTom").innerHTML = chipCoinTom;
                coinTomNum = chipCoinTom;
                minus = totalM -= 1000;
                document.getElementById("money").innerHTML = minus;
                break;
            }
        }
    }
}

function chipPlus6() {
    for (let i = 0; i < arrayObj.length; i++) {
        if (arrayObj[i].status === false) {
        } else {
            if (arrayObj[i].name === "nai") {
                chipCoinNai += chipCoin.getImg6();
                document.getElementById("coinNai").innerHTML = chipCoinNai;
                coinNaiNum = chipCoinNai;
                minus = totalM -= 2000;
                document.getElementById("money").innerHTML = minus;
                break;
            } else if (arrayObj[i].name === "cua") {
                chipCoinCua += chipCoin.getImg6();
                document.getElementById("coinCua").innerHTML = chipCoinCua;
                coinCuaNum = chipCoinCua;
                minus = totalM -= 2000;
                document.getElementById("money").innerHTML = minus;
                break;
            } else if (arrayObj[i].name === "ga") {
                chipCoinGa += chipCoin.getImg6();
                document.getElementById("coinGa").innerHTML = chipCoinGa;
                coinGaNum = chipCoinGa;
                minus = totalM -= 2000;
                document.getElementById("money").innerHTML = minus;
                break;
            } else if (arrayObj[i].name === "ca") {
                chipCoinCa += chipCoin.getImg6();
                document.getElementById("coinCa").innerHTML = chipCoinCa;
                coinCaNum = chipCoinCa;
                minus = totalM -= 2000;
                document.getElementById("money").innerHTML = minus;
                break;
            } else if (arrayObj[i].name === "bau") {
                chipCoinBau += chipCoin.getImg6();
                document.getElementById("coinBau").innerHTML = chipCoinBau;
                coinBauNum = chipCoinBau;
                minus = totalM -= 2000;
                document.getElementById("money").innerHTML = minus;
                break;
            } else if (arrayObj[i].name === "tom") {
                chipCoinTom += chipCoin.getImg6();
                document.getElementById("coinTom").innerHTML = chipCoinTom;
                coinTomNum = chipCoinTom;
                minus = totalM -= 2000;
                document.getElementById("money").innerHTML = minus;
                break;
            }
        }
    }
}