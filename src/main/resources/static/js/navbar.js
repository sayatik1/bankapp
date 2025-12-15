async function loadNavbar() {
    const res = await fetch("/components/navbar.html");
    const html = await res.text();
    document.getElementById("navbar").innerHTML = html;

    updateNavbar();
}

function updateNavbar() {
    const user = getUser();

    document.querySelectorAll("[data-guest]").forEach(e => {
        e.style.display = user ? "none" : "block";
    });

    document.querySelectorAll("[data-user]").forEach(e => {
        e.style.display = user && user.role === "USER" ? "block" : "none";
    });

    document.querySelectorAll("[data-admin]").forEach(e => {
        e.style.display = user && user.role === "ADMIN" ? "block" : "none";
    });
}

document.addEventListener("DOMContentLoaded", loadNavbar);



