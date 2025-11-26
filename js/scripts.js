const toggleColors = document.getElementById('toggle-colors');

const rootStyles = document.documentElement.style;



toggleColors.addEventListener('click', (e) => {
    rootStyles.setProperty('--bg-color-secciones', e.target.dataset.color)
});

