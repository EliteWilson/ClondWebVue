import { ItemList } from "../JS/AllMerchData.js";

document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll("#nav__menu li");
    const popInner = document.getElementById("popInner");
    const popTitle = document.getElementById("pop_Title");
    const popBlock = document.getElementById("popBlock");

    let hideTimeout; // 設置計時器變數

    menuItems.forEach(item => {

        item.addEventListener("mouseover", (e) => {
            if (e.target.textContent === "用戶指南") {
                return; // 直接返回，不做任何處理
            }
            clearTimeout(hideTimeout); // 清除計時器，防止過早隱藏

            const selectedTitle = e.target.id;
            const filteredItems = ItemList.filter(item => item.title === selectedTitle);

            // 更新標題
            popTitle.textContent = e.target.textContent;

            // 清空原有內容
            popInner.querySelectorAll("p").forEach(p => p.remove());

            // 動態生成 <p> 內容
            filteredItems.forEach(item => {
                const pElement = document.createElement("p");
                pElement.classList.add("col-5", "fs-6", "ms-3", "my-2");
                pElement.textContent = item.txt;
                popInner.appendChild(pElement);
            });

            // 顯示 popBlock
            popBlock.style.display = "block";
        });

        item.addEventListener("mouseleave", () => {
            // 當滑鼠離開 li 時，啟動 300ms 計時器才隱藏，避免快速消失
            hideTimeout = setTimeout(() => {
                popBlock.style.display = "none";
            }, 300);
        });
    });

    // 當滑鼠移到 popBlock 內，取消隱藏計時器，確保不會消失
    popBlock.addEventListener("mouseover", () => {
        clearTimeout(hideTimeout);
        popBlock.style.display = "block";
    });

    // 當滑鼠離開 popBlock，開始倒數隱藏
    popBlock.addEventListener("mouseleave", () => {
        hideTimeout = setTimeout(() => {
            popBlock.style.display = "none";
        }, 300);
    });
});