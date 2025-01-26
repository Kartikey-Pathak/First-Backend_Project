let passbtn=document.querySelector("#togglepass");



passbtn.addEventListener("click",()=>{
    let ispass=pass.type==="password";

    pass.type=ispass?"text":"password";

    if(ispass){
        passbtn.classList.remove("fa-eye"); 
        passbtn.classList.add("fa-eye-slash");
    }else{
        passbtn.classList.remove("fa-eye-slash"); 
        passbtn.classList.add("fa-eye");
    }
});