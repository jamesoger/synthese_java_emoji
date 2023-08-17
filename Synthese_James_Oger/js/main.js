//trouver les balises

let div_conteneur = document.querySelector(".conteneur")
let form = document.forms.formulaire
let input_texte = form.texte
let input_moins = form.btn_moins
let input_plus = form.btn_plus
let chiffre = document.querySelector(".chiffre")
let forme_emoji = form.forme_emoji
let yeux1 = document.querySelector(".yeux_1")
let yeux2 = document.querySelector(".yeux_2")
let yeux3 = document.querySelector(".yeux_3")
let nom = document.querySelector(".nom")
let select_bouche = form.select_bouche
let bordure = document.querySelector(".bordure")

//fonction rand

function rand(min, max) {
    let decalage = max - min + 1

    let aleatoire = Math.random()
    let entier_aleatoire = Math.floor(aleatoire * decalage)

    return min + entier_aleatoire
}

//creer emoji de départ

let emoji_div = document.createElement("div")
div_conteneur.append(emoji_div)
emoji_div.style.width = "200px"
emoji_div.style.height = "200px" 
emoji_div.style.backgroundColor = "#4287f5"
emoji_div.style.display = "flex"
emoji_div.style.justifyContent = "center"
emoji_div.style.position = "absolute"
emoji_div.style.top = "60%"
emoji_div.style.bottom = "20%"
emoji_div.style.marginTop= "8%"


//changer la couleur d'arriere-plan toutes les 5 secondes

function changeBackground (){
    let r = rand(0, 255)
    let g = rand(0, 255)
    let b = rand(0, 255)

    emoji_div.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")"

}

setInterval(changeBackground, 5000)

// changer le texte

input_texte.addEventListener("input", e => {
    e.preventDefault()

//afficher le texte dans la page
 let texte_choisi = input_texte.value   
 nom.textContent = texte_choisi

})

 //  changer la forme de l'emoji
forme_emoji.addEventListener("input", e=>{
    e.preventDefault()


if(forme_emoji.value == "carre" ){

    emoji_div.style.width = "200px"
    emoji_div.style.height = "200px"
    emoji_div.style.borderRadius = "0"   
}
if(forme_emoji.value == "cercle" ){
    
    emoji_div.style.borderRadius =" 100% 100%  100% 100%/100% 100%  100% 100% "  
    emoji_div.style.width = "200px"
    emoji_div.style.height = "200px"   
 }

 if(forme_emoji.value == "egg" ){
    
    emoji_div.style.width = "196px"
    emoji_div.style.height = "260px"
     emoji_div.style.borderRadius = "50% 50% 50% 50% / 60% 60% 40% 40%"

 }

})

//créer les yeux(1) et l'oeil1
let forme_yeux1 = document.createElement("div")
emoji_div.append(forme_yeux1)
forme_yeux1.style.width = "38px"
forme_yeux1.style.height = "38px"
forme_yeux1.style.backgroundColor = "#ffffff"
forme_yeux1.style.marginRight= "30px"
forme_yeux1.style.marginTop = "40px"
forme_yeux1.style.position= "absolute"
forme_yeux1.style.left = "50px"
forme_yeux1.style.border = "2px solid black"


let oeil1 = document.createElement("div")
forme_yeux1.append(oeil1)
oeil1.style.width = "10px"
oeil1.style.height = "10px"
oeil1.style.backgroundColor = "#0d0d0d"
oeil1.style.borderRadius = "100px"
oeil1.style.margin = "0 auto"
oeil1.style.marginTop = "13px"

//creer les yeux(2) et l'oeil 
let forme_yeux2 = document.createElement("div")
emoji_div.append(forme_yeux2)
forme_yeux2.style.width = "38px"
forme_yeux2.style.height = "38px"
forme_yeux2.style.backgroundColor = "#ffffff"
forme_yeux2.style.marginTop = "40px"
forme_yeux2.style.position= "absolute"
forme_yeux2.style.right = "50px"
forme_yeux2.style.border = "2px solid black"

let oeil2 = document.createElement("div")
forme_yeux2.append(oeil2)
oeil2.style.width = "10px"
oeil2.style.height = "10px"
oeil2.style.backgroundColor = "#0d0d0d"
oeil2.style.borderRadius = "100px"
oeil2.style.margin = "0 auto"
oeil2.style.marginTop = "13px"



//changer la forme des yeux

yeux1.addEventListener("click", e=>{
    e.preventDefault()

    forme_yeux1.style.borderRadius = "0px"
    forme_yeux1.style.width = "38px"
    forme_yeux1.style.height = "38px"
    forme_yeux1.style.marginRight= "30px"
    forme_yeux1.style.marginTop = "40px"

    forme_yeux2.style.borderRadius = "0px"
    forme_yeux2.style.width = "38px"
    forme_yeux2.style.height = "38px"
    forme_yeux2.style.marginTop = "40px"
})


yeux2.addEventListener("click", e=>{
    e.preventDefault()

    forme_yeux2.style.borderRadius = "100px"
    forme_yeux1.style.borderRadius = "100px"
    
})

yeux3.addEventListener("click", e=>{
    e.preventDefault()
    
    forme_yeux1.style.borderRadius = "10px"
    forme_yeux1.style.borderTopRightRadius = "38px"
    forme_yeux1.style.borderTopLeftRadius = "38px"

    forme_yeux2.style.borderRadius = "10px"
    forme_yeux2.style.borderTopRightRadius = "38px"
    forme_yeux2.style.borderTopLeftRadius = "38px"
    
})


//creer la bouche

let bouche = document.createElement("div")
emoji_div.append(bouche)
bouche.style.width = "30px"
bouche.style.height = "42px"
bouche.style.backgroundColor = "#ffffff"
bouche.style.position = "relative"
bouche.style.top ="110px"
bouche.style.border = "2px solid black"
bouche.style.borderRadius = "20px"


 //changer la forme de la bouche


select_bouche.addEventListener("input", e=>{
    e.preventDefault()


if(select_bouche.value == "bouche1" ){

    bouche.style.width = "30px"
    bouche.style.height = "42px"
    bouche.style.borderRadius = "20px"
   
}

if(select_bouche.value == "bouche2" ){
    
    bouche.style.borderRadius = "20px" 
    bouche.style.width = "62px" 
    bouche.style.height = "30px"
    bouche.style.borderTopRightRadius = "60px"
    bouche.style.borderTopLeftRadius = "60px"
 }

 if(select_bouche.value == "bouche3" ){

    bouche.style.borderRadius = "30px"
    bouche.style.borderBottomRightRadius = "100px"
    bouche.style.borderBottomLeftRadius = "100px"
    bouche.style.width = "62px" 
    bouche.style.height = "30px"
 }

})


//dynamiser les boutons du chiffre et augmenter ou diminuer la bordure
emoji_div.style.border = " 1px solid black"



input_plus.addEventListener("click",e=>{
    e.preventDefault()

    chiffre.value++
    if( chiffre.value >= 10) {
       chiffre.value = 10  
    }
    emoji_div.style.borderWidth = chiffre.value + "px"

})


input_moins.addEventListener("click",e=>{
    e.preventDefault()

    chiffre.value -- 

    if(chiffre.value <= 0) {
        chiffre.value = 0
    }
    emoji_div.style.borderWidth = chiffre.value + "px"
})



 

 