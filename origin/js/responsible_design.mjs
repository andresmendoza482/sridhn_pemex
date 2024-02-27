
//PARA CAMBIAR LA BARRA DE NAVEgACION SEGUN SEA EL TAMAñO DEL DISPOSITIVO.

const responsible = () => {
    if(matchMedia("(min-width: 32rem)").matches) {
        console.log("ESTA SUCEDIENDO");
    }
};

export default responsible;