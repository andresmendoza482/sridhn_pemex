
const auth = () => {

    const JWT = false;


    if(!(window.location.pathname === "/src/index.html")) {//Si la ruta en la que se encuentra es diferente a la ruta index.html ejecuta la siguiente programación.
        if (!JWT) {//Si el JWT NO existe entonces me redirige al registro.
            window.location.href = "index.html";
            
            console.log("NO ESTAS LOGUEADO");
        }
    }


};

export default auth;