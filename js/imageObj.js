class ImageObj {
    constructor(image1, image2, image3, image4, image5, image6) {
        this.image1 = image1;
        this.image2 = image2;
        this.image3 = image3;
        this.image4 = image4;
        this.image5 = image5;
        this.image6 = image6;

        this.getImage1 = function () {
            status = "false";
            return this.image1 = status;
        };
        this.getImage2 = function () {
            status = "false";
            return this.image2 = status;
        };
        this.getImage3 = function () {
            status = "false";
            return this.image3 = status;
        };
        this.getImage4 = function () {
            status = "false";
            return this.image4 = status;
        };
        this.getImage5 = function () {
            status = "false";
            return this.image5 = status;
        };
        this.getImage6 = function () {
            status = "false";
            return this.image6 = status;
        };
    }
}

let imgNai = document.getElementById("nai");
let imgCua = document.getElementById("cua");
let imgGa = document.getElementById("ga");
let imgCa = document.getElementById("ca");
let imgBau = document.getElementById("bau");
let imgTom = document.getElementById("tom");
let chechImage = new ImageObj(imgNai, imgCua, imgGa, imgCa, imgBau, imgTom);

function convetStt() {
    convetimg1 = chechImage.getImage1();
    convetimg2 = chechImage.getImage2();
    convetimg3 = chechImage.getImage3();
    convetimg4 = chechImage.getImage4();
    convetimg5 = chechImage.getImage5();
    convetimg6 = chechImage.getImage6();
    status = "true";
    console.log(status);
}
