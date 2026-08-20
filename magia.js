function crearEstrellas(cantidad) {
    var contenedor = document.getElementById('estrellas');
    if (!contenedor) return;
    for (var i = 0; i < cantidad; i++) {
        var e = document.createElement('div');
        e.className = 'estrella';
        var tam = (Math.random() * 3 + 1).toFixed(1);
        e.style.width = tam + 'px';
        e.style.height = tam + 'px';
        e.style.left = (Math.random() * 100).toFixed(2) + '%';
        e.style.top = (Math.random() * 100).toFixed(2) + '%';
        e.style.setProperty('--d', (Math.random() * 3 + 2).toFixed(1) + 's');
        e.style.animationDelay = (Math.random() * 4).toFixed(1) + 's';
        contenedor.appendChild(e);
    }
}

crearEstrellas(80);

function leerUsuarios() {
    try {
        return JSON.parse(localStorage.getItem('usuarios') || '{}');
    } catch (e) {
        return {};
    }
}

function guardarUsuarios(usuarios) {
    try {
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
    } catch (e) {}
}

function sesionActiva() {
    try {
        return !!sessionStorage.getItem('sesion');
    } catch (e) {
        return false;
    }
}

function usuarioActual() {
    try {
        return sessionStorage.getItem('sesion') || '';
    } catch (e) {
        return '';
    }
}

function iniciarSesion(usuario) {
    try {
        sessionStorage.setItem('sesion', usuario);
    } catch (e) {}
}

function verificarSesion() {
    if (!sesionActiva()) {
        window.location.href = 'Login.html';
    }
}

function cerrarSesion() {
    try {
        sessionStorage.removeItem('sesion');
    } catch (e) {}
    window.location.href = 'Login.html';
}
