const $modal = document.querySelector(".modal");

const modal = () => {
    if ($modal) {
        document.addEventListener("click", (event) => {
            const element = event.target;
    
            if(element.matches(".header-container__logout")) {
                $modal.classList.add("is-active");
    
            }else if(element.matches(".modal-container__btn--cancel")) {
                $modal.classList.remove("is-active");
            }
        }) 

    }

};


export default modal;