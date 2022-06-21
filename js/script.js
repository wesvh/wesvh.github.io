function bombillo(x){
    console.log(x.value);
    var body = document.getElementById("body");
    body.style.backgroundColor =x.value;
    var css = document.getElementById("text");
    var css1 = document.getElementById("text1");
    css.style.display="block";
    let bulb = document.querySelector("#light");
    if(x.value == "#f7f7f7"){bulb.classList.remove("on");
    css.style.display="none";
    css1.style.display="none";}    
    else{
    bulb.classList.add("on");
    css.style.display="block";
    css1.style.display="block";}}
   
      