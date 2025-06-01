const nav = document.querySelectorAll('.nav__div2 a');

function handleLink(){
    nav.forEach(link => {
        link.classList.add('notClicked');
    });
    this.classList.remove('notClicked');
    this.classList.add('clicked');
}

nav.forEach(link => {
    link.addEventListener('click', handleLink);
});