var numero =0;
var sonido = new Audio();
sonido.src = "./src/sound.mp3";
function dioClick(){
    
    sonido.play();
    var body = document.getElementById("body");    
    let bulb = document.querySelector("#light");
        if(esPar(numero)){
            document.getElementById("encendedor").style.color="#f7f7f7";
            body.style="--myColor1: #CBCBCB ; --myColor2: 	#000000;";
            bulb.classList.add("on");
                for(i = 0 ; i<document.getElementsByClassName("item").length ; i++){
                    document.getElementsByClassName("item")[i].style.display="block"
                }
        } 
        else { 
            document.getElementById("encendedor").style.color="black";
            body.style="--myColor1: #000000 ; --myColor2: 	#000000;"
            bulb.classList.remove("on");
                for(i = 0 ; i<document.getElementsByClassName("item").length ; i++){
                    document.getElementsByClassName("item")[i].style.display="none"
                }       
            }
numero++;
}
function esPar(numero){
return (numero % 2) == 0;
}

/*
function bombillo(x){
    console.log(x.value);
    var body = document.getElementById("body");
    body.style.backgroundColor =x.value;
    let bulb = document.querySelector("#light");
    if(x.value == "#f7f7f7"){bulb.classList.remove("on");
    for(i = 0 ; i<document.getElementsByClassName("item").length ; i++){
        document.getElementsByClassName("item")[i].style.display="none"
    }}    
    else{bulb.classList.add("on");
    for(i = 0 ; i<document.getElementsByClassName("item").length ; i++){
        document.getElementsByClassName("item")[i].style.display="block"
    }}}
*/

      