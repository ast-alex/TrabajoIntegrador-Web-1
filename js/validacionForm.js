//-------------------------VALIDACION DE FORMULARIO:-----------------------//
const form = document.getElementById("contacto");
let dataEnvElem;

form.addEventListener("submit", function(event){
    event.preventDefault();

    const name =  document.getElementById('name').value;
    const lastname =  document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if(name.trim() === "" || lastname.trim() === "" || email.trim() === ""){
        const errorE = document.createElement("p");
        errorE.textContent = "Complete los campos, son OBLIGATORIOS.";
        form.appendChild(errorE);
    }else{
        //const envData = document.createElement("div");
        //envData.innerHTML = "<h3>Datos enviados:</h3>" +
        dataEnvElem = document.createElement("div");
        dataEnvElem.innerHTML = "<h2>Gracias por contactarnos!</h3>"+
                            "<h3>Datos enviados:</h3>" +
                            "<p>Nombre: " + name + "</p>" +
                            "<p>Apellido: " + lastname + "</p>" +
                            "<p>Email: " + email + "</p>" +
                            "<p>Mensaje: " + message + "</p>";
        form.style.display = "none";                            
        form.parentNode.insertBefore(dataEnvElem, form.nextSibling);
        
        form.reset();
    }
});


//-------------------------BOTON LIMPIAR FORM Y CREATE ELEMENT:-----------------------//
const btnLimpiar = document.getElementById('btnLimpiar');
btnLimpiar.addEventListener('click', limpiarForumlario);

function limpiarForumlario(){
    document.getElementById('name').value = '';
    document.getElementById('lastname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';

    if (dataEnvElem){
        form.parentNode.removeChild(dataEnvElem);
    }
    form.style.display = "block";
}