function validaOpiniao() {
    var opiniao = document.getElementById('opiniao').value;
    var isOpiniaoValida = opiniao.length >= 10;
    document.getElementById("span-opiniao").style.visibility = isOpiniaoValida ? "hidden" : "visible";
    validaForm();
}

function validaNome() {
    var nome = document.getElementById('nome').value;
    var isNomeValido = nome.length >= 5;
    document.getElementById("span-nome").style.visibility = isNomeValido ? "hidden" : "visible";
    validaForm();
}

function validarEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
} 

function validaEmail() {
    var email = document.getElementById('email').value;
    var isEmailValido = validarEmail(email);
    document.getElementById("span-email").style.visibility = isEmailValido ? "hidden" : "visible";
    validaForm();
}

function formataTelefone() {
    const phoneInput = document.getElementById('phone');
    const aviso = document.getElementById('span-phone');

    let input = phoneInput.value;

    // Detecta se o usuário digitou algo que não é número
    if (/\D/.test(input.replace(/[\(\)\s\-]/g, ''))) {
        aviso.textContent = "Digite apenas números";
        aviso.style.visibility = "visible";
    } else {
        aviso.textContent = "Digite um telefone válido";
    }

    // Remove caracteres que não sejam números
    let apenasNumeros = input.replace(/\D/g, '');

    // Limita a 11 dígitos
    apenasNumeros = apenasNumeros.slice(0, 11);

    // Aplica a máscara: (XX) XXXXX-XXXX
    let formatado = apenasNumeros;

    if (apenasNumeros.length > 2 && apenasNumeros.length <= 7) {
        formatado = `(${apenasNumeros.slice(0, 2)}) ${apenasNumeros.slice(2)}`;
    } else if (apenasNumeros.length > 7) {
        formatado = `(${apenasNumeros.slice(0, 2)}) ${apenasNumeros.slice(2, 7)}-${apenasNumeros.slice(7, 11)}`;
    }

    phoneInput.value = formatado;

    validaTelefone();
}

function validaTelefone() {
    const phoneInput = document.getElementById('phone');
    const phone = phoneInput.value.replace(/\D/g, ''); // Apenas números
    const aviso = document.getElementById("span-phone");

    const isPhoneValid = phone.length === 11;

    if (isPhoneValid) {
        aviso.style.visibility = "hidden";
    } else {
        aviso.textContent = "O telefone deve ter 11 dígitos (com DDD)";
        aviso.style.visibility = "visible";
    }

    validaForm();
}

function validaIndicacao() {
    validaForm();
}

function validaForm() {
    var opiniao = document.getElementById('opiniao').value;
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var isSimChecked = document.getElementById("sim").checked;
    var isNaoChecked = document.getElementById("nao").checked;

    var isFormValido = opiniao.length >= 10 && nome.length >= 5 && validarEmail(email) && phone.length === 15 && (isSimChecked || isNaoChecked);

    document.getElementById("btn-submit").disabled = !isFormValido;
}