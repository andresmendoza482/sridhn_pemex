//Variables de la programación de la sección cursos.
const $formFilter = document.querySelector(".form-filter");

//Variables de la programación de la sección seguimiento.
const $showGeneral = document.querySelector(".show-section-general");
const $showAdh = document.querySelector(".show-section-adh");
const $showManagment = document.querySelector(".show-section-managment");
const $showPartTime = document.querySelector(".show-section-parttime");
const $sectionGeneral = document.querySelector(".section-general");
const $sectionAdh = document.querySelector(".section-adh");
const $sectionManagment = document.querySelector(".section-managment");
const $sectionPartTime = document.querySelector(".section-parttime");

const showSections = () => {
    if($formFilter) {//Si existe el formulario de filtro ejecuta la siguiente programación.
        document.addEventListener("click", event => {
            const element = event.target;

            if(element.matches(".show-form-filter") && !$formFilter.classList.contains("hidden")) {
                $formFilter.classList.add("hidden");

            }else if(element.matches(".show-form-filter") && $formFilter.classList.contains("hidden")) {
                $formFilter.classList.remove("hidden");
            }

        });
    }

    if($sectionGeneral) {//Si existe la sección "Seguimiento general" ejecuta la siguiente programación.
        document.addEventListener("click", event => {
            const element = event.target;

            if(element.matches(".show-section-general") && !$sectionGeneral.classList.contains("hidden")) {
                $showGeneral.textContent = "Mostrar sección";
                $sectionGeneral.classList.add("hidden");

            }else if(element.matches(".show-section-general") && $sectionGeneral.classList.contains("hidden")) {
                $showGeneral.textContent = "Ocultar sección";
                $sectionGeneral.classList.remove("hidden");

            }
        });
    }

    if($sectionAdh) {//Si existe la sección "Seguimiento por ADH" ejecuta la siguiente programación.
        document.addEventListener("click", event => {
            const element = event.target;

            if(element.matches(".show-section-adh") && !$sectionAdh.classList.contains("hidden")) {
                $sectionAdh.classList.add("hidden");
                $showAdh.textContent = "Mostrar sección";

            } else if(element.matches(".show-section-adh") && $sectionAdh.classList.contains("hidden")) {
                console.log("alsnjaskjdn");
                $showAdh.textContent = "Ocultar sección";
                $sectionAdh.classList.remove("hidden");
            }



        });
    }

    if($sectionManagment) {//Si existe la sección "Seguimiento por punto de gestión" ejecuta la siguiente programación.
        document.addEventListener("click", event => {
            const element = event.target;

            if(element.matches(".show-section-managment") && !$sectionManagment.classList.contains("hidden")) {
                $showManagment.textContent = "Mostrar sección";
                $sectionManagment.classList.add("hidden");

            }else if(element.matches(".show-section-managment") && $sectionManagment.classList.contains("hidden")) {
                $showManagment.textContent = "Ocultar sección";
                $sectionManagment.classList.remove("hidden");
                
            }
        });

    }


    if($sectionPartTime) {//Si existe la sección "Tiempo medio de gestión" ejecuta la siguiente programación.
        document.addEventListener("click",  event => {
            const element = event.target;

            if(element.matches(".show-section-parttime") && !$sectionPartTime.classList.contains("hidden")) {
                $showPartTime.textContent = "Mostrar sección";
                $sectionPartTime.classList.add("hidden");

            }else if(element.matches(".show-section-parttime") && $sectionPartTime.classList.contains("hidden")) {
                $showPartTime.textContent = "Ocultar sección";
                $sectionPartTime.classList.remove("hidden");
                
            }
        });
    }
};


export default showSections;