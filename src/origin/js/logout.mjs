const $btnLogout = document.querySelector(".modal-logout__btn-logout");


const logout = () => {

    if($btnLogout) {
        document.addEventListener("click", event => {
            const element = event.target;

            if(element.matches(".modal-logout__btn-logout") ) {

                localStorage.setItem("JWT", "false")
                window.location.href = "index.html"
            }
        });
    }

};

export default logout;