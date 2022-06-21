var numero =0;

function dioClick(){
    var body = document.getElementById("body");    
    let bulb = document.querySelector("#light");
    let bulbShadow =document.getElementsByClassName("bulb");
        if(esPar(numero)){
            document.getElementById("encendedor").style.color="#f7f7f7";
             body.style="--myColor1: #FFFFFF ; --myColor2: 	#000000;";
             //body.style ="radial-gradient( farthest-side circle at center top, #f7f7f7, #000 )";
             bulb.classList.add("on");
                 for(i = 0 ; i<document.getElementsByClassName("item").length ; i++){
                      document.getElementsByClassName("item")[i].style.display="block"
                         }        } 
        else { 
            document.getElementById("encendedor").style.color="black";
            body.style="--myColor1: #000000 ; --myColor2: 	#000000;"
            bulb.classList.remove("on");
                for(i = 0 ; i<document.getElementsByClassName("item").length ; i++){
                        document.getElementsByClassName("item")[i].style.display="none"
                        }           }
numero++;

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
    function esPar(numero)
    {
    return (numero % 2) == 0;
    }
      