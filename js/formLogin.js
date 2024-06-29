const formulario = document.getElementById('formulario');
const usuario = document.getElementById('usuario');
const email = document.getElementById('email');
const contraseña = document.getElementById('contraseña');
const error = document.getElementById('error');
error.style.color = "red";

//expresiones regulares
const expresionUsuario =/^[a-zA-Z0-9\_\-]{4,16}$/;
const expresionEmail =/\w+@\w+\.+[a-z]/;
const expresionContraseña =/^.{4,12}$/;

	
formulario.addEventListener('submit',(event) =>{
	event.preventDefault();
	
	let mensajesError = [];
	let mensajeEnviado = "El formulario se envió exitosamente ♥";

	if(usuario.value === null|| usuario.value === ''|| !expresionUsuario.test(usuario.value)){
		mensajesError.push("Ingresa un usuario válido");
	}
	if(email.value === null || email.value === ''|| !expresionEmail.test(email.value)){
		mensajesError.push("Ingresa un email válido")
	}
	if(contraseña.value === null||contraseña.value === '' || !expresionContraseña.test(contraseña.value)){
		mensajesError.push("Ingresa una contraseña válida");
	}
	else{
		alert(mensajeEnviado);
	}
	error.innerHTML = mensajesError.join(',<br>');
});







