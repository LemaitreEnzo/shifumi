// $$$$$$$$$$$$$$$$$$ PREMIERE PAGE $$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$ PREMIERE PAGE $$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$ PREMIERE PAGE $$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$ PREMIERE PAGE $$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$ PREMIERE PAGE $$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$ PREMIERE PAGE $$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$ PREMIERE PAGE $$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$ PREMIERE PAGE $$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$ PREMIERE PAGE $$$$$$$$$$$$$$$$$$$$$$$$$

// CAROUSEL D'AVATAR POUR LA PAGE D'ACCUEIL

imagesAvatar = document.querySelectorAll(".imagesAvatar img")

imagesAvatar[0].classList.add("show");

for (i = 1; i < imagesAvatar.length; i++) {
    imagesAvatar[i].classList.add("hidden");
}

let currentAvatarIndex = 0;

// BOUTON GAUCHE

function showNextAvatar() {

    imagesAvatar[currentAvatarIndex].classList.remove("show");
    imagesAvatar[currentAvatarIndex].classList.add("hidden");

    currentAvatarIndex = (currentAvatarIndex + 1) % imagesAvatar.length;

    imagesAvatar[currentAvatarIndex].classList.remove("hidden");
    imagesAvatar[currentAvatarIndex].classList.add("show");

    let srcAvatarFinal = currentAvatarIndex;

    srcAvatarFinal = currentAvatarIndex;

    let avatarFinal = document.querySelector("#avatarFinalUser img");

    avatarFinal.src = `assets/img/avatar${srcAvatarFinal + 1}.png`

}

const arrow = document.querySelector(".avant")

arrow.addEventListener("click", showNextAvatar)

// BOUTON DROIT

function showPrecAvatar() {

    imagesAvatar[currentAvatarIndex].classList.remove("show");
    imagesAvatar[currentAvatarIndex].classList.add("hidden");

    currentAvatarIndex = (currentAvatarIndex - 1 + imagesAvatar.length) % imagesAvatar.length;

    imagesAvatar[currentAvatarIndex].classList.remove("hidden");
    imagesAvatar[currentAvatarIndex].classList.add("show");

    let srcAvatarFinal = currentAvatarIndex;

    srcAvatarFinal = currentAvatarIndex;

    let avatarFinal = document.querySelector("#avatarFinalUser img");

    avatarFinal.src = `assets/img/avatar${srcAvatarFinal + 1}.png`
}

const arrow2 = document.querySelector(".prec")

arrow2.addEventListener("click", showPrecAvatar)

// DETECTER LES SAISIES LABEL(PSEUDO) ET LE CHOIX DE L'AVATAR

// PSEUDO

let confirmButton = document.querySelector("#confirmButton");

let inputPseudo = document.querySelector("#pseudo");

let pseudoUser = document.querySelector(".pseudoUser");
pseudoUser.innerText = inputPseudo.value

// SECTION DES DIFFERENTES PAGES HIDDEN ET SHOW

let accueilSection = document.querySelector("#accueil");

let gameSection = document.querySelector("#mainGame");
gameSection.classList.add("hidden");

let endGameSection = document.querySelector("#endGame");
endGameSection.style.display = "none";

confirmButton.addEventListener("click", function () {
    pseudoChoice = inputPseudo.value;
    pseudoUser.innerText = pseudoChoice;
    if (pseudoChoice.length == 0){
        alert("Veuillez entrez un pseudo");
    }else{
        accueilSection.classList.add("hidden");
        gameSection.classList.remove("hidden");
    }

})

// $$$$$$$$$$$$$$$$$$ DEUXIEME PAGE $$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$ DEUXIEME PAGE $$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$ DEUXIEME PAGE $$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$ DEUXIEME PAGE $$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$ DEUXIEME PAGE $$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$ DEUXIEME PAGE $$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$ DEUXIEME PAGE $$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$ DEUXIEME PAGE $$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$ DEUXIEME PAGE $$$$$$$$$$$$$$$$$$$$$$$$$

// CHOIX DU SIGNE USER

let listSigns = ["Pierre", "Feuille", "Ciseau"]

const signes = document.querySelectorAll(".signs img");

signes[0].addEventListener("mouseover", function () {
    signes[1].style.opacity = 0.4
    signes[2].style.opacity = 0.4
})

signes[0].addEventListener("mouseout", function () {
    signes[1].style.opacity = 1
    signes[2].style.opacity = 1
})

signes[1].addEventListener("mouseover", function () {
    signes[0].style.opacity = 0.4
    signes[2].style.opacity = 0.4
})

signes[1].addEventListener("mouseout", function () {
    signes[0].style.opacity = 1
    signes[2].style.opacity = 1
})

signes[2].addEventListener("mouseover", function () {
    signes[1].style.opacity = 0.4
    signes[0].style.opacity = 0.4
})

signes[2].addEventListener("mouseout", function () {
    signes[1].style.opacity = 1
    signes[0].style.opacity = 1
})

// CODAGE DE L'ANIMATION CHOIX DE L'IA

// On crée une variable contenant toutes les images de signes
// l'IA pourra choisir, et on les fait défiler une à une a un délais de 100ms
// Meme logique que pour la carousel du choix d'avatar, sauf qu'ici 
// le défilement est automatique, et permet également le choix final en temps réel de l'IA.

const signeIA = document.querySelectorAll(".ia img");

const pseudoChoiceIA = ["Suárez","Luis Tamayo","Alicia Sierra","Angel Rubio"]

function getRandom() {
    return Math.floor(Math.random() * pseudoChoiceIA.length)
}

let pseudoIa = document.querySelector("#pseudoIa");
let IndexPseudoIa = getRandom()
pseudoIa.innerText = pseudoChoiceIA[IndexPseudoIa];

let signeIACurrentIndex = 0;
let IaChoice;

signeIA[0].classList.add("show");
signeIA[1].classList.add("iaSignHidden");
signeIA[2].classList.add("iaSignHidden");

function signDefilement() {

    signeIA[signeIACurrentIndex].classList.remove("show");
    signeIA[signeIACurrentIndex].classList.add("iaSignHidden");

    signeIACurrentIndex = (signeIACurrentIndex + 1) % signes.length;

    signeIA[signeIACurrentIndex].classList.remove("iaSignHidden");
    signeIA[signeIACurrentIndex].classList.add("show");
    IaChoice = signeIA[signeIACurrentIndex];

}

let defilement = setInterval(signDefilement, 100);

// ARROW POUR REJOUER UN ROUND

// On vide le contenu innerText du résultat du round
// Et on ré-affiche les 2 signes qui auparavant étaient cachés
// De plus, on fait reprendre l'intervalle de défilement des signes de l'IA
// On cache également la flèche une fois qu'elle est cliquée
// Cela permet d'épurer l'ATH mais également d'éviter un double click et 
// de faire reprendre le setInterval deux fois de suite

let arrowBack = document.querySelector(".replayArrow");
arrowBack.classList.add("hidden")

arrowBack.addEventListener("click", function () {
    signes[0].classList.remove("hidden");
    signes[1].classList.remove("hidden");
    signes[2].classList.remove("hidden");
    arrowBack.classList.add("hidden")
    defilement = setInterval(signDefilement,100);
    resultat.innerText = ""
})

// AVATAR RANDOM

// On crée une variable qui a pour but de stocker une variable aléatoire
// Ce nombre entre 0 et 7 permet donc de préciser la source de l'image à aller chercher
// Car nos avatar sont stockés sous le format avatar{chiffre}.png
// Cette étape se fait automatiquement au chargement de la page, elle n'est pas déclenchée par un bouton

let avatarRandom = document.querySelector(("#randomAvatar"))
avatarRandom.src = `assets/img/policier${IndexPseudoIa+1}.png`

// SIGNE FINAL IA ET USER

// On cache les deux autres signes lorsqu'un signe est cliqué par l'utilsateur
// On récupère le contenu texte correspondant au signe dans une variable signeFINAL
// Cette variable sera ensuite comparée au signe de l'IA dans la section SQUELETTE DU JEU
// De plus, on affiche la flèche pour clicker dessus(fonctionnalités de la flèche expliquées au dessus)

let signeFINAL = "";

signes[0].addEventListener("click", function () {
    signeFINAL = "pierre"
    signes[1].classList.add("hidden");
    signes[2].classList.add("hidden");
    clearInterval(defilement);
    shifumi();
    arrowBack.classList.remove("hidden");
})
signes[1].addEventListener("click", function () {
    signeFINAL = "feuille"
    signes[0].classList.add("hidden");
    signes[2].classList.add("hidden");
    clearInterval(defilement);
    shifumi();
    arrowBack.classList.remove("hidden");
})
signes[2].addEventListener("click", function () {
    signeFINAL = "ciseau"
    signes[0].classList.add("hidden");
    signes[1].classList.add("hidden");
    clearInterval(defilement);
    shifumi();
    arrowBack.classList.remove("hidden");
})

// BOUTON RESULTAT DU ROUND

// Déclaration de la variable résultat "provisoire"
// Elle permet d'annonce dynamiquement l'issue de chaque round
// Cette variable est ré-utilisée dans la partie SQUELETTE DU JEU
// C'est ici qu'on y précise son contenu innerText

let resultat = document.querySelector(".result");

// COMPTE DES SCORES

// On déclare les variables de compteur des scores au préalarable
// et on les rend dynamique en HTML, elles seront modifiés au fur et à mesure
// des rounds. Ces variables permettent également la condition de passage 
// à la page 3, voir le commentaire ci-dessous

let scoreUser = document.querySelector("#scoreUser");
let scoreIA = document.querySelector("#scoreIA");

let compteurUser = 0;
let compteurIA = 0;

scoreUser.innerText = compteurUser;
scoreIA.innerText = compteurIA;

// SQUELETTE DU JEU QUI REGIT LES SCORES 

signeIA[0] = "pierre";
signeIA[1] = "feuille";
signeIA[2] = "ciseau";

function shifumi() {

    if (signeFINAL == "pierre") {
        if (IaChoice == signeIA[2]) {
            resultat.innerText = "Victoire";
            compteurUser += 1
            let audio = new Audio("assets/sound/choixSigne.mp3")
            audio.autoplay = true;
            audio.play();
        } else if (IaChoice == signeIA[1]) {
            resultat.innerText = "Perdu";
            compteurIA += 1
            let audio = new Audio("assets/sound/defeatSound.mp3")
            audio.autoplay = true;
            audio.play();
        } else {
            resultat.innerText = "Égalité";
        }

    } else if (signeFINAL == "ciseau") {
        if (IaChoice == signeIA[1]) {
            resultat.innerText = "Victoire";
            compteurUser += 1
            let audio = new Audio("assets/sound/choixSigne.mp3")
            audio.autoplay = true;
            audio.play();
        } else if (IaChoice == signeIA[0]) {
            resultat.innerText = "Perdu";
            compteurIA += 1
            let audio = new Audio("assets/sound/defeatSound.mp3")
            audio.autoplay = true;
            audio.play();
        } else {
            resultat.innerText = "Égalité";
        }

    } else if (signeFINAL == "feuille") {
        if (IaChoice == signeIA[0]) {
            resultat.innerText = "Victoire";
            compteurUser += 1
            let audio = new Audio("assets/sound/choixSigne.mp3")
            audio.autoplay = true;
            audio.play();
        } else if (IaChoice == signeIA[2]) {
            resultat.innerText = "Perdu";
            compteurIA += 1
            let audio = new Audio("assets/sound/defeatSound.mp3")
            audio.autoplay = true;
            audio.play();
        } else {
            resultat.innerText = "Égalité";
        }
    }

    // $$$$$$$$$$$$$$$$$$ CONDTION DE PASSAGE A LA PAGE 2 A 3 $$$$$$$$$$$$$$$$
    // $$$$$$$$$$$$$$$$$$ CONDTION DE PASSAGE A LA PAGE 2 A 3 $$$$$$$$$$$$$$$$
    // $$$$$$$$$$$$$$$$$$ CONDTION DE PASSAGE A LA PAGE 2 A 3 $$$$$$$$$$$$$$$$
    // $$$$$$$$$$$$$$$$$$ CONDTION DE PASSAGE A LA PAGE 2 A 3 $$$$$$$$$$$$$$$$
    // $$$$$$$$$$$$$$$$$$ CONDTION DE PASSAGE A LA PAGE 2 A 3 $$$$$$$$$$$$$$$$
    // $$$$$$$$$$$$$$$$$$ CONDTION DE PASSAGE A LA PAGE 2 A 3 $$$$$$$$$$$$$$$$
    // $$$$$$$$$$$$$$$$$$ CONDTION DE PASSAGE A LA PAGE 2 A 3 $$$$$$$$$$$$$$$$
    // $$$$$$$$$$$$$$$$$$ CONDTION DE PASSAGE A LA PAGE 2 A 3 $$$$$$$$$$$$$$$$
    // $$$$$$$$$$$$$$$$$$ CONDTION DE PASSAGE A LA PAGE 2 A 3 $$$$$$$$$$$$$$$$

    // Si l'un des deux joueurs a remporté la partie (cad avoir 6 points) ou
    // s'il y a égalité, on passe à la page 3

    if (compteurIA == 6 || compteurUser == 6) {
        accueilSection.classList.add("hidden");
        gameSection.classList.add("hidden");
        endGameSection.style.display = "flex";
    } else if (compteurIA == 5 && compteurUser == 5){
        accueilSection.classList.add("hidden");
        gameSection.classList.add("hidden");
        endGameSection.style.display = "flex";
    }

    let resultatFinal = document.querySelector(".resultFinal");
    let smileyFinal =  document.querySelector(".defeatAnimation img");

    // Pour les différentes issues possibles, on change dynamiquement le contenu HTML
    // On change le texte, le son et le smiley.

    if (compteurIA == 6) {
        resultatFinal.innerText = "Vous avez perdu. Direction la prison !";
        smileyFinal.src = "assets/img/policierDefaite.png";
        let audio = new Audio("assets/sound/policeSound.mp3")
        audio.autoplay = true;
        audio.play();
    } else if (compteurUser == 6) {
        resultatFinal.innerText = "Bravo ! Vous avez braqué la banque !";
        smileyFinal.src = "assets/img/billet.png";
        let audio = new Audio("assets/sound/moneySound.mp3")
        audio.autoplay = true;
        audio.play();
    } else if (compteurIA == 5 && compteurUser == 5){
        resultatFinal.innerText = "Égalité... La victoire se jouera à la force !";
        smileyFinal.src = "assets/img/pistoletEgalite.png";
        let audio = new Audio("assets/sound/armeDefaite.mp3")
        audio.autoplay = true;
        audio.play();
    }

    scoreUser.innerText = compteurUser;
    scoreIA.innerText = compteurIA;
}

// MENU BURGER POUR LES REGLES

// On implémente un toggle pour que le bouton affiche et cache la section rulesText a tour de role
// On floute aussi les éléments en arrière-plan lorsque les règles sont visibles
// On désactive le bouton confirmer lorsque les règles sont visibles pour bloquer les fonctionnalités
// lorsque la fenêtre des règles est ouverte

let icon = document.querySelector("#rulesIcon");
let rules = document.querySelector("#rulesText");
let sectionBlur = document.querySelector("#sectionBlur")
let sectionBlurSecond = document.querySelector("#sectionBlurSecond");
let isRulesVisible = false;

rules.classList.add("hidden");

icon.addEventListener("click", function(){
    rules.classList.toggle("hidden");
    isRulesVisible = !isRulesVisible;

    if (isRulesVisible) {
        sectionBlur.style.filter = "blur(4px)";
        sectionBlurSecond.style.filter = "blur(4px)"; 
        confirmButton.setAttribute("disabled","disabled");
        arrowBack.setAttribute("disabled","disabled")
    } else {
        sectionBlur.style.filter = "none";
        sectionBlurSecond.style.filter = "none";
        confirmButton.removeAttribute("disabled","disabled");
        arrowBack.removeAttribute("disabled","disabled")
    }
});