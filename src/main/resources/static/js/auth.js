function requireGuest() {
    if (isLoggedIn()) {
        redirectByRole();
    }
}

function requireUser() {
    if (!isUser()) {
        window.location.href = "/index.html";
    }
}

function requireAdmin() {
    if (!isAdmin()) {
        window.location.href = "/index.html";
    }
}

function redirectByRole() {
    const user = getUser();
    if (!user) {
        window.location.href = "/public/home.html";
        return;
    }

    if (user.role === "ADMIN") {
        window.location.href = "/admin/dashboard.html";
    } else {
        window.location.href = "/user/dashboard.html";
    }
}

function logout() {
    clearUser();
    window.location.href = "/public/login.html";
}


