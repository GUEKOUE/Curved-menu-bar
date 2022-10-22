function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

/* ========== ACTIVE LINK ========== */
const navLink = document.querySelectorAll(".nav_link,.nav2_link");

function linkColor() {
    navLink.forEach(link => link.classList.remove('active-link'))
    this.classList.add('active-link')
}

navLink.forEach(link => link.addEventListener('click', linkColor))