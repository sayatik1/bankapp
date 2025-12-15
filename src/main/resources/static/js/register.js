document.addEventListener("DOMContentLoaded", () => {
    requireGuest();

    const form = document.getElementById("registerForm");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const data = {
            email: form.email.value,
            password: form.password.value,
            name: form.name.value
        };

        try {
            const user = await apiRegister(data);
            saveUser(user);
            redirectByRole();
        } catch (err) {
            alert("Registration failed");
        }
    });
});


