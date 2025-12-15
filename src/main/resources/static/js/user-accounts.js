requireAuth();

document.addEventListener("DOMContentLoaded", async () => {
    const user = getUser();
    const accounts = await apiUserAccounts(user.id);

    const list = document.getElementById("accounts");
    accounts.forEach(a => {
        list.innerHTML += `<li>${a.accountNumber} — ${a.balance}</li>`;
    });
});

