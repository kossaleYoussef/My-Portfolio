const menubtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const NavItems = document.querySelectorAll('.nav-item');
const middletext = document.getElementById('#centered-text');

let showMenu = false;

menubtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menubtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        NavItems.forEach(item => item.classList.add('show'));
        showMenu = true;
    } else {
        menubtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        NavItems.forEach(item => item.classList.remove('show'));

        showMenu = false;
    }
}

$(window).on('load', function () {
    $('.Preloader').addClass('complete');
});



if (document.body.classList == "contact") {

    function animateForm() {
        const arrows = document.querySelectorAll(".arrowRight");

        arrows.forEach(arrow => {
            arrow.addEventListener('click', function () {
                const input = arrow.previousElementSibling;
                const parent = arrow.parentElement;
                const nextparent = parent.nextElementSibling;
                console.log(nextparent);

                // check name validation
                if (input.classList.contains('nameInput')) {
                    if (validateUser(input)) {
                        nextSlide(parent, nextparent);
                    }
                }

                // check email validation

                if (input.classList.contains('emailInput')) {
                    if (validateEmail(input)) {
                        nextSlide(parent, nextparent);
                    }
                }


            });


        });

        document.querySelector(".Sendbtn").addEventListener('click', function (e) {

            const myvalue = document.querySelector('.messageInput').value;
            if (myvalue === '') {
                e.preventDefault();
                this.parentElement.classList.add('error');
                document.querySelector('.errortext').innerHTML = "Champ de saisie vide !!";

                document.querySelector('.errortext').classList.add('showError');
                document.querySelector('.errortext').classList.remove('hideError');
                setTimeout(function(){
                    document.querySelector('.errortext').classList.add('hideError');
                    document.querySelector('.errortext').classList.remove('showError');
                },3000);
                this.parentElement.style.animation = "shake 0.5s ease";

            }


        });
    }

    function validateUser(user) {

        const value = user.value;
        const regex = /[a-zA-Z1-9_-]+/;
        if (regex.test(value) && value.length < 20) {
            return true;
        } else {
            user.parentElement.classList.add('error');
            document.querySelector('.errortext').innerHTML = "Champ de saisie vide ou la valeur entrée est trop longue (+20) !!";

            document.querySelector('.errortext').classList.add('showError');
            document.querySelector('.errortext').classList.remove('hideError');
            setTimeout(function(){
                document.querySelector('.errortext').classList.add('hideError');
                document.querySelector('.errortext').classList.remove('showError');
            },3000);
            user.parentElement.style.animation = "shake 0.5s ease";

        }

    }

    function validateEmail(email) {
        const value = email.value;
        const regex = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
        if (regex.test(value)) {
            return true;
        } else {
            email.parentElement.classList.add('error');
            document.querySelector('.errortext').innerHTML = "Champ vide ou l'email entré n'est pas valide !!";

            document.querySelector('.errortext').classList.add('showError');
            document.querySelector('.errortext').classList.remove('hideError');
            setTimeout(function(){
                document.querySelector('.errortext').classList.add('hideError');
                document.querySelector('.errortext').classList.remove('showError');
            },3000);
            email.parentElement.style.animation = "shake 0.5s ease";


        }
    }

    function nextSlide(parent, nextparent) {
        parent.classList.add("innactive");
        parent.classList.remove("active");
        nextparent.classList.add("active");

        document.querySelector('.errortext').classList.add('hideError');
    }



    animateForm();


}