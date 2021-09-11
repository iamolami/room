function openMenu() {

    const navigation = document.getElementById('navigation');
    navigation.style.display = 'block';
}

const openToggle = document.getElementById('toggle');
openToggle.addEventListener('click', openMenu);

function closeMenu () {

    const nav = document.getElementById('navigation');
    nav.style.display = 'none';
}

const toggle = document.getElementById('close');
toggle.addEventListener('click', closeMenu);
