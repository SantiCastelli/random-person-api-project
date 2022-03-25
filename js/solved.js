// Tu código aquí

let boton = document.querySelector("#btn");
let nombre = document.querySelector("#first");
let apellido = document.querySelector("#last");
let lugar = document.querySelector("#country");
let telefono = document.querySelector("#phone");
let email = document.querySelector("#email");
let foto = document.querySelector("#photo");

boton.addEventListener("click", async function(){
    
    let response = await fetch("https://randomuser.me/api/")
    console.log(response);

    persona = await response.json();
    console.log(persona.results[0]);
    console.log(persona.results[0].name.first);

    foto.src = persona.results[0].picture.medium;
    nombre.textContent = persona.results[0].name.first;
    apellido.textContent = persona.results[0].name.last;
    lugar.textContent = persona.results[0].location.country;
    telefono.textContent = persona.results[0].phone;
    email.textContent = persona.results[0].email;    
});