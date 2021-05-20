document.addEventListener('DOMContentLoaded', function() {
    setTimeout(tiempo, 1800);
});
function tiempo () {
    document.getElementById('contenid').classList.add('ocultar');
    document.body.classList.add('activo');
}