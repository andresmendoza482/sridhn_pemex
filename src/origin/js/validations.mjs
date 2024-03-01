const $form = document.querySelector(".form-login");
const $input = document.querySelectorAll(".form-login__input-text");

//VALIDACIONES DE FORMULARIOS

const loginValidations = () => {
    if($form) {//Si existe un formulario ejecuta la siguiente programación.
        for(let i = 0; i < $input.length; i++) {//Generación de mensajes de validación por cada input.
            if($input[i].required || $input[i].getAttribute("pattern")) {//Si el input tiene el atributo "required" o el atributo "pattern" entonces tendrá un mensaje de validación. 
                const $error = document.createElement("span");//Se crea dinámicamente por cada input con alguna validación un span para el mensaje de error.
                $error.classList.add("form-login__error");//Se le agrega su clase correspondiente para los estilos.
                $error.setAttribute("id", $input[i].getAttribute("name"));//Se le agrega un id con el nombre del input al cual pertenece el error para poder indentificarlo.
                
                $input[i].insertAdjacentElement("afterend", $error);//Se inserta el mensaje de error en el DOM.
            }

        }

        document.addEventListener("keyup", (event) => { 
            const element = event.target;

            if(element.matches(".form-login__input-text")) {//Si el elemento que origina el evento es igual a lo que hay en el selector CSS.
                const $error = document.getElementById(element.getAttribute("name"));

                if(!element.value) {//Si el elemento que origina el evento está vacío.
                    $error.textContent = "No puedes dejar este campo vacío";//Se agrega el mensaje correspondiente al error.
                    $error.classList.add("is-visible");

                }else if(element.value){//Si el elemento que origina el evento NO está vacío.
                    $error.classList.remove("is-visible");
                    
                    //Para esta validación el input ya no está vacío. 
                    if(element.getAttribute("pattern")) {//Si el elemento que origina el evento tiene el atributo "pattern".
                        const regex = new RegExp(element.getAttribute("pattern"));/*Se crea una una expresión regular 
                        con lo que haya en el atributo "pattern" del elemento que origina el evento.*/
                        
                        //Si lo que hay en el elemento que origina el evento NO cumple con la expresión regular.
                        if(!regex.test(element.value)) {
                            $error.textContent = element.dataset.error;//El mensaje de error es igual al error que hay en su data-attribute.
                            $error.classList.add("is-visible");//Se le agrega la clase "is-active para poder mostrar el error de validación".

                        }else {//En caso de que sí cumpla con la expresión regular.
                            $error.classList.remove("is-visible");//Se remueve la clase "is-active" para poder mostrar el error de la validación.
                        }
                    }

                }
            } 
            
        });
    }

};

export default loginValidations;
