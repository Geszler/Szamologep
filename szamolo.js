const szamologep = document.getElementById("szamologep");
const kimenet = document.getElementById("kimenet");
const bemenet = document.getElementById("bemenet");

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
