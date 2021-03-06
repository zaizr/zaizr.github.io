<?php

if(isset($_POST['submit'])) {
    $email = $_POST['email'];
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $message = $_POST['description'];

    $body = "New email by: " . $name . "\r\n";
    $body = "From: " . $email . "\r\n";
    $body = "Message: " . $message . ".";

    $to = "zaizr@mail.com"

    mail($to, $subject, $body);
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Koua Mouhamed Anis | Index</title>
    <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div id="loading">
        <div class="Loader">    
        </div>
    </div>
    <div class="Container" id="page" style="display: none;">
        <div class="RealMenu">
            <div class="CloseMenu" id="menuClose">&times</div>
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="projects.html">Projects</a>
                </li>
                <li>
                    <a href="links.html">My Links</a>
                </li>
                <li>
                    <a onclick="javascript:Hide()" href="#about">About me</a>
                </li>
                <li>
                    <a onclick="javascript:Hide()" href="#contact">Contact</a>
                </li>
            </ul>
        </div>
        <div class="NavBar">
            <span class="Menu" id="menuBtn">&#9776;</span>
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="projects.html">Projects</a>
                </li>
                <li>
                    <a href="links.html">My Links</a>
                </li>
                <li>
                    <a href="index.html#about">About me</a>
                </li>
                <li>
                    <a href="index.html#contact">Contact</a>
                </li>
            </ul>
        </div>
        <div class="One">
            <div class="MainText">
                Koua Mouhamed Anis
            </div>
        </div>
        <div class="Two" id="about">
            <div class="AboutMe">
                <h2>
                    About Me
                </h2>
                <p>
                    Ana howa anis hhh ma3labalich wch nktb hna al connexion ra7t w rahi m9awda 3lya la kont tchof f hada a text aboni <a href="http://instagram.com/zaizrx/" style="color: #fff; text-decoration: underline; font-weight: bolder;">HNA</a> hia normalement rak maboni bs7 ma3lich zid aboni a hia l wa7d yro7 yor9d
                </p>
            </div>
        </div>
        <div class="Three">
            <div class="ContactMe" id="contact">
                <form action="index.php" method="post" class="ContactMe">
                    <h2>
                        Contact Me
                    </h2>
                    <div class="Fields">
                        <div class="Email Field">
                            <input type="email" name="email" id="email" required tabindex="1" placeholder="Email ...">
                        </div>
                        <div class="Name Field">
                            <input type="text" name="name" id="name" required tabindex="2" placeholder="Full Name ...">
                        </div>
                        <div class="Subject Field">
                            <input type="text" name="subject" id="subject" required tabindex="3" placeholder="Subject ...">
                        </div>
                        <div class="Description Field">
                            <textarea name="description" id="description" maxlength="200" required tabindex="4" placeholder="Description ..."></textarea>
                        </div>
                        <div class="Submit">
                            <button type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="Foorter"></div>
    </div>
</body>
<script src="js/index.js"></script>
<script src="js/loading.js"></script>
<script src="js/menu.js"></script>
</html>