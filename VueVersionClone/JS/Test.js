import { NewItemData } from "../JS/NewItemData.js";

document.addEventListener("DOMContentLoaded", function() {

    const container = document.querySelector("#recommand #newItem_merch .row");
    if (container) {
        createMerchCard(NewItemData);
    } else {
        console.error("找不到 #recommand #newItem_merch .row");
    }

    function createMerchCard(data) {
        data.slice(0, 11).forEach(items => {
            const carD = document.createElement("div");
            carD.classList.add("merch_card");
            const link = document.createElement("a");
            link.href = "#";
            const imG = document.createElement("img");
            imG.src = items.url;
            imG.alt = "recommand";
            imG.classList.add("img-fluid");

            const p = document.createElement("p");
            p.textContent = items.txt;
            const pricE = document.createElement("p");
            pricE.id = "price"
            pricE.textContent = items.price;
            const ifSoldOut = document.createElement("div");
            ifSoldOut.classList.add("ifSoldOut");
            ifSoldOut.textContent = "售完"
            if (items.instock === true) {
                ifSoldOut.style.display = "none";
            }
            carD.appendChild(link);
            link.appendChild(imG);
            link.appendChild(p);
            carD.appendChild(pricE);
            carD.appendChild(ifSoldOut);
            container.appendChild(carD);
        });
    }
    // createMerchCard(NewItemData);備用開關
});