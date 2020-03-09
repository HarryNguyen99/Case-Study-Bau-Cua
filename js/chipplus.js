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
let arrImageObj = [imgNai, imgCua, imgGa, imgCa, imgBau, imgTom];

function chipPlus1() {
    for (let i = 0; i < arrImageObj.length; i++) {
        arrImageObj[i] = status;
        if (i == "false") {
        } else {
            chip1 = chipCoin.getImg1();;
            document.getElementById("coinNai").innerHTML = chip1;
        }
    }

}