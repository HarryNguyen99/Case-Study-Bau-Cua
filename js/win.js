function checkImage() {
    let imgNai = document.getElementById("nai").src;
    let cutstrNai = imgNai.substr(48, 55);
    let imgCua = document.getElementById("cua").src;
    let cutstrCua = imgCua.substr(48, 55);
    let imgGa = document.getElementById("ga").src;
    let cutstrGa = imgGa.substr(48, 55);
    let imgCa = document.getElementById("ca").src;
    let cutstrCa = imgCa.substr(48, 55);
    let imgBau = document.getElementById("bau").src;
    let cutstrBau = imgBau.substr(48, 55);
    let imgTom = document.getElementById("tom").src;
    let cutstrTom = imgTom.substr(48, 55);

    let imgXiNgau1 = document.getElementById("xiNgau1").src;
    let cutstrXiNgau1 = imgXiNgau1.substr(48, 55);
    let imgXiNgau2 = document.getElementById("xiNgau2").src;
    let cutstrXiNgau2 = imgXiNgau2.substr(48, 55);
    let imgXiNgau3 = document.getElementById("xiNgau3").src;
    let cutstrXiNgau3 = imgXiNgau3.substr(48, 55);

    let arrCutStrImgObj = [cutstrNai, cutstrCua, cutstrGa, cutstrCa, cutstrBau, cutstrTom];
    let arrCoinObj = [coinNaiNum, coinCuaNum, coinGaNum, coinCaNum, coinBauNum, coinTomNum];
    for (let i = 0; i < arrCutStrImgObj.length; i++){
        if (cutstrXiNgau1 === arrCutStrImgObj[i]) {
            let sum = 0;
            for (let j = 0; j < arrCoinObj.length; j++){
                if (arrCutStrImgObj[i] == arrCoinObj[j]){
                    sum = totalM + arrCoinObj[i];
                    console.log(sum);
                    break;
                }
            }

        }// }else if (){
        //
        // }
    }
}