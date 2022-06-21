const btn_mobile = document.getElementById("barra");

function toggleMenu(){

    const nav = document.getElementById("navbarId");
    nav.classList.toggle('active')

};

btn_mobile.addEventListener('click', toggleMenu)