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

// MODAL
const popupView = document.querySelectorAll(".pop-up"),
      popupMais = document.querySelectorAll(".popup_open"),
      popupClose = document.querySelectorAll(".popup_close");

        // Função para abrir o popup
        function abrirPopup(index) {
            popupView[index].classList.add("active-popup");
        }

        // Função para fechar o popup
        function fecharPopup() {
            popupView.forEach(popup => {
                popup.classList.remove("active-popup");
            });
            console.log("fecha");
        }

        // Adiciona o ouvinte de evento para abrir o popup
        popupMais.forEach((popup, index) => {
            popup.addEventListener("click", () => {
                abrirPopup(index);
            });
        });

        // Adiciona o ouvinte de evento para fechar o popup
        popupClose.forEach(popup => {
            popup.addEventListener("click", (event) => {
                event.stopPropagation();
                fecharPopup();
            });
        });