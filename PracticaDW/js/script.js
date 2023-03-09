// const documento = document;
// console.log(documento);

document.addEventListener("DOMContentLoaded", function (){
    // Activar menu de navegación
    const toggleButton = document.getElementById("navi_button");
    const menu = document.getElementsByTagName('ul')[0];
    toggleButton.addEventListener('click', function(){
        menu.classList.toggle('active');
    })
});