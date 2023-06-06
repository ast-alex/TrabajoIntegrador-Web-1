//-------------------------VALIDACION DE FORMULARIO:-----------------------//
const form = document.getElementById("contacto");
let dataEnvElem;

form.addEventListener("submit", function(event){
    event.preventDefault();
    validarFormulario();
});
function validarFormulario(){
    const name =  document.getElementById('name').value;
    const lastname =  document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const errorContenedor = document.getElementById('errorContenedor');
    errorContenedor.innerHTML = '';

    let validarEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    let cont = 0;

    if(name.trim() === ""){
        mostrarError('name', "Debe ingresar su nombre en el formulario", errorName);
        if(cont == 0){
            document.getElementById('name').focus();
        }
        cont++;
    }
    if(lastname.trim() === ""){
        mostrarError('lastname', "Debe ingresar su apellido en el formularios", errorLastName);
        if(cont == 0){
            document.getElementById('lastname').focus();
        }
        cont++;
    }
    if(!validarEmail.test(email)){
        mostrarError('email',"Debe ingresar un Correo Invalido", errorEmail);
        if(cont == 0){
            document.getElementById('email').focus();
        }
        cont++;
    }
    if(email.trim() === ""){
        mostrarError('email', "Ingrese un email", errorEmail);
        if(cont == 0){
            document.getElementById('email').focus();
        }
        cont++;
    }
    if(message.trim()=== ""){
        mostrarError('message',"Ingrese un mensaje")
            if(cont == 0){
                document.getElementById('message').focus();
            }
            cont++;
        }
    if(message.length > 200){
        mostrarError('message', "El mensaje tiene una longitud maxima de 200 caracteres")
        if(cont == 0){
            document.getElementById('message').focus();
        }
        cont++;
    }
    if (cont == 0){
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
        return false;
}
    function mostrarError(field, message){
            const errorContenedor = document.getElementById('errorContenedor');
            const errorElemento = document.createElement("p");
            errorElemento.textContent = message;
            errorContenedor.appendChild(errorElemento);            
            document.getElementById(field).classList.add('error');
        }



//     if(name.trim() === ""){
//         mostrarError("name", "Ingrese su nombre");
//     } 
//     if(lastname.trim() === ""){
//         mostrarError("lastname", "Ingrese su apellido");
//     } 
//     if(email.trim() === ""){
//         mostrarError("email", "Ingrese su correo electronico");
//     } else if(!validarEmail(email)){
//         mostrarError("email", "Ingrese un correo electronico VALIDO.");
//     }
//     if(errorContenedor.innerHTML === ''){
//         dataEnvElem = document.createElement("div");
//         dataEnvElem.innerHTML = "<h2>Gracias por contactarnos!</h3>"+
//                             "<h3>Datos enviados:</h3>" +
//                             "<p>Nombre: " + name + "</p>" +
//                             "<p>Apellido: " + lastname + "</p>" +
//                             "<p>Email: " + email + "</p>" +
//                             "<p>Mensaje: " + message + "</p>";
//         form.style.display = "none";                            
//         form.parentNode.insertBefore(dataEnvElem, form.nextSibling);
//         form.reset();
//     }
    
//     // || lastname.trim() === "" || email.trim() === ""){
//     //     const errorE = document.createElement("p");
//     //     errorE.textContent = "Complete los campos, son OBLIGATORIOS.";
//     //     form.appendChild(errorE);
//     // }else{
//         //const envData = document.createElement("div");
//         //envData.innerHTML = "<h3>Datos enviados:</h3>" +
        
// });

// function mostrarError(field, message){
//     const errorContenedor = document.getElementById('errorContenedor');
//     const errorElemento = document.createElement("p");
//     errorElemento.textContent = message;
//     errorContenedor.appendChild(errorElemento);
//     document.getElementById(field).classList.add('error');
// }

// function validarEmail(email){
//     const emailFormato = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
//     return emailFormato.test(email);
// }

//-------------------------BOTON LIMPIAR FORM Y CREATE ELEMENT:-----------------------//
const btnLimpiar = document.getElementById('btnLimpiar');
btnLimpiar.addEventListener('click', limpiarForumlario);

function limpiarForumlario(){
    document.getElementById('name').value = '';
    document.getElementById('lastname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';

    const errorContenedor = document.getElementById('errorContenedor');
    errorContenedor.innerHTML = '';
    document.querySelectorAll('.error').forEach((element) =>{
        element.classList.remove('error');
    })

    if (dataEnvElem){
        form.parentNode.removeChild(dataEnvElem);
    }
    form.style.display = "block";
}