const API_BASE = "http://localhost:8888/api";

async function request(url, method = "GET", body) {
    const options = {
        method,
        headers: { "Content-Type": "application/json" }
    };

    if (body) options.body = JSON.stringify(body);

    const res = await fetch(url, options);
    if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "API error");
    }
    return res.json();
}

// AUTH
function apiLogin(data) {
    return request(`${API_BASE}/users/login`, "POST", data);
}

function apiRegister(data) {
    return request(`${API_BASE}/users/register`, "POST", data);
}

// ADMIN
function apiGetUsers() {
    return request(`${API_BASE}/admin/users`);
}


