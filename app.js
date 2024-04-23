// Alternar entre os icones da senha
const ShowHide = document.querySelectorAll(".show_hide"),
    ShowPass = document.querySelectorAll(".input_password");

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

// CONFIRME A SENHA
const senhaInput = document.getElementById('senha');
const confirmarSenhaInput = document.getElementById('confirmarSenha');
const message = document.getElementById('pass_message');
const singupBtn = document.getElementById('singup_btn');


senhaInput.addEventListener('input', validarSenhas);
confirmarSenhaInput.addEventListener('input', validarSenhas);

function validarSenhas() {
    const senha = senhaInput.value;

    var comprimentoMinimo = 8;
    var possuiCaracteresEspeciais = /[!@#$%^&*(),.?":{}|<>]/.test(senha);
    var possuiLetrasMaiusculas = /[A-Z]/.test(senha);
    var possuiLetrasMinusculas = /[a-z]/.test(senha);
    var possuiNumeros = /[0-9]/.test(senha);

    if (senhaInput.value === confirmarSenhaInput.value &&
        senha.length >= comprimentoMinimo &&
        possuiCaracteresEspeciais &&
        possuiLetrasMaiusculas &&
        possuiLetrasMinusculas &&
        possuiNumeros) {
        message.innerHTML = 'Senhas coincidem e Senha forte.';
        message.style.color = 'var(--cor-sete)';
        singupBtn.disabled = false;
    } else {
        message.innerHTML = 'Senhas não coincidem e/ou Senha fraca.';
        message.style.color = 'var(--cor-error)';
        singupBtn.disabled = true;  
    }
}

// FECHAR CADASTRAR
document.querySelector('.sing_close').addEventListener('click', function() {
    document.querySelector('.singup_box').classList.add('transformed');
});

// ABRIR CADASTRAR
document.querySelector('.singup_btn').addEventListener('click', function() {
    document.querySelector('.singup_box').classList.remove('transformed');
});

// DEIXA A CLASSE TRANSFORMED ADICIONADA QUANDO INICIA A PAGINA
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.singup_box').classList.add('transformed');
});