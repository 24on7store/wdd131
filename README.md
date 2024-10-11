<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="styles/temples.css">
    <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-
    awesome/4.7.0/css/font-awesome.min.css"> -->
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
    crossorigin="anonymous" referrerpolicy="no-referrer"/> -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
    crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body>
    <header>
        <section class="header-section">
            <!--<img class="profile-pic" src="images/profile2.jpg" alt="Mackison's Photo"> -->
            <h1> Temple Album</h1>
        </section>

        <!-- <nav  class="navbar" id="navBar"> -->
        <nav>
            <div class="navbar" id="navBar">
                <i class="fa fa-times" onclick="hideMenu()"></i>
                <!-- <i class="fa fa-bars" onclick="showMenu()"></i> -->
                <!-- <ul class="nav-links" id="navLinks"> -->
                    <ul>
                    <!-- <ul class="nav-links"> -->
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Old</a></li>
                    <li><a href="#">New</a></li>
                    <li><a href="#">Large</a></li>
                    <li><a href="#">Small</a></li>
                </ul>
            </div>
            <i class="fa fa-bars" onclick="showMenu()"></i> 
        </nav>


    </header>

    <h2 class="second">Home</h2> 
 

    <!--First row-->
    <div class="cover">
        <div  class="row-first">
            <img class="photos1"  src="images/Istanbul.webp" alt="Photo of Istanbul">
            <p class="para1">Istanbul1</p>
        </div>

        <div  class="row-second">
            <img class="photos1"  src="images/Istanbul.webp" alt="Photo of Istanbul">
            <p class="para1">Istanbul2</p>
        </div>

        <div  class="row-third">
            <img class="photos1"  src="images/Istanbul.webp" alt="Photo of Istanbul">
            <p class="para1">Istanbul3</p>
        </div>
    </div>

        <!--Second row-->
    <div class="cover2">
        <div  class="row-first2">
            <img class="photos2"  src="images/Istanbul.webp" alt="Photo of Istanbul">
            <p class="para2">Istanbul4</p>
        </div>

        <div  class="row-second2">
            <img class="photos2"  src="images/Istanbul.webp" alt="Photo of Istanbul">
            <p class="para2">Istanbul5</p>
        </div>

        <div  class="row-third2">
            <img class="photos2"  src="images/Istanbul.webp" alt="Photo of Istanbul">
            <p class="para2">Istanbul6</p>
        </div>
    </div>


        <!--Third row-->
    <div class="cover3">
        <div  class="row-first3">
            <img class="photos3"  src="images/Istanbul.webp" alt="Photo of Istanbul">
            <p class="para3">Istanbul7</p>
        </div>

        <div  class="row-second3">
            <img class="photos3"  src="images/Istanbul.webp" alt="Photo of Istanbul">
            <p class="para3">Istanbul8</p>
        </div>

        <div  class="row-third3">
            <img class="photos3"  src="images/Istanbul.webp" alt="Photo of Istanbul">
            <p class="para3">Istanbul9</p>
        </div>
    </div>


<footer class="last">
    <p>&copy; 2024 &#x1F64F; Mackison <b>JEAN PIERRE</b> &#x1F64F;| Haiti <span id="copyright"></span></p>
    <p id="lastModified"></p>
</footer>

<script src="scripts/temples.js" defer></script>
<!-- <script src="scripts/temples.js" defer></script> -->

<!-- JavaScript for toggle menu -->
<!-- <script>
    var navBar = document.getElementById("navBar");

    function showMenu(){
        navBar.style.right = "0";
    }

    function hideMenu(){
        navBar.style.right = "-200px";
    }

</script> -->


</body>
</html>
