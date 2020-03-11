class TotalMoney {
    constructor(money,payment) {
        this.money = money;
        this.payment = payment;

        this.getPayM = function () {
            return this.payment + this.money;
        }
    }
}
let totalMoney = document.getElementById("money").innerHTML;
let totalM = parseInt(totalMoney);
let payImg = document.getElementById("naptien");

let payM = new TotalMoney(totalM,payImg);

function pay_Money() {
     payImg = +prompt("nhập số tiền cần nạp");
    let pay = payM.getPayM();
    console.log(pay)
    // document.getElementById("money").innerHTML = pay;
}