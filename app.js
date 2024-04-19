const ShowHide = document.querySelectorAll(".show_hide"),
    ShowPass = document.querySelectorAll(".input_password");

// Alternar entre os icones da senha
ShowHide.forEach(Icon => {
    Icon.addEventListener("click", () => {
        ShowPass.forEach(Password => {
            if (Password.type === "password") {
                Password.type = "text";
                Icon.classList.replace("fa-eye-slash", "fa-eye");
            } else {
                Password.type = "password";
                Icon.classList.replace("fa-eye", "fa-eye-slash");
            }
        });
    });
});