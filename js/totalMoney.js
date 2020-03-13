class TotalMoney {
    constructor(money,payment) {
        this.money = money;
        this.payment = payment;

        this.getPayM = function () {
            return this.money + this.payment ;
        }
    }
}
let totalMoney = document.getElementById("money").textContent;
let totalM = parseInt(totalMoney);

function pay_Money() {
     payImg = +prompt("nhập số tiền cần nạp");
    let payM = new TotalMoney(totalM,payImg);
    let pay = payM.getPayM();
    document.getElementById("money").innerHTML = pay;
    totalM = pay;
}