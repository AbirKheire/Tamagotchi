<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="css/style1.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tamagotchi</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Livvic:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,900&display=swap" rel="stylesheet">
    <style>

    </style>
</head>
<body>
    <header>
        <div class="ovale">
            <p class="text1">Tamagotchi</p>
        </div>
    </header>
    <div class="container"></div>
        <div class="input">
           <input type="text"  id="text" placeholder="NOM">
        </div>
    <div class="status-bars">
        <div>
            <p>Food</p>
            <div class="progress-container" id="progress-food">
                <!-- 8 blocs pour la barre Food -->
                <div class="progress-block"></div>
                <div class="progress-block"></div>
                <div class="progress-block"></div>
                <div class="progress-block"></div>
                <div class="progress-block"></div>
                <div class="progress-block"></div>
                <div class="progress-block"></div>
                <div class="progress-block"></div>
            </div>
        </div>
        <div>
            <p>Sport</p> 
            <div class="progress-container" id="progress-sport">
                <!-- 8 blocs pour la barre Sport -->
                <div class="progress-block"></div>
                <div class="progress-block"></div>
                <div class="progress-block"></div>
                <div class="progress-block"></div>
                <div class="progress-block"></div>
                <div class="progress-block"></div>
                <div class="progress-block"></div>
                <div class="progress-block"></div>
            </div>
        </div>
        <div>
            <p>Health</p> 
            <div class="progress-container" id="progress-health">
                <!-- 8 blocs pour la barre Health -->
                <div class="progress-block"></div>
                <div class="progress-block"></div>
                <div class="progress-block"></div>
                <div class="progress-block"></div>
                <div class="progress-block"></div>
                <div class="progress-block"></div>
                <div class="progress-block"></div>
                <div class="progress-block"></div>
            </div>
        </div>
    </div>
    <main>
        <div class="container"></div>
            <div class="status-bars">
            </div>
            <br>
            <div class="buttons">
                <button class="jaune">Feed</button>
                <button class="orange">Sport</button>
                <button class="rouge">Health</button>
<!-- onclick="heal()" onclick="exercise()" onclick="feed()" -->
            </div>
            <div class="buttons2">
                <button class="begin" id="begin">Begin</button>
                <button class="reset" id="reset">Reset</button>
            </div>
        </div>
        <div class="contour"></div>
    </main>

    <footer>
    </footer>
</body>
<script type="module" src="main.js"></script>
</html>
