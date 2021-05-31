let medium = document.querySelector('#medium-btn')

medium.addEventListener('click', setMedium, once = true)

// Callback set la difficulté sur medium et découpe le taquin en  en 4 colonnes et 4 lignes

function setMedium() {
    // Récup l'attribut style contenant le bg de l'image selectionner
    let container = document.querySelector('#game-container')

    let background = container.getAttribute('style')
    console.log(background);

    // Set l'image découpé et l'insert dans le dom via la methode sprite CSS
    let medium1 = document.createElement('div')
    medium1.setAttribute('draggable', 'true')
    medium1.style.background = 'white';
    medium1.style.width = '112px'
    medium1.style.height = '112px'
    medium1.style.backgroundPosition = '0 0'
    medium1.classList.add('border', 'border-gray-500')
    container.append(medium1)

    let medium2 = document.createElement('div')
    medium2.setAttribute('style', background);
    medium2.setAttribute('draggable', 'true')
    medium2.style.width = '112px'
    medium2.style.height = '112px'
    medium2.style.backgroundPosition = '-112px 0'
    medium2.classList.add('border', 'border-gray-500', 'text-white', 'text-2xl', 'font-bold', 'mx-auto')
    medium2.innerHTML = '1'
    container.append(medium2)

    let medium3 = document.createElement('div')
    medium3.setAttribute('style', background);
    medium3.setAttribute('draggable', 'true')
    medium3.style.width = '112px'
    medium3.style.height = '112px'
    medium3.style.backgroundPosition = '-224px 0'
    medium3.classList.add('border', 'border-gray-500', 'text-white', 'text-2xl', 'font-bold', 'mx-auto')
    medium3.innerHTML = '2'
    container.append(medium3)


    let medium4 = document.createElement('div')
    medium4.setAttribute('style', background);
    medium4.setAttribute('draggable', 'true')
    medium4.style.width = '112px'
    medium4.style.height = '112px'
    medium4.style.backgroundPosition = '-336px 0'
    medium4.classList.add('border', 'border-gray-500', 'text-white', 'text-2xl', 'font-bold', 'mx-auto')
    medium4.innerHTML = '3'
    container.append(medium4)
    console.log(medium4);

    let medium5 = document.createElement('div')
    medium5.setAttribute('style', background);
    medium5.setAttribute('draggable', 'true')
    medium5.style.width = '112px'
    medium5.style.height = '112px'
    medium5.style.backgroundPosition = '0 -112px'
    medium5.classList.add('border-gray-500', 'text-white', 'text-2xl', 'font-bold', 'mx-auto')
    medium5.innerHTML = '4'
    container.append(medium5)

    let medium6 = document.createElement('div')
    medium6.setAttribute('style', background);
    medium6.setAttribute('draggable', 'true')
    medium6.style.width = '112px'
    medium6.style.height = '112px'
    medium6.style.backgroundPosition = '-112px -112px'
    medium6.classList.add('border', 'border-gray-500', 'text-white', 'text-2xl', 'font-bold', 'mx-auto')
    medium6.innerHTML = '5'
    container.append(medium6)

    let medium7 = document.createElement('div')
    medium7.setAttribute('style', background);
    medium7.setAttribute('draggable', 'true')
    medium7.style.width = '112px'
    medium7.style.height = '112px'
    medium7.style.backgroundPosition = '-224px -112px'
    medium7.classList.add('border', 'border-gray-500', 'text-white', 'text-2xl', 'font-bold', 'mx-auto')
    medium7.innerHTML = '6'
    container.append(medium7)

    let medium8 = document.createElement('div')
    medium8.setAttribute('style', background);
    medium8.setAttribute('draggable', 'true')
    medium8.style.width = '112px'
    medium8.style.height = '112px'
    medium8.style.backgroundPosition = '-336px -112px'
    medium8.classList.add('border', 'border-gray-500', 'text-white', 'text-2xl', 'font-bold', 'mx-auto')
    medium8.innerHTML = '7'
    container.append(medium8)

    let medium9 = document.createElement('div')
    medium9.setAttribute('style', background);
    medium9.setAttribute('draggable', 'true')
    medium9.style.width = '112px'
    medium9.style.height = '112px'
    medium9.style.backgroundPosition = '0 -224px'
    medium9.classList.add('border', 'border-gray-500', 'text-white', 'text-2xl', 'font-bold', 'mx-auto')
    medium9.innerHTML = '8'
    container.append(medium9)

    let medium10 = document.createElement('div')
    medium10.setAttribute('style', background);
    medium10.setAttribute('draggable', 'true')
    medium10.style.width = '112px'
    medium10.style.height = '112px'
    medium10.style.backgroundPosition = '-112px -224px'
    medium10.classList.add('border', 'border-gray-500', 'text-white', 'text-2xl', 'font-bold', 'mx-auto')
    medium10.innerHTML = '9'
    container.append(medium10)

    let medium11 = document.createElement('div')
    medium11.setAttribute('style', background);
    medium11.setAttribute('draggable', 'true')
    medium11.style.width = '112px'
    medium11.style.height = '112px'
    medium11.style.backgroundPosition = '-224px -224px'
    medium11.classList.add('border', 'border-gray-500', 'text-white', 'text-2xl', 'font-bold', 'mx-auto')
    medium11.innerHTML = '10'
    container.append(medium11)

    let medium12 = document.createElement('div')
    medium12.setAttribute('style', background);
    medium12.setAttribute('draggable', 'true')
    medium12.style.width = '112px'
    medium12.style.height = '112px'
    medium12.style.backgroundPosition = '-336px -224px'
    medium12.classList.add('border', 'border-gray-500', 'text-white', 'text-2xl', 'font-bold', 'mx-auto')
    medium12.innerHTML = '11'
    container.append(medium12)

    let medium13 = document.createElement('div')
    medium13.setAttribute('style', background);
    medium13.setAttribute('draggable', 'true')
    medium13.style.width = '112px'
    medium13.style.height = '112px'
    medium13.style.backgroundPosition = '0 -336px'
    medium13.classList.add('border', 'border-gray-500', 'text-white', 'text-2xl', 'font-bold', 'mx-auto')
    medium13.innerHTML = '12'
    container.append(medium13)

    let medium14 = document.createElement('div')
    medium14.setAttribute('style', background);
    medium14.setAttribute('draggable', 'true')
    medium14.style.width = '112px'
    medium14.style.height = '112px'
    medium14.style.backgroundPosition = '-112px -336px'
    medium14.classList.add('border', 'border-gray-500', 'text-white', 'text-2xl', 'font-bold', 'mx-auto')
    medium14.innerHTML = '13'
    container.append(medium14)

    let medium15 = document.createElement('div')
    medium15.setAttribute('style', background);
    medium15.setAttribute('draggable', 'true')
    medium15.style.width = '112px'
    medium15.style.height = '112px'
    medium15.style.backgroundPosition = '-224px -336px'
    medium15.classList.add('border', 'border-gray-500', 'text-white', 'text-2xl', 'font-bold', 'mx-auto')
    medium15.innerHTML = '14'
    container.append(medium15)

    let medium16 = document.createElement('div')
    medium16.setAttribute('style', background);
    medium16.setAttribute('draggable', 'true')
    medium16.style.width = '112px'
    medium16.style.height = '112px'
    medium16.style.backgroundPosition = '-336px -336px'
    medium16.classList.add('border', 'border-gray-500', 'text-white', 'text-2xl', 'font-bold', 'mx-auto')
    medium16.innerHTML = '15'
    container.append(medium16)

}
