function Logar() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    if (login == 'admin@gmail.com' && senha == 'teste') {
        console.log(`Esse é o login:${login} essa é a senha:${senha}`);
        console.log('Usuarios corretos');
        Swal.fire({
            title: "Carregando..",
            text: "Bem vindo ao site !",
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerInterval = setInterval(() => {
                    timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        }).then((result) => {
            /* finalizando o load e abrindo a pagina*/
            if (result.dismiss === Swal.DismissReason.timer) {
                location.href = "/Dashboard/Index.cshtml";
            }
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops..",
            text: "Usuário ou senha inválidos"
        });
        console.log(`Esse é o login:${login} essa é a senha:${senha}`);
        console.log('Usuário ou senha inválidos');
    }
}

