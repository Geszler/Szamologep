const kimenet = document.getElementById("kimenet");

function gombok(kiiras) {
    kimenet.value += kiiras;
}

function torles() {
    kimenet.value = "";
}

function vegeredmeny() {
    try{
        kimenet.value = eval(kimenet.value); 
    }   
    catch(error){
        kimenet.value = "Hiba";
    }     
}

function gyok() {
    try {
        kimenet.value = Math.sqrt(eval(kimenet.value)); 
    } catch (error) {
        kimenet.value = "Hiba";
    }
}
function negyzet() {
    try {
        kimenet.value = Math.pow(eval(kimenet.value), 2);
    } catch (error) {
        kimenet.value = "Hiba";
    }
}