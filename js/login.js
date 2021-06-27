function Logar(){
    var email = "admin";
    var senha = "admin";

    var caixa1 = document.querySelector("#email").value;
    var caixa2 = document.querySelector("#senha").value;

    if(caixa1 == email && caixa2 == senha){
        window.open("file:///C:/Users/Adley%20Rodrigues/Desktop/ProjetoWEB/homeDespesa.html");
        //window.open("../homeDespesa.html", "_self");
        //window.location.href = "file:///C:/Users/Adley%20Rodrigues/Desktop/ProjetoWEB/homeDespesa.html";
    }else{
       window.alert("Login ou senha incorretos");
    }


}