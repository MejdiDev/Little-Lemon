const hideMobileNav = () => {
    document.querySelector('header nav ul').classList.remove('active');
    document.getElementById('overlay').style.opacity = "0";

    setTimeout(() => {
        document.querySelector('header nav ul').classList.remove('seen');
        document.getElementById('overlay').classList.remove('seen');
        document.querySelector('body').classList.remove('hidden');
    }, 400);
}

const showMobileNav = () => {
    document.getElementById('overlay').classList.add('seen');
    document.querySelector('header nav ul').classList.add('seen');
    
    setTimeout(() => {
        document.getElementById('overlay').style.opacity = "0.7";
        document.querySelector('header nav ul').classList.add('active');
    }, 1);
    document.querySelector('body').classList.add('hidden');
}

export { showMobileNav, hideMobileNav };