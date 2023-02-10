let countButtonElement = document.querySelector(".js-countButton");

{
    let tipElement = document.querySelector(".js-tip");
    countButtonElement.addEventListener("click", () => {
        tipElement.innerText = `*płatność rozkładana na 3 raty`
    });
}
{
    let discount = document.querySelector(".js-discount");
    countButtonElement.addEventListener("click", () => {
        discount.innerHTML = `<button class="js-buttonDiscount section__buttonDiscount"> kliknij po rabat </button>`
    });
}

{
    let debtElement = document.querySelector(".js-debt");
    let formElement = document.querySelector(".js-form");
    let partElement = document.querySelector(".js-part");

    const txt = "";

    formElement.addEventListener("submit", (e) => {
        e.preventDefault();

        let debt = debtElement.value;
        let cheaper = debtElement.value * 0.03;


        switch (true) {
            case (debt <= 1500):
                partElement.innerText = txt + `349 zł*`;
                break;
            case (debt <= 2500):
                partElement.innerText = txt + `479 zł*`;
                break;
            case (debt <= 5000):
                partElement.innerText = txt + `559 zł*`;
                break;
            case (debt <= 7500):
                partElement.innerText = txt + `729 zł*`;
                break;
            case (debt <= 10000):
                partElement.innerText = txt + `859 zł*`;
                break;
            case (debt <= 15000):
                partElement.innerText = txt + `1129 zł*`;
                break;
            case (debt <= 20000):
                partElement.innerText = txt + `1229 zł*`;
                break;
            case (debt <= 35000):
                partElement.innerText = txt + `1369 zł*`;
                break;
            case (debt <= 50000):
                partElement.innerText = txt + `1499 zł*`;
                break;
            case (debt <= 75000):
                partElement.innerText = txt + `1699 zł*`;
                break;
            case (debt <= 100000):
                partElement.innerText = txt + `2399 zł*`;
                break;
            case (debt <= 150000):
                partElement.innerText = txt + `3249 zł*`;
                break;
            case (debt > 150000):
                partElement.innerText = txt + cheaper.toFixed(2);
                break;
        }
    });

}