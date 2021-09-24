const enviar = document.querySelector('button[type="submit"]');
const erro = [document.getElementById('erro1'), document.getElementById('erro2'),
    document.getElementById('erro3'), document.getElementById('erro4')
];

enviar.addEventListener('click', validarLogin, false);

function validarLogin() {
    let $nome = document.getElementById('primeiro-nome');
    let $sobrenome = document.getElementById('segundo-nome');
    let $Email = document.getElementById('email');
    let $senha = document.getElementById('senha');

    if ($nome.value === "") {
        $nome.classList.add('alert');

        erro[0].style.display = "block";
    } else {
        $nome.classList.remove('alert');
        erro[0].style.display = "none";
    }

    if ($sobrenome.value === "") {
        $sobrenome.classList.add('alert');
        erro[1].style.display = "block";
    } else {
        $sobrenome.classList.remove('alert');
        erro[1].style.display = "none";
    }

    if ($Email.value === "" || !validarEmail($Email.value)) {
        $Email.classList.add('alert');
        erro[2].style.display = "block";
    } else {
        $Email.classList.remove('alert');
        erro[2].style.display = "none";
    }

    if ($senha.value === "") {
        $senha.classList.add('alert');

        erro[3].style.display = "block";
    } else {
        $senha.classList.remove('alert');
        erro[3].style.display = "none";
    }


}

function validarEmail(email) {
    return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email);
}