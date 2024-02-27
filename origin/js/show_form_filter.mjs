const $formFilter = document.querySelector(".form-filter");
const $showFormFilterBtn = document.querySelector(".show-form-filter");

const showFormFilter = () => {
    if($formFilter) {
        document.addEventListener("click", event => {
            const element = event.target;

            if(element.matches(".show-form-filter") && !$formFilter.classList.contains("hidden")) {
                $formFilter.classList.add("hidden");

            }else if(element.matches(".show-form-filter") && $formFilter.classList.contains("hidden")) {
                $formFilter.classList.remove("hidden");
            }

        });
    }
};


export default showFormFilter;