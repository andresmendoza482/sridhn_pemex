const $modalLogout = document.querySelector(".modal-logout");
const $modalUser = document.querySelector(".modal-user");

//PROGRAMACION DE MODALES

const modal = () => {
    if ($modalUser) {//Si existe la ventana modal de usuario ejecuta la siguiente programación.
        document.addEventListener("click", (event) => {
            const element = event.target;//El elemento que origina el evento es asigando a una constante.
    
            if(element.matches(".btn-user")) {
                $modalUser.classList.remove("invisible");

            }else if(!(element.matches(".modal-user") || element.matches(".modal-user *"))) {
                $modalUser.classList.add("invisible");
            }
        }) 

    }

    if($modalLogout) {//Si existe la ventana modal de logout se ejecuta la siguiente programación.
        document.addEventListener("click", (event) => {
            const element = event.target;//El elemento que origina el evento es asigando a una constante.

            if(element.matches(".btn-logout")) {
                $modalUser.classList.add("invisible");
                $modalLogout.classList.remove("invisible");

            }else if(element.matches(".modal-logout__btn-cancel")) {
                $modalLogout.classList.add("invisible");
            }

        });
    }

};


export default modal;