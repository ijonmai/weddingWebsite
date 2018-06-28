
var countDownDate = new Date("Sep 14, 2019 0:0:0").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    $('.days').html("<span style=\"font-size: 30px\">" + days + "</span>" + " <br>DAYS");
    $('.hours').html(hours + " <br>HOURS");
    $('.min').html(minutes + " <br>MINUTES");
    $('.sec').html(seconds + " <br>SECONDS");
    // $('.time').html(days + "d" + hours + "h " + minutes + "m " + seconds + "s ");

    // If the count down is finished, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);