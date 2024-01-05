/*Demande Insta Facebook*/

function instagram () {
    return confirm("Voulez-vous aller sur Instagram ?");
}

function facebook () {
    return confirm("Voulez-vous aller sur FaceBook ?");
}

/*Survol des CTA*/

function cta1 () {
    document.getElementById("cta1").className = "survol"
}

function cta2 () {
    document.getElementById("cta2").className = "survol"
}

function cta3 () {
    document.getElementById("cta3").className = "survol"
}

function retour1 () {
    document.getElementById("cta1").className = "CTA"
}

function retour2 () {
    document.getElementById("cta2").className = "CTA"
}

function retour3 () {
    document.getElementById("cta3").className = "CTA"
}

document.getElementById("cta1").addEventListener("mouseover", cta1)
document.getElementById("cta2").addEventListener("mouseover", cta2)
document.getElementById("cta3").addEventListener("mouseover", cta3)
document.getElementById("cta1").addEventListener("mouseout", retour1)
document.getElementById("cta2").addEventListener("mouseout", retour2)
document.getElementById("cta3").addEventListener("mouseout", retour3)

/*Formulaire*/

function formulaire () {  
    var nom = document.getElementById("name").value;
    var mail = document.getElementById("mail").value;
    var sujet = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    if (document.form.name.value == "" || document.form.mail.value == "" || document.form.subject.value == "" || document.form.message.value == "") {
        if (document.form.name.value == "") {
            var messageNom = "Veuillez saisir votre nom.";
            document.getElementById("name").style.border = "1px solid red";
        }else {
            var messageNom = ""
            document.getElementById("name").style.border = "none"
        }
        if ((document.form.mail.value == "") || (document.form.mail.value.indexOf('@') == -1)){
            var messageMail = "Veuillez saisir votre email.";
            document.getElementById("mail").style.border = "1px solid red";
        }else {
            var messageMail = ""
            document.getElementById("mail").style.border = "none"
        }
        if (document.form.subject.value == "") {
            var messageSujet = "Veuillez choisir votre sujet.";
            document.getElementById("subject").style.border = "1px solid red";
        }else {
            var messageSujet = ""
            document.getElementById("subject").style.border = "none"
        }
        if (document.form.message.value == "") {
            var messageMessage = "Veuillez saisir votre message.";
            document.form.message.style.border = "1px solid red";
        }else {
            var messageMessage = ""
            document.form.message.style.border = "none";
        }
        alert(messageNom + "\u000A" + messageMail + "\u000A" + messageSujet + "\u000A" + messageMessage)
}   else {
        var resume = ("Veuillez vérifier les informations avant l'envoi de votre message.\u000ANom : " + nom+ "\u000A" + "Email : "+ mail + "\u000A" + "Sujet : " + sujet + "\u000A" + "Message : " + message + "\u000A\u000A" + " Voulez-vous envoyer votre message ?")
        if (confirm(resume)) {
            alert("Message envoyé !")
            document.form.reset()
        }else {
        }
    }}

document.getElementById("formulaire").addEventListener("click",formulaire)