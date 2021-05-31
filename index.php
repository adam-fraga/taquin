<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="tailwind.css">
    <link rel="stylesheet" href="style.css">
    <script type="text/javascript" src="script/choix-image.js" defer></script>
    <script type="text/javascript" src="script/easy.js" defer></script>
    <script type="text/javascript" src="script/medium.js" defer></script>
    <script type="text/javascript" src="script/hard.js" defer></script>

    <title>Document</title>
</head>
<body class="bg-black">
<main>
    <!--Section du jeu-->
    <section
            class="rounded-lg border border-white bg-gray-900 text-gray-400 border border-gray-500 w-4/6 mx-auto mt-8 p-6 shadow-lg rounded-lg">
        <!--MAIN TITLE-->
        <h1 class="text-2xl font-extrabold text-gray-100 text-center mb-6">TAQUIN</h1>
        <hr class="bg-gray-600 mb-8 mx-auto">
        <!--CONTAINER PRINCIPAL-->
        <div id="container" class="flex justify-evenly">
            <!--CONTAINER DIFFICULTY, CHRONO ET COMPTEUR DE MOUVEMENT DU JOUEUR-->
            <div class="flex flex-col w-2/6">
                <!--DIFFICULTY CONTROLLER-->
                <div class="menu w-2/5 mx-auto mb-6 flex justify-evenly">
                    <div class="inline-block mr-2 mt-2">
                        <button id="easy-btn"
                                type="button"
                                class="focus:outline-none text-white text-xs py-2.5 px-5 rounded-md bg-green-500 hover:bg-green-600 hover:shadow-lg">
                            Facile
                        </button>
                    </div>
                    <div class="inline-block mr-2 mt-2">
                        <button id="medium-btn"
                                type="button"
                                class="focus:outline-none text-white text-xs py-2.5 px-5 rounded-md bg-yellow-300 hover:bg-yellow-400 hover:shadow-lg">
                            Moyen
                        </button>
                    </div>
                    <div class="inline-block mr-2 mt-2">
                        <button id="hard-btn"
                                type="button"
                                class="focus:outline-none text-white text-xs py-2.5 px-5 rounded-md bg-red-400 hover:bg-red-500 hover:shadow-lg">
                            Difficile
                        </button>
                    </div>
                </div>
                <!--Chronomètre ET CHOIX IMAGE-->
                <div class="justify-center p-8 ">

                    <h4 class="font-extrabold text-white text-center mb-4">Time</h4>
                    <div id="chrono" class="flex justify-center mb-8">
                        <span class="block text-xl text-green-400 font-bold" id="min">00:</span>
                        <span class="block text-xl text-green-400 font-bold" id="sec">00:</span>
                        <span class="block text-xl text-green-400 font-bold" id="ms">00</span>
                    </div>
                    <p class="font-extrabold text-white text-center mb-4">Choisissez une image</p>
                    <!--IMAGES CHOIX-->
                    <div id="choix-pic" class="flex flex-wrap justify-evenly">
                        <img id="pic1"
                             class="pics pics-lum transition-all mb-3 opacity-80 cursor-pointer hover:opacity-100"
                             width="100px" src="assets/img/choix/taquin1.png" alt="femme code">
                        <img id="pic2"
                             class="pics pics-lum transition-all mb-3 opacity-80 cursor-pointer hover:opacity-100"
                             width="100px" src="assets/img/choix/taquin2.png" alt="femme code">
                        <img id="pic3"
                             class="pics pics-lum transition-all mb-3 opacity-80 cursor-pointer hover:opacity-100"
                             width="100px" src="assets/img/choix/taquin3.png" alt="femme code">
                        <img id="pic4"
                             class="pics pics-lum transition-all mb-3 opacity-80 cursor-pointer hover:opacity-100"
                             width="100px" src="assets/img/choix/taquin4.png" alt="femme code">
                    </div>
                </div>
            </div>
            <!--CONTAINER DU JEU-->
            <div id="game-container" class="bg-gray-200">

            </div>
            <!--CONTAINER LISTE DES TEMPS, COMPTEUR DE COUP ET MELANGEUR-->
            <div class="w-1/6 flex flex-col justify-evenly content-center">
                <div id="count" class="text-center">
                    <h4 class="font-extrabold text-white mb-4">Nombre de coups</h4>
                    <span class="text-2xl text-green-400 font-bold">00
                        <!--COUP A APPEND A CHAQUE DRAG DROP DANS UNE DIV-->
                        </span>
                </div>
                <div id="list" class="text-center">
                    <h4 class="font-extrabold text-white mb-4">Meilleur temps</h4>
                    <ul class="flex flex-col content-center">
                        <!--TEMPS A APPEND JS-->
                        <li id="besttime1"><span>12:</span><span>12:</span><span>12</span></li>
                        <li id="besttime2"><span>12:</span><span>12:</span><span>12</span></li>
                        <li id="besttime3"><span>12:</span><span>12:</span><span>12</span></li>
                    </ul>
                </div>
                <div id="shuffle" class="text-center">
                    <h4 class="mb-4 font-extrabold text-white">Mélangeur du jeu</h4>
                    <button type="button"
                            class="focus:outline-none text-white text-xs py-2.5 px-5 rounded-md bg-blue-400 hover:bg-blue-500 hover:shadow-lg">
                        Mélanger
                    </button>
                </div>
            </div>
        </div>
    </section>
</main>
</body>
</html>