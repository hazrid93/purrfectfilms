//force refresh to top page (scrollbar)

$(window).on('beforeunload', function () {
    $(window).scrollTop(0);
});

$(document).ready(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 1000,
    });
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    //get offset of id position
    var aboutOffset = $('#about').offset().top;
    aboutOffset = aboutOffset - 150;
    var windowHeight = $(window).height();
    var $slideAd = $('.icon-bar');


    //for sidebar menus, hide it if at 'about' section
    $(window).on('scroll', function (e) {
        e.stopPropagation();

        var scrollTopheight = $(window).scrollTop();
        var scrollBottomheight = $(window).scrollTop() + $(window).height();

        //About header
        //20px for some spacing before animation
        var $aboutObj = $("#aboutAnimate");
        var aboutObjelementH = $aboutObj.innerHeight();
        var aboutObjscrollH = $aboutObj.offset().top;
        var aboutObjendingH = aboutObjscrollH + aboutObjelementH + 20;

        //Our team header
        var $ourteamObj = $("#ourteamAnimate");
        var ourteamelementH = $ourteamObj.innerHeight();
        var ourteamObjscrollH = $ourteamObj.offset().top;
        var ourteamObjendingH = ourteamObjscrollH + ourteamelementH + 20;
        
        //Service header
        var $serviceObj = $("#serviceAnimate");
        var serviceelementH = $serviceObj.innerHeight();
        var serviceObjscrollH = $serviceObj.offset().top;
        var serviceObjendingH = serviceObjscrollH + serviceelementH + 20;
        
        //Facts header
        var $factsObj = $("#factsAnimate");
        var factsObjelementH = $factsObj.innerHeight();
        var factsObjscrollH = $factsObj.offset().top;
        var factsObjendingH = factsObjscrollH + factsObjelementH + 20;
        
        //Contact header
        var $contactObj = $("#contactAnimate");
        var contactelementH = $contactObj.innerHeight();
        var contactObjscrollH = $contactObj.offset().top;
        var contactObjendingH = contactObjscrollH + contactelementH + 20;
        
        
        ///SIDEBAR///
        if (scrollTopheight > aboutOffset) {
            $slideAd.css({
                "visibility": 'hidden'
            });

        } else {
            $slideAd.css({
                "visibility": 'visible'
            });

        }
        
        ///OUR TEAM HEADER//
        if (scrollBottomheight > ourteamObjendingH) {
            //one time event animation using animate.css
            $ourteamObj.addClass('animated fadeInDown delay-2s slow').css({
                "visibility": 'visible'
            });
        }
        
        ///ABOUT HEADER//
        if (scrollBottomheight > aboutObjendingH) {
            //one time event animation using animate.css
            $aboutObj.addClass('animated fadeInDown delay-2s slow').css({
                "visibility": 'visible'
            });
            $(".aboutContent").addClass('animated fadeInLeft delay-2s slow').css({
                "visibility": 'visible'
            });
        }
        
        ///SERVICE HEADER//
         if (scrollBottomheight > serviceObjendingH) {
                //one time event animation using animate.css
                $serviceObj.addClass('animated fadeInDown delay-2s slow').css({
                    "visibility": 'visible'
                });

                $(".serviceContent").addClass('animated fadeInLeft delay-2s slow').css({
                    "visibility": 'visible'
                });
            }
        
        //FACTS HEADER//
            if (scrollBottomheight > factsObjendingH) {

                //one time event animation using animate.css
                $factsObj.addClass('animated fadeInDown delay-2s slow').css({
                    "visibility": 'visible'
                });

            }
  
        //CONTACT HEADER//
            if (scrollBottomheight > contactObjendingH) {
                //one time event animation using animate.css
                $contactObj.addClass('animated fadeInDown delay-2s slow').css({
                    "visibility": 'visible'
                });

            }

        })


    //setup scrollspy and nav bar stuff
    function setupScrollSettings() {

        //adjust the scrollspy to include navbar height
        var navHeight = $("#mainNav").outerHeight(true);

        $("body").attr("data-offset", navHeight);

        //add animation from navbar to a section
        $(".navbarSpy").on('click', function (e) {
            e.stopPropagation();
            var eventHandling = e.currentTarget;
            eventHandling = eventHandling.textContent;
            var $aboutIndex = $("#about");
            var $servicesIndex = $("#services");
            var $contactIndex = $("#contact");

            if (eventHandling === "ABOUT") {
                var scrollTop = $aboutIndex.offset().top;
                scrollTop = scrollTop - navHeight;
                $("html,body").stop(true, false).animate({
                    scrollTop: scrollTop
                }, 500, "linear");
            } else if (eventHandling === "SERVICES") {
                var scrollTop = $servicesIndex.offset().top;
                scrollTop = scrollTop - navHeight;
                $("html,body").stop(true, false).animate({
                    scrollTop: scrollTop
                }, 500, "linear");
            } else if (eventHandling === "CONTACT") {
                var scrollTop = $contactIndex.offset().top;
                scrollTop = scrollTop - navHeight;
                $("html,body").stop(true, false).animate({
                    scrollTop: scrollTop
                }, 500, "linear");

            } else {
                //nothing
            }

        });
    }
    setupScrollSettings();

    //create a window resize listener.
    //will trigger event 'resized' on window object
    var resize_timeout;

    $(window).on('resize orientationchange', function (e) {
        e.stopPropagation();
        clearTimeout(resize_timeout);

        resize_timeout = setTimeout(function () {
            $(window).trigger('resized');
        }, 2000);
    });
    $(window).on('resized', function (e) {
        e.stopPropagation();
        setupScrollSettings();
    });


    ///PARTICLE EFFECT SECTION///
    /*
    //get the canvas dom element at index 0
    //to use normal javascript method/attributes
    var canvas = $("#canvasX")[0];
    var setWidth = $("body").width();

    var setHeight = $(document).height() - $("body").offset().top
    console.log(setHeight);
    canvas.width = setWidth;
    canvas.height = setHeight;
    //  canvas.style.width = setWidth;
    //  canvas.style.height = setHeight;

    var gradientX = setWidth * 0.9;

    var canvasControl = canvas.getContext("2d");
    canvasControl.imageSmoothingEnabled = true;
    //scale width and height to 200% 	
    // context.scale(scalewidth,scaleheight);
    canvasControl.scale(2, 2);

    var my_gradient = canvasControl.createLinearGradient(0, 0, gradientX, 0);
    my_gradient.addColorStop(0, "white");
    my_gradient.addColorStop(0.6, "black");
    canvasControl.fillStyle = my_gradient;
    //get the canvas width and height since i set to 100%
    var canvasWidth = $("#canvasX").innerWidth();
    var canvasHeight = $("#canvasX").innerHeight();

    var maxRadius = 3;
    var minRadius = 1;


    //number of bubble
    var bubbleCount = 150;

    function getRandomRadius() {
        //ensure the random radius is between 3 and 10
        var cRadius = Math.floor(Math.random() * (maxRadius - minRadius)) + minRadius;
        return cRadius;
    }

    function randomXindex() {
        //get x-coordinate
        var xRand = Math.floor(Math.random() * (canvasWidth - 10)) + 10;
        return xRand;
    }

    function randomYindex() {
        //get Y-coordinate
        var yRand = Math.floor(Math.random() * (canvasHeight - 10)) + 10;
      //  console.log("random y index is =" + yRand);
        return yRand;
    }

    //globals
    var xInit;
    var yInit;
    var rInit;
    var array69x = [];
    var array69y = [];
    var array69r = [];
    var array69Bool = [];
    var arraycheckIndex;
    //add bubble object
    // var bubbleObj = {};



    function generate() {
        for (var i = 0; i < bubbleCount; i++) {
            xInit = Math.floor(randomXindex() * -0.2);
            // xInit = xInit*0.5;
            yInit = Math.floor(randomYindex() * 1);
            // yInit = yInit*0.5;
            rInit = getRandomRadius();

            array69x.push(xInit);
            array69y.push(yInit);
            array69r.push(rInit);
            //false means bubble is not out of width  yet...
            array69Bool.push("false");
        }

    }

    //draw in canvas
    function drawBubble() {
        canvasControl.clearRect(0, 0, canvas.width, canvas.height);

        for (var i = 0; i < bubbleCount; i++) {


            canvasControl.beginPath();

            //draw full circle
            canvasControl.arc(array69x[i], array69y[i], array69r[i], 0, 2 * Math.PI);
            canvasControl.closePath();
            canvasControl.fill();
            //stroke gives the black outline (style is not set for this)
        //    canvasControl.stroke();
        }
    }

    function checkArray(xVal) {

        var tempindex = array69x[arraycheckIndex];
        if (xVal < tempindex) {
            return true;
        } else {
            return false;
        }

    }

    function mover() {

        for (var i = 0; i < bubbleCount; i++) {
            arraycheckIndex = i;

            array69x[i] = array69x[i] + 0.8;
            array69y[i] = array69y[i] - 0.2;

            if (array69x[i] <= (Math.floor(canvas.width * 0.5))) {
                array69Bool[i] = "false";
            } else {

                for (var i = 0; i < bubbleCount; i++) {
                    var boolReturned = array69x.every(checkArray);

                    if (boolReturned == true) {

                        array69Bool[i] = "false";
                    } else {
                        array69Bool[i] = "true";
                    }

                }
            }
        }
    }

    generate();

    //60fps (1000/60)
    setInterval(function () {
        drawBubble();
        mover();
        for (var i = 0; i < bubbleCount; i++) {

            if (array69Bool[i] == "true") {

                array69x = [];
                array69y = [];
                array69r = [];
                array69Bool = [];
                generate();

            }
        }
    }, 1000 / 30);


   */

    // hazrid93@hotmail.com
    // Author: Hazrid Azad
});
