/* Check IE*/
function isIE() {
    ua = navigator.userAgent;
    var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
    return is_ie;
}
if (isIE()) {
    document.documentElement.classList.add('ie');
} else {
    document.documentElement.classList.add('no-ie');
}

/* Scroll Effect*/
var scrollpos = window.scrollY;
var header = document.getElementById("header");
var gotop = document.getElementById("gotop");

function add_class_on_scroll() {
    header.classList.add("is-compact");
    gotop.classList.remove("hidden");
}

function remove_class_on_scroll() {
    header.classList.remove("is-compact");
    gotop.classList.add("hidden");
}

window.addEventListener('scroll', function() {
    scrollpos = window.scrollY;
    if (scrollpos > 10) {
        add_class_on_scroll();
    } else {
        remove_class_on_scroll();
    }
});

/*Back to Top*/
var timeOut;

function scrollToTop() {
    if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) {
        window.scrollBy(0, -50);
        timeOut = setTimeout('scrollToTop()', 10);
    } else {
        clearTimeout(timeOut);
    }
}

/*Sitemap Toggle*/
document.getElementById('sitemap_toggler').onclick = function() {
    this.classList.toggle('active');
    document.querySelector('div.sitemap-wrapper').classList.toggle('open');
}

/*Jquery 0911 Addendum*/
/*Form Switch*/
$('div.form-radio-wrapper').hide();
$('input[name$="radio-switch"]').click(function() {
    var switchBox = $(this).val();
    $('div.form-radio-wrapper').hide();
    $('#' + switchBox).show();
});

/*Spreadsheet Result*/
$('div#spreadsheet-result').hide();
$('#calculate-trigger').click(function() {
    $('div#spreadsheet-result').show();
});