document.addEventListener("DOMContentLoaded", () => {
    requireGuest();

    const form = document.getElementById("loginForm");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = form.email.value;
        const password = form.password.value;

        try {
            const user = await apiLogin({ email, password });
            saveUser(user);
            redirectByRole();
        } catch (err) {
            alert("Login failed");
        }
    });
});




