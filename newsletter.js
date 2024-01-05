function mail () {
    var newsletter = document.getElementById("email")
        if (newsletter.value.indexOf('@') == -1) {
            alert("Echec de l'inscription...");
            document.getElementById("email").className = "invalide"
        }else {
            alert("Inscription terminée !")
            document.getElementById("email").className = ""
        }
}

document.getElementById("inscription").addEventListener("click", mail)