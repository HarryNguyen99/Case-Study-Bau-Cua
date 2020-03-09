class ImageObj {
    constructor(image1, image2, image3, image4, image5, image6) {
        this.image1 = image1;
        this.image2 = image2;
        this.image3 = image3;
        this.image4 = image4;
        this.image5 = image5;
        this.image6 = image6;

        this.getImage1 = function () {
            return this.image1 = status("true");
        }
    }
}

let imgNai = document.getElementById("nai");
let imgCua = document.getElementById("cua");
let imgGa = document.getElementById("ga");
let imgCa = document.getElementById("ca");
let imgBau = document.getElementById("bau");
let imgTom = document.getElementById("tom");
let chechImage = new ImageObj(imgNai, imgCua, imgGa, imgCa, imgBau, imgTom);

