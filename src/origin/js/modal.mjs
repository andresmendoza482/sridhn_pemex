const $modalLogout = document.querySelector(".modal-logout");
const $modalUser = document.querySelector(".modal-user");

//PROGRAMACION DE MODALES

const modal = () => {
    if ($modalLogout) {//Si existe una ventana modal ejecuta la siguiente programación.
        document.addEventListener("click", (event) => {
            const element = event.target;//El elemento que origina el evento es asigando a una constante.
    
            if(element.matches(".btn-user")) {
                $modalLogout.classList.remove("invisible");

            }else if(element.matches(".modal-logout__btn-cancel")) {
                $modalLogout.classList.add("invisible");
            }
        }) 

    }

    if($modalUser) {
        document.addEventListener("click", (event) => {
            const element = event.target;

            if(element.matches(".btn-user")) {
                $modalUser.classList.remove("invisible");

            }else if(!(element.matches(".btn-user") || element.matches(".header-container__user-menu *")) || element.matches(".header-container__logout")) {
                $modalUser.classList.remove("is-visible");
            }

        });
    }

    //HACE FALTA LA FUNCIONALIDAD DEL BOTON DE CIERRE DE SESION QUE REDIRIJAN A LOGIN.
};


export default modal;