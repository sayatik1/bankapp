document.addEventListener("DOMContentLoaded", async () => {
    requireAdmin();

    try {
        const users = await apiGetUsers();
        console.log(users);
    } catch {
        alert("Cannot load users");
    }
});
