var btnNumbers = document.querySelectorAll(".number");
var cardNumbers = document.querySelector(".card-container");
var cardTanks = document.querySelector(".card-thanks");
var btnSubmit = document.querySelector("#submit");
var msgNumber = document.querySelector(".quantidade");

btnNumbers.forEach(n => {
    n.addEventListener("click", function () {
        var txtNumber = this.textContent;

        btnNumbers.forEach(btn => {
            btn.style.background = "";
        });

        this.style.background = "hsl(217, 12%, 63%)";
        this.style.color = "hsl(0, 0%, 100%)";
        btnSubmit.addEventListener("click", function (){
            cardNumbers.style.opacity = "0";
            cardTanks.style.opacity = "1";
            cardTanks.style.margin = "-380px 0 0 0";
            msgNumber.textContent=txtNumber;
        });
    });
});
