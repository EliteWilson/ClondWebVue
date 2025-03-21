import { SeriesData } from "../JS/SeriesData.js"
import { CategoryData } from "../JS/CategoryData.js";
import { CharacterData } from "../JS/CharacterData.js";

// AIG-CGPT
document.addEventListener("DOMContentLoaded", function() {
    const section = document.getElementById("mobile_menu");

    function createMenu(title, data) {
        const details = document.createElement("details");
        const summary = document.createElement("summary");
        summary.textContent = title;

        const ul = document.createElement("ul");
        data.forEach(item => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            const p = document.createElement("p");

            p.textContent = item.txt;
            a.appendChild(p);
            li.appendChild(a);
            ul.appendChild(li);
        });

        details.appendChild(summary);
        details.appendChild(ul);
        section.appendChild(details);
    }
    createMenu("角色", CharacterData);
    createMenu("系列", SeriesData);
    createMenu("分類", CategoryData);
});