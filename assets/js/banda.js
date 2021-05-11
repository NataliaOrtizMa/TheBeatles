// Variables document
let inteJhon = document.getElementById("inteJhon");
let intePaul = document.getElementById("intePaul");
let inteGeorge = document.getElementById("inteGeorge");
let inteRingo = document.getElementById("inteRingo");

let jhonCant = document.getElementById("jhonCant");
let paulCant = document.getElementById("paulCant");
let georgeCant = document.getElementById("georgeCant");
let ringoCant = document.getElementById("ringoCant");

// Funciones
const inteJhonf = () => {
    jhonCant.classList.add("card-opacity");
    ringoCant.classList.remove("card-opacity");
    paulCant.classList.remove("card-opacity");
    georgeCant.classList.remove("card-opacity");
};

const intePaulf = () => {
    paulCant.classList.add("card-opacity");
    ringoCant.classList.remove("card-opacity");
    jhonCant.classList.remove("card-opacity");
    georgeCant.classList.remove("card-opacity");
};

const inteGeorgef = () => {
    georgeCant.classList.add("card-opacity");
    paulCant.classList.remove("card-opacity");
    jhonCant.classList.remove("card-opacity");
    ringoCant.classList.remove("card-opacity");
};

const inteRingof = () => {
    ringoCant.classList.add("card-opacity");
    paulCant.classList.remove("card-opacity");
    jhonCant.classList.remove("card-opacity");
    georgeCant.classList.remove("card-opacity");
};

// Onclicks
inteJhon.onclick = () => inteJhonf();
intePaul.onclick = () => intePaulf();
inteGeorge.onclick = () => inteGeorgef();
inteRingo.onclick = () => inteRingof();