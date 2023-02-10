{
    let tipElement = document.querySelector(".js-tip");
    let countButtonElement = document.querySelector(".js-countButton");

    countButtonElement.addEventListener("click", () => {
        tipElement.innerText = `*płatność rozkładana na 3 raty`
    });
}

{
    let dlugElement = document.querySelector(".js-dlug");
    let formElement = document.querySelector(".js-form");
    let rataElement = document.querySelector(".js-rata");

    const txt = "";

    formElement.addEventListener("submit", (e) => {
        e.preventDefault();

        let dlug = dlugElement.value;
        let cheaper = dlugElement.value * 0.03;


        switch (true) {
            case (dlug <= 1500):
                rataElement.innerText = txt + `349 zł*`;
                break;
            case (dlug <= 2500):
                rataElement.innerText = txt + `479 zł*`;
                break;
            case (dlug <= 5000):
                rataElement.innerText = txt + `559 zł*`;
                break;
            case (dlug <= 7500):
                rataElement.innerText = txt + `729 zł*`;
                break;
            case (dlug <= 10000):
                rataElement.innerText = txt + `859 zł*`;
                break;
            case (dlug <= 15000):
                rataElement.innerText = txt + `1129 zł*`;
                break;
            case (dlug <= 20000):
                rataElement.innerText = txt + `1229 zł*`;
                break;
            case (dlug <= 35000):
                rataElement.innerText = txt + `1369 zł*`;
                break;
            case (dlug <= 50000):
                rataElement.innerText = txt + `1499 zł*`;
                break;
            case (dlug <= 75000):
                rataElement.innerText = txt + `1699 zł*`;
                break;
            case (dlug <= 100000):
                rataElement.innerText = txt + `2399 zł*`;
                break;
            case (dlug <= 150000):
                rataElement.innerText = txt + `3249 zł*`;
                break;
            case (dlug > 150000):
                rataElement.innerText = txt + cheaper.toFixed(2);
                break;
        }
    });

}