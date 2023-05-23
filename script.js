function logar() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('password').value;


    if (login == "juliana" && senha == "nakama") {
        
        location.href = "principal.html"
    } else {swal({
        title: "Ei",
        text: "Erro no usuário ou senha",
        icon: "error",
    });
    }


}
