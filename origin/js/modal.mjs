const $modalLogout = document.querySelector(".modal");
const $modalUser = document.querySelector(".header-container__user-menu");

const modal = () => {
    if ($modalLogout) {//Si existe una ventana modal ejecuta la siguiente programación.
        document.addEventListener("click", (event) => {
            const element = event.target;//El elemento que origina el evento es asigando a una constante.
    
            if(element.matches(".header-container__logout")) {
                $modalLogout.classList.add("is-visible");

            }else if(element.matches(".modal-container__btn--cancel")) {
                $modalLogout.classList.remove("is-visible");
            }
        }) 

    }

    if($modalUser) {
        document.addEventListener("click", (event) => {
            const element = event.target;

            if(element.matches(".header-container__user-btn")) {
                console.log("to flama");
                $modalUser.classList.add("is-visible");
            }else if(!(element.matches(".header-container__user-menu") || element.matches(".header-container__user-menu *")) || element.matches(".header-container__logout")) {
                $modalUser.classList.remove("is-visible");
            }

        });
    }

    //HACE FALTA LA FUNCIONALIDAD DEL BOTON DE CIERRE DE SESION QUE REDIRIJAN A LOGIN.
};


export default modal;