const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sidebar = document.getElementById("sidebar");

// OPEN MENU
menuBtn.addEventListener("click", () => {
    sidebar.style.right = "0";
});

// CLOSE MENU
closeBtn.addEventListener("click", () => {
    sidebar.style.right = "-100%";
});