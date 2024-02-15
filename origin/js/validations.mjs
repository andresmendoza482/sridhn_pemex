const $form = document.querySelector(".section__form");
const $error = document.querySelector(".section__error");

const loginValidations = () => {
    if($form) {
        document.addEventListener("keyup", (event) => { 
            if(event.target.matches(".section__input")) {
                const regex = new RegExp(event.target.pattern);
                
                if(!regex.test(event.target.value)) {
                    console.log($error.classList)
                    $error.classList.add("is-active");
                }else {
                    $error.classList.remove("is-active");
                }   

            }
        });
    }


};

export default loginValidations;
