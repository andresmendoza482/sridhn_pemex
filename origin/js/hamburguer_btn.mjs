const $nav = document.querySelector(".header-container__nav");

const hamburguerBtn = () => {
    
    document.addEventListener("click", (event) => {
        if(event.target.matches(".header-container__btn")) {
            $nav.classList.toggle("is-visible");

        }else if($nav.classList.contains("is-visible") && !(event.target.matches(".header-container__nav *"))) {
            $nav.classList.remove("is-visible");
        }

    });
};


export default hamburguerBtn;