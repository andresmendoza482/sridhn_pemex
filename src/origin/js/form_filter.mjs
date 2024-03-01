const $formFilter = document.querySelector(".form-filter");

//PROGRAMCION DEL FORMULARIO DE FILTROS DE CURSOS.

const formFilter = () => {
    if($formFilter) {
        document.addEventListener("click", event => {
            const element = event.target;

            if(element.matches(".form-filter__clear")) {
                $formFilter.reset();

            }
        });
    }

};


export default formFilter;