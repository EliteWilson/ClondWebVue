document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("#delivery, #chatbot").forEach(function(button) {
        button.addEventListener("click", function() {
            showToast("此功能尚未開放");
        });
    });
});
// 簡單的 Toast 訊息函式
function showToast(message) {
    let toast = document.createElement("div");
    toast.textContent = message;
    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.left = "50%";
    toast.style.transform = "translateX(-50%)";
    toast.style.background = "rgba(100, 100, 100)";
    toast.style.color = "#fff";
    toast.style.padding = "10px 20px";
    toast.style.borderRadius = "5px";
    toast.style.zIndex = "9999";

    document.body.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 2000); // 2秒後自動消失
}