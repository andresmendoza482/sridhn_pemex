const $nav = document.querySelector(".header-container__nav");
const $btn = document.querySelector(".header-container__btn");

const hamburguerBtn = () => {
    if($btn) {//Si existe el botón de hamburguesa ejecuta la siguiente programación.
        document.addEventListener("click", (event) => {
            const element = event.target;//El elemento que origina el evento se asigna a una constante.

            if(element.matches(".header-container__btn")) {//Si elemento que origina el evento es igual al botón de hamburguesa.
                $nav.classList.toggle("is-visible");/* Al elemento "nav" se le asigna la clase "is-visible" 
                en caso de que no la tenga o en caso de tenerla se le remueve. */
    
                /* Si el elemento "nav" tiene la clase "is-visible" y además el elemento que origina el evento
                es diferente al elemento "nav" o es diferente al elemento "span" el cual describe la sección del elemento "nav"
                entonces remueve la clase "is-visible" al elemento "nav".
                  */
            }else if($nav.classList.contains("is-visible") && !(element.matches(".header-container__nav") || element.matches(".header-container__span"))) {
                $nav.classList.remove("is-visible");
            }
    
        });

    }
    
};


export default hamburguerBtn;