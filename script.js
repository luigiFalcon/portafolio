// script.js

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav ul li a");
    const content = document.getElementById("content");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const section = link.getAttribute("data-section");
            loadSection(section);
        });
    });

    function loadSection(section) {
        fetch(`sections/${section}.html`)
            .then(response => response.text())
            .then(data => {
                content.innerHTML = data;
            })
            .catch(error => console.error("Error al cargar la sección:", error));
    }

    // Cargar la sección inicial (por ejemplo, "about")
    loadSection("about");
});
