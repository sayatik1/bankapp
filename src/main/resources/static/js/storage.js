function saveUser(user) {
    // Нормализация роли
    if (!user.role) {
        if (user.roles && user.roles.length > 0) {
            user.role = user.roles[0];
        } else if (user.authorities && user.authorities.length > 0) {
            user.role = user.authorities[0].authority.replace("ROLE_", "");
        }
    }

    localStorage.setItem("user", JSON.stringify(user));
}





