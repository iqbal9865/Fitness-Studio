var btnToggleNav = document.getElementById("btnToggleNav");
var container= document.querySelector('.container');

btnToggleNav.addEventListener('click', function() {
    console.log('clecked: '+container);
    if(container.classList.contains('open-nav')) {
        container.classList.remove('open-nav');
    } else {
        container.classList.add('open-nav');
    }
});