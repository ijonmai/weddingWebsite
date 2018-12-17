$(document).ready(function() {
    var path = document.location.pathname;
    switch(path) {
        case '/':
            $('#rsvp').addClass('active');
            break;
        case '/ourstory':
            $('#ourstory').addClass('active');
    }
});