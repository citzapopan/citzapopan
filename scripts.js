document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Aquí puedes agregar lógica para verificar el usuario y contraseña
    if (username === 'usuario' && password === 'contraseña') {
        alert('Inicio de sesión exitoso');
        // Redirigir a la plataforma de alumnos o hacer algo más
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});
