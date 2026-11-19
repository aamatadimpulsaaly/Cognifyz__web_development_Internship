
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navItems = navLinks.querySelectorAll("a");

// Open and close mobile navigation
function setMenuOpen(isOpen) {
    navLinks.classList.toggle("active", isOpen);
    menuToggle.classList.toggle("active", isOpen);

    menuToggle.setAttribute("aria-expanded", String(isOpen));

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
}

menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.contains("active");
    setMenuOpen(!isOpen);
});

// Close menu after selecting a navigation link
navItems.forEach(function (item) {
    item.addEventListener("click", function () {
        setMenuOpen(false);
    });
});

// Close menu when Escape is pressed
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        setMenuOpen(false);
    }
});

// Close mobile menu when returning to desktop layout
window.addEventListener("resize", function () {
    if (window.innerWidth > 850) {
        setMenuOpen(false);
    }
});

// Automatically update copyright year
document.getElementById("year").textContent =
    new Date().getFullYear();
