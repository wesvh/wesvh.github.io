var numero =0;

function dioClick(){
    var body = document.getElementById("body");    
    let bulb = document.querySelector("#light");    
        if(esPar(numero)){
             body.style.backgroundColor ="black";
             bulb.classList.add("on");
                 for(i = 0 ; i<document.getElementsByClassName("item").length ; i++){
                      document.getElementsByClassName("item")[i].style.display="block"
                         }        } 
        else { 
            body.style.backgroundColor ="#f7f7f7";
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
      