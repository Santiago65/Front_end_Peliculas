const formularioRegistro = document.getElementById('formRegistro');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const email = document.getElementById('email');
const password = document.getElementById('password');
const date = document.getElementById('date');
const pais= document.getElementById('pais');
const error = document.getElementById('error');
error.style.color = "red";

//expresiones regulares
const expresionNombreApellido =/^[a-zA-Z0-9\_\-]{4,16}$/;
const expresionEmail =/\w+@\w+\.+[a-z]/;
const expresionPassword =/^.{4,12}$/;

	
formularioRegistro.addEventListener('submit',(event) =>{
	event.preventDefault();
	
	let mensajesError = [];
	let mensajeEnviado = "El formulario se envió exitosamente ♥";

	if(nombre.value === null|| nombre.value === ''|| !expresionNombreApellido.test(nombre.value)){
		mensajesError.push("Ingresa un nombre válido");
	}
    if(apellido.value === null|| apellido.value === ''|| !expresionNombreApellido.test(apellido.value)){
		mensajesError.push("Ingresa un apellido válido");
	}
	if(email.value === null || email.value === ''|| !expresionEmail.test(email.value)){
		mensajesError.push("Ingresa un email válido")
	}
	if(password.value === null||password.value === '' || !expresionPassword.test(password.value)){
		mensajesError.push("Ingresa una contraseña válida");
	}
    if(date.value === null||date.value === ''){
		mensajesError.push("Ingresa una fecha válida");
	}
    if(pais.value === null||pais.value === ''){
		mensajesError.push("Ingrese un pais");
	}
	else{
		alert(mensajeEnviado);
       
	}
	error.innerHTML = mensajesError.join(',<br>');
});