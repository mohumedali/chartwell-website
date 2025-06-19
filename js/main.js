let emailInput=document.getElementById("floatingInput")
let passInput=document.getElementById("floatingPassword")

document.forms[0].onsubmit= function(e){

    let emailValid=false;
    let passValid=false;
    if(emailInput.value !== ""){
        emailValid=true;
    }
    if(passInput.value !== ""){
        passValid=true;
        console.log("Valid")

    }
    if(emailValid === false || passValid === false)
    {
        e.preventDefault();
    }
}

let btnArrow = document.getElementById("btn-arrow");

window.onscroll=function(){
    if(scrollY >= 400)
    {
        btnArrow.style.opacity='1';
        btnArrow.style.transition='0.4s';
    }
    else{
        btnArrow.style.opacity='0'
        
    }
}
btnArrow.onclick = function(){
    scroll({
        behavior:"smooth",
        top:'0'
    })
}
