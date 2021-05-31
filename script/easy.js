// Select les bouttons de difficulté
let easy = document.querySelector('#easy-btn')

//listenner set taquin difficulté
easy.addEventListener('click', setEasy, once = true)

// Callback set la difficulté sur easy et découpe le taquin en 3 colonnes et 3 lignes
function setEasy() {
    // Récup l'attribut style contenant le bg de l'image selectionner
    let container = document.querySelector('#game-container')

    let background = container.getAttribute('style')

    // Set l'image découpé et l'insert dans le dom via la methode sprite CSS
    let easy1 = document.createElement('div')
    //Set la premiere image en blanc (case vide)
    easy1.style.background = 'white';
    easy1.setAttribute('draggable', 'true')
    easy1.style.width = '150px'
    easy1.style.height = '150px'
    easy1.style.backgroundPosition = '0 0'
    easy1.classList.add('border', 'border-gray-500', 'text-white','text-2xl','font-bold','mx-auto')
    container.append(easy1)

    let easy2 = document.createElement('div')
    easy2.setAttribute('style', background);
    easy2.setAttribute('draggable', 'true')
    easy2.style.width = '150px'
    easy2.style.height = '150px'
    easy2.style.backgroundPosition = '-150px 0'
    easy2.classList.add('border', 'border-gray-500', 'text-white','text-2xl','font-bold','mx-auto')
    easy2.innerHTML = '1'
    container.append(easy2)

    let easy3 = document.createElement('div')
    easy3.setAttribute('style', background);
    easy3.setAttribute('draggable', 'true')
    easy3.style.width = '150px'
    easy3.style.height = '150px'
    easy3.style.backgroundPosition = '-300px 0'
    easy3.classList.add('border', 'border-gray-500', 'text-white','text-2xl','font-bold','mx-auto')
    easy3.innerHTML = '2'
    container.append(easy3)


    let easy4 = document.createElement('div')
    easy4.setAttribute('style', background);
    easy4.setAttribute('draggable', 'true')
    easy4.style.width = '150px'
    easy4.style.height = '150px'
    easy4.style.backgroundPosition = '0 -150px'
    easy4.classList.add('border', 'border-gray-500', 'text-white','text-2xl','font-bold','mx-auto')
    easy4.innerHTML = '3'
    container.append(easy4)

    let easy5 = document.createElement('div')
    easy5.setAttribute('style', background);
    easy5.setAttribute('draggable', 'true')
    easy5.style.width = '150px'
    easy5.style.height = '150px'
    easy5.style.backgroundPosition = '-150px -150px'
    easy5.classList.add('border', 'border-gray-500', 'text-white','text-2xl','font-bold','mx-auto')
    easy5.innerHTML = '4'
    container.append(easy5)

    let easy6 = document.createElement('div')
    easy6.setAttribute('style', background);
    easy6.setAttribute('draggable', 'true')
    easy6.style.width = '150px'
    easy6.style.height = '150px'
    easy6.style.backgroundPosition = '-300px -150px'
    easy6.classList.add('border', 'border-gray-500', 'text-white','text-2xl','font-bold','mx-auto')
    easy6.innerHTML = '5'
    container.append(easy6)

    let easy7 = document.createElement('div')
    easy7.setAttribute('style', background);
    easy7.setAttribute('draggable', 'true')
    easy7.style.width = '150px'
    easy7.style.height = '150px'
    easy7.style.backgroundPosition = '0 -300px'
    easy7.classList.add('border', 'border-gray-500', 'text-white','text-2xl','font-bold','mx-auto')
    easy7.innerHTML = '6'
    container.append(easy7)

    let easy8 = document.createElement('div')
    easy8.setAttribute('style', background);
    easy8.setAttribute('draggable', 'true')
    easy8.style.width = '150px'
    easy8.style.height = '150px'
    easy8.style.backgroundPosition = '-150px -300px'
    easy8.classList.add('border', 'border-gray-500', 'text-white','text-2xl','font-bold','mx-auto')
    easy8.innerHTML = '7'
    container.append(easy8)

    let easy9 = document.createElement('div')
    easy9.setAttribute('style', background);
    easy9.setAttribute('draggable', 'true')
    easy9.style.width = '150px'
    easy9.style.height = '150px'
    easy9.style.backgroundPosition = '-300px -300px'
    easy9.classList.add('border', 'border-gray-500', 'text-white','text-2xl','font-bold','mx-auto')
    easy9.innerHTML = '8'
    container.append(easy9)
}

