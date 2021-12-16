var formulario= document.getElementById('formulario');
var error= document.getElementById('error');
let boolean1= true;
let boolean2= true;
let boolean3= true;

function Form(nombre, apellido, correo){
    this.nombre= nombre,
	this.apellido= apellido,
    this.correo= correo;
    this.mostrar = function(){ 
		error.innerHTML+= 'El nombre es '+ nombre.value + ' su apellido es ' + apellido.value+ ' y el correo es '+ correo.value;
	}
}


const uno= document.getElementById('info');

const p=document.createElement('p');
p.innerText= "Aceptamos cualquier computadora con Sistema Operativo de Windows 7 en adelante.";
uno.appendChild(p);

const form= new Form(formulario.nombre, formulario.apellido, formulario.correo);

const datos = {Nombre: form.nombre.value, Apellido: form.apellido.value, Correo: form.correo.value};
const enJSON= JSON.stringify(datos);
console.log(enJSON);
const dato1 = JSON.parse(enJSON);
console.log(dato1.Nombre); 


const datosFormulario = [];
const listaFormulario = [];

function validarNombre(e){
	if (form.nombre.value == '' || nombre.value == null){
		error.style.display = 'block';
		error.innerHTML+= "Por favor completa el nombre. ";
		boolean1=false;
	}
	else{
		datosFormulario.push(form.nombre.value);
		boolean1= true;
		error.innerHTML="";
	}
}

function validarApellido(e){
	if (form.apellido.value == '' || apellido.value == null){
		error.style.display = 'block';
		error.innerHTML+= "Por favor completa el apellido. ";
		boolean2=false;
	}
	else{
		datosFormulario.push(form.apellido.value);
		listaFormulario.push(form.apellido.value);
		boolean2= true;
		error.innerHTML="";
	}
}

function validarCorreo(e){
	if (form.correo.value == '' || correo.value == null){
		error.style.display = 'block';
		error.innerHTML+= "Por favor completa el correo. ";
		boolean3=false;
	}
	else{
		datosFormulario.push(form.correo.value);	
		error.innerHTML="";
		boolean3= true;
		if (boolean1&&boolean2&&boolean3)
			form.mostrar();
			else if (form.correo.value == '' || correo.value == null)
					error.innerHTML+= "Por favor completa el correo. ";
					else if (form.apellido.value == '' || apellido.value == null)
							error.innerHTML+= "Por favor completa el apellido. ";
							else if (form.nombre.value == '' || nombre.value == null)
									error.innerHTML+= "Por favor completa el nombre. ";
	}
}
    
function validarForm(form){
	validarNombre(form);
	validarApellido(form);
	validarCorreo(form);
	console.log(datosFormulario);
	ordenar();

	const pAux= document.getElementById('textoForm');
	pAux.innerHTML= "Gracias por completar tus datos";
}

//Ordena por apellido
function ordenar(){
	listaFormulario.sort()
	for (const a of listaFormulario){
		console.log(a);
	}
}

//Clickear en cada integrante

const modalAbrir1= document.getElementById('modal-abrir1')
const modalAbrir2= document.getElementById('modal-abrir2')
const modalAbrir3= document.getElementById('modal-abrir3')
const modalCerrar1= document.getElementById('modal-cerrar1')
const modalCerrar2= document.getElementById('modal-cerrar2')
const modalCerrar3= document.getElementById('modal-cerrar3')
const modalContainer1= document.getElementById('modal-container1')
const modalContainer2= document.getElementById('modal-container2')
const modalContainer3= document.getElementById('modal-container3')
const foto = document.getElementById('fotosModal')

modalAbrir1.addEventListener('click', () =>{
	modalContainer1.classList.toggle('modal-active')
})
modalAbrir2.addEventListener('click', () =>{
	modalContainer2.classList.toggle('modal-active')
})
modalAbrir3.addEventListener('click', () =>{
	modalContainer3.classList.toggle('modal-active')
})
modalCerrar1.addEventListener('click', () =>{
	modalContainer1.classList.toggle('modal-active')
})
modalContainer1.addEventListener('click', () =>{
	modalContainer1.classList.toggle('modal-active')
})
modalCerrar2.addEventListener('click', () =>{
	modalContainer2.classList.toggle('modal-active')
})	
modalContainer2.addEventListener('click', () =>{
	modalContainer2.classList.toggle('modal-active')
})
modalCerrar3.addEventListener('click', () =>{
	modalContainer3.classList.toggle('modal-active')
})
modalContainer3.addEventListener('click', () =>{
	modalContainer3.classList.toggle('modal-active')
})


const llamarAPI= () =>{
	let id= document.getElementById("numid").value
	$.get(`https://jsonplaceholder.typicode.com/posts/${id}`, (resp) => {
	console.log(id)
	console.log(resp.title)
	$(`#datoAPI`).html(`
		<p>${resp}</p>
	`)
	})
}

$('#boton').click(() => {	
		llamarAPI()
})

$(function() {
	$(window).scroll(function(){
		$(".portada").slideUp('slow');
		$(".texto-portada").slideUp('slow');
  	});
});  

/*
window.sr = ScrollReveal({ reset: true });
sr.reveal('.module', { 
	viewFactor: 0.5
  });*/