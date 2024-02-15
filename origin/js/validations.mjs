const $form = document.querySelector(".section__form");
const $input = document.querySelectorAll(".section__input");

//FALTA VALIDACION DE SI EL INPUT TIENE EL ATRIBUTO REQUIRED ENTONCES NO GENERE MENSAJE "NO PUEDES DEJAR ESPACIOS VACIOS"
const loginValidations = () => {
    if($form) {//Si existe un formulario ejecuta la siguiente programación.
        for(let i = 0; i < $input.length; i++) {//Generación de mensajes de validación por cada input.
            if($input[i].getAttribute("pattern")) {//Si el input tiene el atributo "pattern" entonces tendrá un mensaje de validación.
                const $error = document.createElement("span");
                $error.classList.add("section__error");
                $error.setAttribute("id", $input[i].getAttribute("name"));
        
                $input[i].insertAdjacentElement("afterend", $error);
            }

        }

        document.addEventListener("keyup", (event) => { 
            if(event.target.matches(".section__input")) {//Si el elemento que origina el evento es igual a lo que hay en el selector CSS.
                const $error = document.getElementById(event.target.getAttribute("name"));
                
                if(!event.target.value) {//Si el elemento que origina el evento está vacío.
                    console.log("No puedes dejar espacios vacíos");
                    $error.textContent = "No puedes dejar espacios vacíos";
                    $error.classList.add("is-active");

                }else if(event.target.value){//Si el elemento que origina el evento NO está vacío.
                    $error.classList.remove("is-active");
                        
                    if(event.target.getAttribute("pattern")) {//Si el elemento que origina el evento está vacío y tiene el atributo "pattern".
                        const regex = new RegExp(event.target.getAttribute("pattern"));
                        const $error = document.getElementById(event.target.getAttribute("name"));
                        
                        if(!regex.test(event.target.value)) {
                            $error.textContent = event.target.dataset.error;
                            $error.classList.add("is-active");
                        }else {
                            $error.classList.remove("is-active");
                        }
                    }

                }
            } 
            
        });
    }


};

export default loginValidations;
