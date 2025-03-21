import { NewItemData } from "../JS/NewItemData.js";

document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("newItem_merch");

    const row = document.createElement("div");
    row.classList.add("row", "justify-content-center", "align-items-center");

    function createMerchCard(data) {
        data.slice(0, 12).forEach(item => { // 限制只取前 12 筆
            const merchCard = document.createElement("div");
            merchCard.classList.add("merch_card");

            const link = document.createElement("a");
            link.href = "#";

            const img = document.createElement("img");
            img.src = item.url;
            img.alt = "merchcard";
            img.classList.add("img-fluid");

            // 更新：將商品名稱包裝在 <p> 標籤中
            const pText = document.createElement("p");
            pText.textContent = item.txt;
            link.appendChild(img);
            link.appendChild(pText);

            // 新增一個 p 元素並設置 id 為 price
            const pPrice = document.createElement("p");
            pPrice.id = "price";
            pPrice.textContent = item.price + "$"; // 顯示價格

            // 售罄標籤
            const soldOut = document.createElement("div");
            soldOut.classList.add("ifSoldOut");
            soldOut.textContent = "售罄";
            if (item.instock) {
                soldOut.style.display = "none"; // 如果有庫存，隱藏售罄標籤
            }
            merchCard.appendChild(link);
            merchCard.appendChild(pPrice);
            merchCard.appendChild(soldOut);
            row.appendChild(merchCard);
        });
        container.appendChild(row);
    }
    createMerchCard(NewItemData);
});