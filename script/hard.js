let hard = document.querySelector('#hard-btn')
hard.addEventListener('click', setHard, once = true)

// Callback set la difficulté sur easy et découpe le taquin en  en 5 colonnes et 5 lignes

function setHard() {
    // Récup l'attribut style contenant le bg de l'image selectionner
    let container = document.querySelector('#game-container')

    let background = container.getAttribute('style')

    // Set l'image découpé et l'insert dans le dom via la methode sprite CSS
    let hard1 = document.createElement('div')
    hard1.style.background = 'white';
    hard1.setAttribute('draggable', 'true')
    hard1.style.width = '89px'
    hard1.style.height = '89px'
    hard1.style.backgroundPosition = '0 0'
    hard1.classList.add('border', 'border-gray-500', 'text-white', 'text-2xl', 'font-bold', 'mx-auto')
    container.append(hard1)

    let hard2 = document.createElement('div')
    hard2.setAttribute('style', background);
    hard2.setAttribute('draggable', 'true')
    hard2.style.width = '89px'
    hard2.style.height = '89px'
    hard2.style.backgroundPosition = '-89px 0'
    hard2.classList.add('border', 'border-gray-500', 'text-white', 'text-2xl', 'font-bold', 'mx-auto')
    hard2.innerHTML = '1'
    container.append(hard2)

    let hard3 = document.createElement('div')
    hard3.setAttribute('style', background);
    hard3.setAttribute('draggable', 'true')
    hard3.style.width = '89px'
    hard3.style.height = '89px'
    hard3.style.backgroundPosition = '-178px 0'
    hard3.classList.add('border', 'border-gray-500', 'text-white', 'text-2xl', 'font-bold', 'mx-auto')
    hard2.innerHTML = '2'
    container.append(hard3)
    console.log(hard3);


    let hard4 = document.createElement('div')
    hard4.setAttribute('style', background);
    hard4.setAttribute('draggable', 'true')
    hard4.style.width = '89px'
    hard4.style.height = '89px'
    hard4.style.backgroundPosition = '-267px 0'
    hard4.classList.add('border', 'border-gray-500', 'text-white', 'text-2xl', 'font-bold', 'mx-auto')
    hard4.innerHTML = '3'
    container.append(hard4)


    let hard5 = document.createElement('div')
    hard5.setAttribute('style', background);
    hard5.setAttribute('draggable', 'true')
    hard5.style.width = '89px'
    hard5.style.height = '89px'
    hard5.style.backgroundPosition = '-356px 0'
    hard5.classList.add('border', 'border-gray-500', 'text-white', 'text-2xl', 'font-bold', 'mx-auto')
    hard5.innerHTML = '4'
    container.append(hard5)

    let hard6 = document.createElement('div')
    hard6.setAttribute('style', background);
    hard6.setAttribute('draggable', 'true')
    hard6.style.width = '89px'
    hard6.style.height = '89px'
    hard6.style.backgroundPosition = '0 -89px'
    hard6.classList.add('border', 'border-gray-500', 'text-white', 'text-2xl', 'font-bold', 'mx-auto')
    hard6.innerHTML = '5'
    container.append(hard6)

    let hard7 = document.createElement('div')
    hard7.setAttribute('style', background);
    hard7.setAttribute('draggable', 'true')
    hard7.style.width = '89px'
    hard7.style.height = '89px'
    hard7.style.backgroundPosition = '-89px -89px'
    hard7.classList.add('border', 'border-gray-500', 'text-white', 'text-2xl', 'font-bold', 'mx-auto')
    hard7.innerHTML = '6'
    container.append(hard7)

    let hard8 = document.createElement('div')
    hard8.setAttribute('style', background);
    hard8.setAttribute('draggable', 'true')
    hard8.style.width = '89px'
    hard8.style.height = '89px'
    hard8.style.backgroundPosition = '-178px -89px'
    hard8.classList.add('border', 'border-gray-500', 'text-white', 'text-2xl', 'font-bold', 'mx-auto')
    container.append(hard8)
    console.log(hard8);

    let hard9 = document.createElement('div')
    hard9.setAttribute('style', background);
    hard9.setAttribute('draggable', 'true')
    hard9.style.width = '89px'
    hard9.style.height = '89px'
    hard9.style.backgroundPosition = '-267px -89px'
    hard9.classList.add('border', 'border-gray-500', 'text-white', 'text-2xl', 'font-bold', 'mx-auto')
    container.append(hard9)
    console.log(hard9);

    let hard10 = document.createElement('div')
    hard10.setAttribute('style', background);
    hard10.setAttribute('draggable', 'true')
    hard10.style.width = '89px'
    hard10.style.height = '89px'
    hard10.style.backgroundPosition = '-356px -89px'
    hard10.classList.add('border', 'border-gray-500', 'text-white', 'text-2xl', 'font-bold', 'mx-auto')
    container.append(hard10)
    console.log(hard10);

    let hard11 = document.createElement('div')
    hard11.setAttribute('style', background);
    hard11.setAttribute('draggable', 'true')
    hard11.style.width = '89px'
    hard11.style.height = '89px'
    hard11.style.backgroundPosition = '0 -178px'
    hard11.classList.add('border', 'border-gray-500', 'text-white', 'text-2xl', 'font-bold', 'mx-auto')
    container.append(hard11)
    console.log(hard11);

    let hard12 = document.createElement('div')
    hard12.setAttribute('style', background);
    hard12.setAttribute('draggable', 'true')
    hard12.style.width = '89px'
    hard12.style.height = '89px'
    hard12.style.backgroundPosition = '-89px -178px'
    hard12.classList.add('border', 'border-gray-500', 'text-white', 'text-2xl', 'font-bold', 'mx-auto')
    container.append(hard12)
    console.log(hard12);

    let hard13 = document.createElement('div')
    hard13.setAttribute('style', background);
    hard13.setAttribute('draggable', 'true')
    hard13.style.width = '89px'
    hard13.style.height = '89px'
    hard13.style.backgroundPosition = '-178px -178px'
    hard13.classList.add('border', 'border-gray-500', 'text-white', 'text-2xl', 'font-bold', 'mx-auto')
    container.append(hard13)
    console.log(hard13);

    let hard14 = document.createElement('div')
    hard14.setAttribute('style', background);
    hard14.setAttribute('draggable', 'true')
    hard14.style.width = '89px'
    hard14.style.height = '89px'
    hard14.style.backgroundPosition = '-267px -178px'
    hard14.classList.add('border', 'border-gray-500', 'text-white', 'text-2xl', 'font-bold', 'mx-auto')
    container.append(hard14)
    console.log(hard14);

    let hard15 = document.createElement('div')
    hard15.setAttribute('style', background);
    hard15.setAttribute('draggable', 'true')
    hard15.style.width = '89px'
    hard15.style.height = '89px'
    hard15.style.backgroundPosition = '-356px -178px'
    hard15.classList.add('border', 'border-gray-500', 'text-white', 'text-2xl', 'font-bold', 'mx-auto')
    container.append(hard15)
    console.log(hard15);

    let hard16 = document.createElement('div')
    hard16.setAttribute('style', background);
    hard16.setAttribute('draggable', 'true')
    hard16.style.width = '89px'
    hard16.style.height = '89px'
    hard16.style.backgroundPosition = '0 -267px'
    hard16.classList.add('border', 'border-gray-500', 'text-white', 'text-2xl', 'font-bold', 'mx-auto')
    container.append(hard16)
    console.log(hard16);

    let hard17 = document.createElement('div')
    hard17.setAttribute('style', background);
    hard17.setAttribute('draggable', 'true')
    hard17.style.width = '89px'
    hard17.style.height = '89px'
    hard17.style.backgroundPosition = '-89px -267px'
    hard17.classList.add('border', 'border-gray-500', 'text-white', 'text-2xl', 'font-bold', 'mx-auto')
    container.append(hard17)
    console.log(hard17);

    let hard18 = document.createElement('div')
    hard18.setAttribute('style', background);
    hard18.setAttribute('draggable', 'true')
    hard18.style.width = '89px'
    hard18.style.height = '89px'
    hard18.style.backgroundPosition = '-178px -267px'
    hard18.classList.add('border', 'border-gray-500', 'text-white', 'text-2xl', 'font-bold', 'mx-auto')
    container.append(hard18)
    console.log(hard18);

    let hard19 = document.createElement('div')
    hard19.setAttribute('style', background);
    hard19.setAttribute('draggable', 'true')
    hard19.style.width = '89px'
    hard19.style.height = '89px'
    hard19.style.backgroundPosition = '-267px -267px'
    hard19.classList.add('border', 'border-gray-500', 'text-white', 'text-2xl', 'font-bold', 'mx-auto')
    container.append(hard19)
    console.log(hard16);

    let hard20 = document.createElement('div')
    hard20.setAttribute('style', background);
    hard20.setAttribute('draggable', 'true')
    hard20.style.width = '89px'
    hard20.style.height = '89px'
    hard20.style.backgroundPosition = '-356px -267px'
    hard20.classList.add('border', 'border-gray-500', 'text-white', 'text-2xl', 'font-bold', 'mx-auto')
    container.append(hard20)
    console.log(hard20);

    let hard21 = document.createElement('div')
    hard21.setAttribute('style', background);
    hard21.setAttribute('draggable', 'true')
    hard21.style.width = '89px'
    hard21.style.height = '89px'
    hard21.style.backgroundPosition = '0 -356px'
    hard21.classList.add('border', 'border-gray-500', 'text-white', 'text-2xl', 'font-bold', 'mx-auto')
    container.append(hard21)
    console.log(hard21);

    let hard22 = document.createElement('div')
    hard22.setAttribute('style', background);
    hard22.setAttribute('draggable', 'true')
    hard22.style.width = '89px'
    hard22.style.height = '89px'
    hard22.style.backgroundPosition = '-89px -356px'
    hard22.classList.add('border', 'border-gray-500', 'text-white', 'text-2xl', 'font-bold', 'mx-auto')
    container.append(hard22)
    console.log(hard22);

    let hard23 = document.createElement('div')
    hard23.setAttribute('style', background);
    hard23.setAttribute('draggable', 'true')
    hard23.style.width = '89px'
    hard23.style.height = '89px'
    hard23.style.backgroundPosition = '-178px -356px'
    hard23.classList.add('border', 'border-gray-500', 'text-white', 'text-2xl', 'font-bold', 'mx-auto')
    container.append(hard23)
    console.log(hard23);

    let hard24 = document.createElement('div')
    hard24.setAttribute('style', background);
    hard24.setAttribute('draggable', 'true')
    hard24.style.width = '89px'
    hard24.style.height = '89px'
    hard24.style.backgroundPosition = '-267px -356px'
    hard24.classList.add('border', 'border-gray-500', 'text-white', 'text-2xl', 'font-bold', 'mx-auto')
    container.append(hard24)
    console.log(hard24);


    let hard25 = document.createElement('div')
    hard25.setAttribute('style', background);
    hard25.setAttribute('draggable', 'true')
    hard25.style.width = '89px'
    hard25.style.height = '89px'
    hard25.style.backgroundPosition = '-356px -356px'
    hard25.classList.add('border', 'border-gray-500', 'text-white', 'text-2xl', 'font-bold', 'mx-auto')
    container.append(hard25)
    console.log(hard25);


}