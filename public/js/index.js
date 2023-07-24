const myModal = new bootstrap.Modal("#register-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");

//VER SE TEM ALGO LOGADO NO SISTEMA
checkLogged();

//LOGAR NO SISTEMA
document.getElementById("form-login").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email-input").value;
    const senha = document.getElementById("password-input").value;
    const checkSession = document.getElementById("session-check").checked;

    const account = getAccount(email);

    if(!account){
        alert("Conta não encontrada!");
        return;
    }

    if(account){
        if(account.senha !== senha){
            alert("Conta não encontrada!*");
            return;
        }

        saveSession(email, checkSession);

        window.location.href = "home.html";

    }

});

//CRIAR CONTA

document.getElementById("create-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email-create-input").value;
    const senha = document.getElementById("password-creat-input").value;

    if(email.length < 8){
        alert("Email inválido!");
        return;
    }

    if(senha.length < 5){
        alert("Senha muito curta.");
        return;
    }

    saveAccount({
        login: email,
        senha: senha,
        transactions: []
    });

    myModal.hide();
    alert("CONTA CRIADA COM SUCESSO!");
});

function checkLogged(){
    if(session){
        sessionStorage.setItem("logged", session);
        logged = session;
    }

    if(logged){
        saveSession(logged, session);
    
        window.location.href = "home.html";
    }
}

function saveAccount(data){
    localStorage.setItem(data.login, JSON.stringify(data));
}

function getAccount(key){
    const account = localStorage.getItem(key);

    if(account){
        return JSON.parse(account);
    }

    return "";
}

function saveSession(data, saveSession){
    if(saveSession){
        localStorage.setItem("session", data);
    }

    sessionStorage.setItem("logged", data);
}