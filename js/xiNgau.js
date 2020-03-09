class XiNgau {
    constructor(changeImage1, changeImage2, changeImage3) {
        this.changeImage1 = changeImage1;
        this.changeImage2 = changeImage2;
        this.changeImage3 = changeImage3;

        this.getimage1 = function () {
            return this.changeImage1 = Math.floor(Math.random() * 6);
        }
        this.getimage2 = function () {
            return this.changeImage2 = Math.floor(Math.random() * 6);
        }
        this.getimage3 = function () {
            return this.changeImage3 = Math.floor(Math.random() * 6);
        }
    }

}

function convert() {
    let change_image1 = ["image/nai.jpg", "image/cua.jpg", "image/ga.jpg",
        "image/ca.jpg", "image/bau.jpg", "image/tom.jpg"];
    let change_image2 = ["image/nai.jpg", "image/cua.jpg", "image/ga.jpg",
        "image/ca.jpg", "image/bau.jpg", "image/tom.jpg"];
    let change_image3 = ["image/nai.jpg", "image/cua.jpg", "image/ga.jpg",
        "image/ca.jpg", "image/bau.jpg", "image/tom.jpg"];

    let xiNgau = new XiNgau(change_image1, change_image2, change_image3);
    let time = 45;
    let timeValue = setInterval(function () {
        change1 = xiNgau.getimage1();
        document.getElementById("xiNgau1").src = change_image1 [change1];
        change2 = xiNgau.getimage2();
        document.getElementById("xiNgau2").src = change_image2 [change2];
        change3 = xiNgau.getimage3();
        document.getElementById("xiNgau3").src = change_image3 [change3];
        time = time - 1;
        if (time <= 0) {
            clearInterval(timeValue);
        }
    }, 50);

}


