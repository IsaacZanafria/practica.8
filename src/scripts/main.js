const barraCalc = document.querySelector("#barra")
const allButtons = document.querySelectorAll(".botones button")

allButtons.forEach((boton) => {
    boton.addEventListener("click", () => {
        if(boton.value === "="){
            try {
                barraCalc.value = eval(barraCalc.value);
            }catch (error) {
                barraCalc.value = "ERROR";
            }
        }else if(boton.value === "AC"){
            barraCalc.value = ""
        }else if(boton.value === "Del"){
            barraCalc.value = barraCalc.value.slice(0, -1)
        }else{
            barraCalc.value += boton.value
        }
    })  
});