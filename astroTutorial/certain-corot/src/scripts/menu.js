/**
 * @description javascript que abre e fecha menu no astroBlog
 */
document.querySelector('.hamburguer').addEventListener('click', () => {
    document.querySelector('.links-nav').classList.toggle('expandido');
});