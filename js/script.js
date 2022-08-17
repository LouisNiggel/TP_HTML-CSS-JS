/* -- Scroll-to-top --*/

// Get the button
var mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


$(function(){
    /* -- Accordéon -- */

    $('.accordion').each(function (e) {
        // on stocke l'accordéon dans une variable locale
        var accordion = $(this);
        // on récupère la valeur data-speed si elle existe
        var toggleSpeed = accordion.attr('data-speed') || 100;

        // fonction pour afficher un élément   
        function open(item, speed) {
            // on récupère tous les éléments, on enlève l'élément actif de ce résultat, et on les cache
            accordion.find('.accordion-item').not(item).removeClass('active')
                .find('.accordion-content').slideUp(speed);
            // on affiche l'élément actif
            item.addClass('active')
                .find('.accordion-content').slideDown(speed);
        }

        // on initialise l'accordéon, sans animation 
        open(accordion.find('.active:first'), 0);

        // au clic sur un titre...
        accordion.on('click', '.accordion-title', function (ev) {
            ev.preventDefault();
            // ...on lance l'affichage de l'élément, avec animation
            open($(this).closest('.accordion-item'), toggleSpeed);
        });
    });

    /* -- Modals -- */

    $('a[rel="modal:open"]').click(function(e){
        e.preventDefault();
        $(this).modal({
            fadeDuration: 200
        });
        return false;
    });
});

/* -- Carousel -- */

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function afficheDate(){
    var ajd=new Date();
    document.getElementById('dateR').valueAsDate=ajd;
}

/* -- Gestion des regex dans le formulaire -- */

/*
const nom = document.getElementById('nom');
const prenom = document.getElementById('prenom');
const mail = document.getElementById('mail');
const cp = document.getElementById('cp');

let msgnom = document.getElementById('msgNom');
let msgprenom = document.getElementById('msgPrenom');
let msgmail = document.getElementById('msgMail');
let msgcp = document.getElementById('msgCp');

const envoyer = document.getElementById('envoyer');

const rnom = new RegExp('^[A-Z]*$');
const rprenom = new RegExp('^[A-Z][a-z]*$');
const rmail = new RegExp('^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$');
const rcp = new RegExp('^\d{5}$');

envoyer.addEventListener('click', function(e) {
    e.preventDefault();
    const rnomTest = rnom.test(nom.value);
    const rprenomTest = rprenom.test(prenom.value);
    const rmailTest = rmail.test(mail.value);
    const rcpTest = rcp.test(cp.value);
    if(rnomTest != true){
        msgnom.innerHTML = 'Lettres en majuscules uniquement';
    }
    if(rprenomTest != true){
        msgprenom.innerHTML = 'Lettres en majuscules et/ou minuscules uniquement';
    }
    if(rmailTest != true){
        msgmail.innerHTML = 'Adresse valide uniquement';
    }
    if(rcpTest != true){
        msgcp.innerHTML = 'Code postal composé de 5 chiffres uniquement';
    }
});
*/