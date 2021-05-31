// SELECT PICS
let pics = document.querySelectorAll('.pics')
for (let i = 0; i < pics.length; i++) {
    pics[i].addEventListener('click', setMyPic)
}

// Callback set image
function setMyPic() {
    // Récupere le container du taquin
    let container = document.querySelector('#game-container')
    // this représente mon image clické dans le contexte de mon callback
    //Récupere l'attribut src pour obtenir le chemin absolu de l'image
    let path = this.getAttribute('src')
    // Défini l'attribut visant à set le fond d'écran selon l'image clické et lui set une taille proportionnel au conteneur en vu de le découpers
    container.setAttribute('style', `background: url(${path});background-size:451px 451px`)
}