const hamburgerMenu = docuent.queuerySelector (".hamburgerMenu");
const navMenu = document.querySelector (".navMenu");

hamburgerMenu.addEventListener ("click", () => {
    hamburgerMenu.classList.toggle ("active");
    navMenu.classList.toggle ("active");
});

document.querySelectorAll(".navLink").forEach (n => n.addEventListener ("click", () => {
    navMenu.classList.remove ("active");
    hamburgerMenu.classList.remove ("active");
    
}));